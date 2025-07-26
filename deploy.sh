#!/bin/bash

# AgenticSoft Website Deployment Script
# This script automates the deployment process on your server

set -e

echo "🚀 Starting AgenticSoft Website Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
check_nodejs() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18+ is required. Current version: $(node -v)"
        exit 1
    fi
    
    print_success "Node.js $(node -v) is installed"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_warning "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    else
        print_success "PM2 is already installed"
    fi
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed successfully"
}

# Build the application
build_application() {
    print_status "Building the application..."
    npm run build
    print_success "Application built successfully"
}

# Setup environment variables
setup_environment() {
    if [ ! -f ".env" ]; then
        print_status "Creating .env file..."
        cat > .env << EOF
# Production environment
NODE_ENV=production
PORT=3000

# Database (optional - uses in-memory storage by default)
# DATABASE_URL=postgresql://username:password@localhost:5432/agenticsoft

# Add API keys if needed
# OPENAI_API_KEY=your_openai_key_here
EOF
        print_success ".env file created. Please update it with your configuration."
    else
        print_warning ".env file already exists. Please verify your configuration."
    fi
}

# Start the application with PM2
start_application() {
    print_status "Starting application with PM2..."
    
    # Stop existing process if running
    pm2 delete agenticsoft 2>/dev/null || true
    
    # Start the application
    pm2 start npm --name "agenticsoft" -- start
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 to start on boot
    pm2 startup
    
    print_success "Application started successfully with PM2"
}

# Display application status
show_status() {
    print_status "Application Status:"
    pm2 status agenticsoft
    
    echo ""
    print_success "🎉 Deployment completed successfully!"
    echo ""
    print_status "Your AgenticSoft website is now running on:"
    print_status "  • Local: http://localhost:3000"
    print_status "  • Server: http://your-domain.com (after web server configuration)"
    echo ""
    print_status "Useful commands:"
    print_status "  • View logs: pm2 logs agenticsoft"
    print_status "  • Restart app: pm2 restart agenticsoft"
    print_status "  • Stop app: pm2 stop agenticsoft"
    print_status "  • Monitor: pm2 monit"
    echo ""
    print_warning "Don't forget to:"
    print_warning "  1. Configure your web server (Nginx/Apache)"
    print_warning "  2. Setup SSL certificate"
    print_warning "  3. Configure firewall"
    print_warning "  4. Update your domain DNS"
    echo ""
    print_status "📖 See DEPLOYMENT.md for detailed configuration instructions"
}

# Main deployment process
main() {
    echo ""
    print_status "AgenticSoft Website Deployment Script"
    print_status "======================================"
    echo ""
    
    check_nodejs
    check_pm2
    install_dependencies
    build_application
    setup_environment
    start_application
    show_status
}

# Handle script interruption
trap 'print_error "Deployment interrupted!"; exit 1' INT

# Run main function
main

echo ""
print_success "✅ Deployment script completed!"