#!/bin/bash

# AgenticSoft Website Package Creation Script
# Creates a deployable package for the website

echo "📦 Creating AgenticSoft Website Deployment Package..."

# Package name with timestamp
PACKAGE_NAME="agenticsoft-website-$(date +%Y%m%d-%H%M%S)"
PACKAGE_DIR="/tmp/$PACKAGE_NAME"

# Create package directory
mkdir -p "$PACKAGE_DIR"

# Copy all necessary files
echo "📂 Copying project files..."

# Core application files
cp -r client/ "$PACKAGE_DIR/"
cp -r server/ "$PACKAGE_DIR/"
cp -r shared/ "$PACKAGE_DIR/"

# Configuration files
cp package.json "$PACKAGE_DIR/"
cp package-lock.json "$PACKAGE_DIR/" 2>/dev/null || true
cp tsconfig.json "$PACKAGE_DIR/"
cp vite.config.ts "$PACKAGE_DIR/"
cp tailwind.config.ts "$PACKAGE_DIR/"
cp postcss.config.js "$PACKAGE_DIR/"
cp components.json "$PACKAGE_DIR/"
cp drizzle.config.ts "$PACKAGE_DIR/"

# Deployment files
cp deploy.sh "$PACKAGE_DIR/"
cp Dockerfile "$PACKAGE_DIR/"
cp docker-compose.yml "$PACKAGE_DIR/"
cp nginx.conf "$PACKAGE_DIR/"

# Documentation
cp DEPLOYMENT.md "$PACKAGE_DIR/"
cp README-DEPLOYMENT.md "$PACKAGE_DIR/"
cp DOWNLOAD-PACKAGE.md "$PACKAGE_DIR/"
cp replit.md "$PACKAGE_DIR/"

# Make deployment script executable
chmod +x "$PACKAGE_DIR/deploy.sh"

# Create package info file
cat > "$PACKAGE_DIR/PACKAGE-INFO.txt" << EOF
AgenticSoft Website Deployment Package
=====================================

Package Created: $(date)
Version: 1.0.0
Node.js Required: 18.x or higher

Quick Start:
1. Extract this package to your server
2. Run: ./deploy.sh
3. Configure your domain and SSL

Files Included:
- Complete React/TypeScript website
- Express.js backend API  
- AI chatbot with smart responses
- Contact form with validation
- Responsive design for all devices
- Automated deployment scripts
- Docker configuration
- Nginx configuration
- Comprehensive documentation

For detailed instructions, see:
- README-DEPLOYMENT.md (Quick start)
- DEPLOYMENT.md (Detailed guide)
- DOWNLOAD-PACKAGE.md (Complete guide)

Support: info@agenticsoft.com
EOF

# Create archive
echo "🗜️ Creating archive..."
cd /tmp
tar -czf "$PACKAGE_NAME.tar.gz" "$PACKAGE_NAME/"

# Create ZIP for Windows users
if command -v zip >/dev/null 2>&1; then
    zip -r "$PACKAGE_NAME.zip" "$PACKAGE_NAME/" >/dev/null
    echo "✅ Created: $PACKAGE_NAME.zip"
fi

echo "✅ Created: $PACKAGE_NAME.tar.gz"

# Move to current directory
mv "$PACKAGE_NAME.tar.gz" ./
if [ -f "$PACKAGE_NAME.zip" ]; then
    mv "$PACKAGE_NAME.zip" ./
fi

# Cleanup
rm -rf "$PACKAGE_DIR"

echo ""
echo "🎉 Package created successfully!"
echo ""
echo "📦 Files created:"
ls -lh "$PACKAGE_NAME"* 2>/dev/null || true
echo ""
echo "📋 Package contents:"
echo "   • Complete website source code"
echo "   • Automated deployment script"
echo "   • Docker configuration"
echo "   • Web server configuration"
echo "   • Comprehensive documentation"
echo ""
echo "🚀 To deploy on your server:"
echo "   1. Upload package to your server"
echo "   2. Extract: tar -xzf $PACKAGE_NAME.tar.gz"
echo "   3. Deploy: cd $PACKAGE_NAME && ./deploy.sh"
echo ""