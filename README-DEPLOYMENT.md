# AgenticSoft Website - Deployment Package

## Quick Start (Easiest Method)

### Option 1: Automated Deployment Script
1. Upload all project files to your server
2. Navigate to the project directory
3. Run the automated deployment script:
```bash
./deploy.sh
```

This script will:
- Check system requirements
- Install dependencies
- Build the application
- Configure environment
- Start the application with PM2

### Option 2: Docker Deployment (Coming Soon)
Docker deployment will be available in the next version.

## Manual Deployment

If you prefer manual deployment, follow the detailed instructions in `DEPLOYMENT.md`.

## What's Included

### Core Features
- ✅ Modern React website with TypeScript
- ✅ Professional corporate design
- ✅ Responsive mobile-first layout
- ✅ AI chatbot with smart responses
- ✅ Contact form with backend API
- ✅ Services showcase (AI, Software, Automation, Web Design)
- ✅ Global office locations (Kuwait, Turkey, UAE, Pakistan)
- ✅ Portfolio section with case studies
- ✅ About page with company information
- ✅ Backend API with Express.js
- ✅ In-memory storage (PostgreSQL ready)

### Technical Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: In-memory storage (PostgreSQL optional)
- **Build**: Vite, ES modules
- **UI Components**: Radix UI, shadcn/ui
- **Deployment**: PM2, Nginx/Apache ready

## System Requirements

- **Server**: Ubuntu 20.04+ / CentOS 7+ / Debian 10+
- **RAM**: 1GB minimum (2GB recommended)
- **Storage**: 2GB+ free space
- **Node.js**: Version 18.x or higher
- **Domain**: Your domain pointed to server IP

## File Structure

```
agenticsoft-website/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities
│   └── index.html
├── server/                 # Express.js backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage
├── shared/                # Shared types/schemas
│   └── schema.ts          # Database schema
├── deploy.sh              # Automated deployment script
├── DEPLOYMENT.md          # Detailed deployment guide
└── package.json           # Dependencies
```

## Quick Configuration

### 1. Environment Variables (.env)
```bash
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:pass@localhost:5432/agenticsoft  # Optional
```

### 2. Domain Setup
Point your domain's A record to your server's IP address.

### 3. Web Server (Nginx Example)
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Post-Deployment Checklist

- [ ] Application starts successfully (`pm2 status`)
- [ ] Website accessible via domain
- [ ] SSL certificate installed
- [ ] Firewall configured
- [ ] Contact form working
- [ ] Chatbot responding correctly
- [ ] All pages loading properly
- [ ] Mobile responsiveness verified

## Support & Maintenance

### Common Commands
```bash
# View application logs
pm2 logs agenticsoft

# Restart application
pm2 restart agenticsoft

# Monitor resources
pm2 monit

# Update application
git pull && npm install && npm run build && pm2 restart agenticsoft
```

### Performance Tips
1. Enable Nginx gzip compression
2. Use PM2 cluster mode for multiple CPU cores
3. Configure CDN for static assets
4. Set up database connection pooling (if using PostgreSQL)

## Customization

### Branding
- Update company information in `client/src/pages/`
- Modify colors in `client/src/index.css`
- Replace logo/images in `client/src/assets/`

### Content
- Edit page content in `client/src/pages/`
- Update chatbot responses in `client/src/components/Chatbot.tsx`
- Modify services information in `client/src/pages/Services.tsx`

### Contact Information
- Update office locations in `client/src/pages/Contact.tsx`
- Modify contact form fields in `client/src/components/ContactForm.tsx`

## Troubleshooting

### Application Won't Start
1. Check Node.js version: `node --version`
2. Verify all dependencies installed: `npm install`
3. Check for build errors: `npm run build`
4. Review PM2 logs: `pm2 logs agenticsoft`

### Website Not Accessible
1. Verify application is running: `pm2 status`
2. Check web server configuration
3. Confirm domain DNS settings
4. Test local access: `curl http://localhost:3000`

### Contact Form Not Working
1. Check backend API logs
2. Verify CORS settings
3. Test API endpoints directly

## Security Notes

- Change default passwords
- Keep Node.js and dependencies updated
- Use HTTPS (SSL certificate)
- Configure proper firewall rules
- Regular security updates

## Need Help?

- 📖 Read the detailed `DEPLOYMENT.md` guide
- 🐛 Check application logs with `pm2 logs agenticsoft`
- 🔧 Verify system requirements
- 📧 Contact support: info@agenticsoft.com

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Compatibility**: Node.js 18+, Ubuntu 20.04+, CentOS 7+