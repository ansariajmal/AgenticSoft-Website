# 📦 AgenticSoft Website - Complete Deployment Package

## Download & Setup Instructions

### Method 1: Direct Download (Recommended)
1. Download the complete project as a ZIP file from Replit
2. Extract to your server: `/var/www/agenticsoft/`
3. Run the automated deployment script

### Method 2: Clone Repository (If using Git)
```bash
git clone <repository-url> agenticsoft
cd agenticsoft
```

## 🚀 Quick Deployment Options

### Option A: Automated Script Deployment
**Easiest method - Everything is automated!**

1. Upload project files to your server
2. Navigate to project directory
3. Run deployment script:
```bash
chmod +x deploy.sh
./deploy.sh
```

**What the script does:**
- ✅ Checks system requirements (Node.js 18+)
- ✅ Installs PM2 process manager
- ✅ Installs all dependencies
- ✅ Builds the application
- ✅ Creates environment configuration
- ✅ Starts application with PM2
- ✅ Configures auto-restart on server reboot

### Option B: Docker Deployment
**Modern containerized deployment**

1. Install Docker and Docker Compose
2. Configure docker-compose.yml:
```bash
# Edit docker-compose.yml with your domain and database password
nano docker-compose.yml
```

3. Deploy with Docker:
```bash
docker-compose up -d
```

**Includes:**
- ✅ Web application container
- ✅ PostgreSQL database
- ✅ Nginx reverse proxy with SSL ready
- ✅ Automatic restarts and health checks

### Option C: Manual Deployment
**Full control over deployment process**

Follow the detailed step-by-step guide in `DEPLOYMENT.md`

## 📋 What's Included in This Package

### 🌐 Complete Website
- **Modern React Website** with TypeScript
- **5 Professional Pages**: Home, Services, About, Portfolio, Contact
- **Responsive Design** - Works perfectly on mobile and desktop
- **AI Chatbot** - Smart responses about your services
- **Contact Form** - Fully functional with backend API
- **Global Presence** - Showcases offices in Kuwait, Turkey, UAE, Pakistan

### 🤖 AI Chatbot Features
- Intelligent responses about services, pricing, and company info
- Quick action buttons for common questions
- Smooth animations and professional design
- Guides users to different pages
- Typing indicators and message timestamps

### 🛠️ Technical Features
- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js with API endpoints
- **Database**: In-memory storage (PostgreSQL ready)
- **Build System**: Vite for fast development and production builds
- **UI Components**: Professional components with Radix UI
- **Process Management**: PM2 for production deployment

### 📁 Deployment Files
- `deploy.sh` - Automated deployment script
- `Dockerfile` - Docker container configuration
- `docker-compose.yml` - Multi-container setup
- `nginx.conf` - Web server configuration
- `DEPLOYMENT.md` - Detailed deployment guide
- `README-DEPLOYMENT.md` - Quick start instructions

## 🔧 Server Requirements

### Minimum Requirements
- **OS**: Ubuntu 20.04+ / CentOS 7+ / Debian 10+  
- **RAM**: 1GB (2GB recommended)
- **Storage**: 2GB+ free space
- **CPU**: 1 core (2+ cores recommended)

### Software Requirements
- **Node.js**: Version 18.x or higher
- **NPM**: Comes with Node.js
- **PM2**: Installed automatically by script
- **Web Server**: Nginx or Apache (optional but recommended)

## 🌍 Domain & SSL Setup

### Domain Configuration
1. Point your domain's A record to your server IP
2. Wait for DNS propagation (usually 5-30 minutes)

### SSL Certificate (Let's Encrypt)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## ⚡ Performance Optimizations

### Included Optimizations
- **Gzip Compression** - Reduces bandwidth usage
- **Static File Caching** - Faster page loads
- **Code Splitting** - Optimized bundle sizes
- **Image Optimization** - Faster image loading
- **PM2 Cluster Mode** - Utilizes multiple CPU cores

### Additional Recommendations
- Use a CDN (CloudFlare, AWS CloudFront)
- Enable database connection pooling if using PostgreSQL
- Set up monitoring with PM2 Plus or similar

## 🔒 Security Features

### Built-in Security
- **HTTPS Redirect** - Forces secure connections
- **Security Headers** - Protects against common attacks
- **Rate Limiting** - Prevents abuse
- **Input Validation** - Sanitizes form data
- **CORS Configuration** - Secure API access

### Security Checklist
- [ ] SSL certificate installed
- [ ] Firewall configured (UFW/iptables)
- [ ] Strong database passwords
- [ ] Regular security updates
- [ ] Backup strategy implemented

## 📊 Monitoring & Maintenance

### Process Monitoring
```bash
# Check application status
pm2 status

# View real-time logs
pm2 logs agenticsoft

# Monitor CPU/Memory usage
pm2 monit

# Restart application
pm2 restart agenticsoft
```

### Log Locations
- **Application Logs**: PM2 logs (`pm2 logs agenticsoft`)
- **Web Server Logs**: `/var/log/nginx/` or `/var/log/apache2/`
- **System Logs**: `/var/log/syslog`

## 🔄 Updates & Maintenance

### Application Updates
```bash
# If using Git
git pull origin main

# Update dependencies
npm install

# Rebuild application
npm run build

# Restart with zero downtime
pm2 reload agenticsoft
```

### Backup Strategy
- **Database**: Automated daily backups (if using PostgreSQL)
- **Application Files**: Weekly full backup
- **Configuration**: Version controlled settings

## 🆘 Troubleshooting

### Common Issues & Solutions

**🔴 Application won't start**
```bash
# Check Node.js version
node --version  # Should be 18+

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check for build errors
npm run build
```

**🔴 Website not accessible**
```bash
# Check if app is running
pm2 status

# Test local access
curl http://localhost:3000

# Check web server config
sudo nginx -t
sudo systemctl status nginx
```

**🔴 Contact form not working**
```bash
# Check API logs
pm2 logs agenticsoft

# Test API directly
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test"}'
```

## 📞 Support

### Self-Help Resources
1. **README-DEPLOYMENT.md** - Quick start guide
2. **DEPLOYMENT.md** - Detailed deployment instructions
3. **PM2 Documentation** - Process management help
4. **nginx Documentation** - Web server configuration

### Getting Help
- **Application Logs**: `pm2 logs agenticsoft`
- **Error Diagnosis**: Check browser console for frontend errors
- **API Testing**: Use curl or Postman to test backend endpoints

### Professional Support
For professional deployment assistance or customization:
- **Email**: info@agenticsoft.com
- **Response Time**: 24-48 hours
- **Services**: Custom deployment, hosting setup, SSL configuration

## 📈 Success Checklist

After deployment, verify these items:

- [ ] ✅ Website loads at your domain
- [ ] ✅ All pages accessible (Home, Services, About, Portfolio, Contact)
- [ ] ✅ Contact form submits successfully
- [ ] ✅ Chatbot responds to messages
- [ ] ✅ Mobile responsiveness works
- [ ] ✅ SSL certificate active (https://)
- [ ] ✅ PM2 shows application running
- [ ] ✅ Performance is acceptable (< 3s load time)

## 🎯 Next Steps

After successful deployment:

1. **Customize Content** - Update company information, services, contact details
2. **SEO Optimization** - Add meta tags, sitemap, Google Analytics
3. **Marketing Integration** - Connect social media, email marketing
4. **Monitoring Setup** - Configure uptime monitoring, performance tracking
5. **Backup Implementation** - Set up automated backups
6. **Security Hardening** - Regular security updates, firewall rules

---

**Package Version**: 1.0.0  
**Last Updated**: January 2025  
**Compatibility**: Node.js 18+, Ubuntu 20.04+, CentOS 7+, Debian 10+  
**Support**: Professional deployment assistance available