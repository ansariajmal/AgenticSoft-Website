# AgenticSoft Website Deployment Guide

## Overview
This guide provides step-by-step instructions to deploy the AgenticSoft website on your server. The application is a full-stack Node.js application with React frontend.

## System Requirements

### Server Requirements
- **Operating System**: Ubuntu 20.04+ / CentOS 7+ / Debian 10+
- **RAM**: Minimum 1GB (2GB recommended)
- **Storage**: At least 2GB free space
- **Node.js**: Version 18.x or higher
- **Database**: PostgreSQL 12+ (optional - can use in-memory storage)

### Domain & SSL
- Domain name pointed to your server IP
- SSL certificate (Let's Encrypt recommended)

## Pre-deployment Setup

### 1. Install Node.js
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# CentOS/RHEL
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Verify installation
node --version
npm --version
```

### 2. Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
```

### 3. Install PostgreSQL (Optional)
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# CentOS/RHEL
sudo yum install postgresql-server postgresql-contrib
sudo postgresql-setup initdb
sudo systemctl enable postgresql
sudo systemctl start postgresql
```

## Deployment Steps

### Step 1: Upload Project Files
1. Upload the entire project folder to your server (e.g., `/var/www/agenticsoft`)
2. Set proper permissions:
```bash
sudo chown -R www-data:www-data /var/www/agenticsoft
sudo chmod -R 755 /var/www/agenticsoft
```

### Step 2: Install Dependencies
```bash
cd /var/www/agenticsoft
npm install
```

### Step 3: Build the Application
```bash
npm run build
```

### Step 4: Configure Environment Variables
Create a `.env` file in the project root:
```bash
# Database (optional - uses in-memory storage by default)
DATABASE_URL=postgresql://username:password@localhost:5432/agenticsoft

# Production settings
NODE_ENV=production
PORT=3000

# Add any API keys if needed
# OPENAI_API_KEY=your_openai_key_here
```

### Step 5: Start the Application
```bash
# Start with PM2
pm2 start npm --name "agenticsoft" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

## Web Server Configuration

### Option 1: Nginx (Recommended)
Create `/etc/nginx/sites-available/agenticsoft`:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/agenticsoft /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Option 2: Apache
Create `/etc/apache2/sites-available/agenticsoft.conf`:
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
</VirtualHost>
```

Enable the site:
```bash
sudo a2enmod proxy proxy_http
sudo a2ensite agenticsoft
sudo systemctl reload apache2
```

## SSL Configuration (Let's Encrypt)

### Install Certbot
```bash
# Ubuntu/Debian
sudo apt install certbot python3-certbot-nginx

# CentOS/RHEL
sudo yum install certbot python3-certbot-nginx
```

### Get SSL Certificate
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Database Setup (Optional - for persistent storage)

### 1. Create Database
```bash
sudo -u postgres psql
CREATE DATABASE agenticsoft;
CREATE USER agenticsoft_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE agenticsoft TO agenticsoft_user;
\q
```

### 2. Update Environment Variable
```bash
DATABASE_URL=postgresql://agenticsoft_user:your_secure_password@localhost:5432/agenticsoft
```

### 3. Run Database Migrations
```bash
npm run db:push
```

## Monitoring & Maintenance

### View Application Logs
```bash
pm2 logs agenticsoft
```

### Monitor Application Status
```bash
pm2 status
pm2 monit
```

### Restart Application
```bash
pm2 restart agenticsoft
```

### Update Application
```bash
cd /var/www/agenticsoft
git pull origin main  # if using git
npm install
npm run build
pm2 restart agenticsoft
```

## Firewall Configuration
```bash
# Allow HTTP and HTTPS
sudo ufw allow 80
sudo ufw allow 443

# Allow SSH (if not already allowed)
sudo ufw allow 22

# Enable firewall
sudo ufw enable
```

## Performance Optimization

### 1. Enable Compression (Nginx)
Add to your Nginx configuration:
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
```

### 2. PM2 Cluster Mode
```bash
pm2 delete agenticsoft
pm2 start npm --name "agenticsoft" -i max -- start
```

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   - Change PORT in .env file
   - Update proxy configuration

2. **Permission denied errors**
   - Check file ownership: `sudo chown -R www-data:www-data /var/www/agenticsoft`
   - Check permissions: `sudo chmod -R 755 /var/www/agenticsoft`

3. **Database connection errors**
   - Verify PostgreSQL is running: `sudo systemctl status postgresql`
   - Check DATABASE_URL format
   - Ensure database user has proper permissions

4. **Build fails**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check Node.js version: `node --version`

### Log Locations
- Application logs: `pm2 logs agenticsoft`
- Nginx logs: `/var/log/nginx/error.log`
- Apache logs: `/var/log/apache2/error.log`

## Security Checklist

- [ ] SSL certificate installed and configured
- [ ] Firewall configured (UFW/iptables)
- [ ] Database credentials secured
- [ ] Regular backups configured
- [ ] Server updates automated
- [ ] PM2 configured to restart on server reboot
- [ ] Application logs monitored

## Backup Strategy

### Database Backup (if using PostgreSQL)
```bash
# Create backup script
sudo crontab -e

# Add daily backup at 2 AM
0 2 * * * pg_dump -U agenticsoft_user agenticsoft > /backup/agenticsoft_$(date +\%Y\%m\%d).sql
```

### Application Files Backup
```bash
# Create backup of application files
tar -czf /backup/agenticsoft_app_$(date +%Y%m%d).tar.gz /var/www/agenticsoft
```

## Support

For technical support or deployment assistance:
- Email: info@agenticsoft.com
- Documentation: Check project README.md
- Issues: Create an issue in the project repository

---

**Note**: This deployment guide assumes a standard Linux server environment. Adjust commands and paths according to your specific server configuration.