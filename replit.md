# AgenticSoft Website - replit.md

## Overview

This repository contains a modern, full-stack web application for AgenticSoft, an AI solutions company with global presence. The application is built using React with TypeScript for the frontend and Express.js for the backend, featuring a comprehensive contact management system and company portfolio showcase.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Animations**: Framer Motion for smooth transitions and interactions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: Hot reloading with Vite integration

### Project Structure
The application follows a monorepo structure with clear separation:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types

## Key Components

### Frontend Components
- **Multi-page Application**: Home, Services, About, Portfolio, and Contact pages
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Component Library**: Comprehensive UI components built on Radix primitives
- **Contact Form**: Interactive form with validation and submission handling
- **Global Presence**: Interactive display of company offices across 4 countries

### Backend Services
- **Contact API**: RESTful endpoints for contact form submission and retrieval
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Request Logging**: Detailed API request/response logging for development
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Shared Schema
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for runtime validation
- **Database Schema**: PostgreSQL tables for users and contacts using Drizzle ORM

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using shared Zod schemas
3. API request sent to `/api/contact` endpoint
4. Backend validates and stores contact in database
5. Success/error response returned to frontend
6. User receives toast notification with result

### Data Storage
- **Development**: In-memory storage for rapid development
- **Production**: PostgreSQL database with Drizzle ORM
- **Schema Evolution**: Migration-based database changes

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI component library
- **Styling**: Tailwind CSS with PostCSS processing
- **Animations**: Framer Motion for enhanced user experience
- **HTTP Client**: Native fetch API with TanStack Query wrapper
- **Form Handling**: React Hook Form with Zod validation

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle ORM with type-safe queries
- **Validation**: Zod for schema validation
- **Session Storage**: PostgreSQL-backed session management

### Development Tools
- **Build System**: Vite with TypeScript support
- **Code Quality**: TypeScript strict mode for type safety
- **Development Experience**: Hot module replacement and error overlays

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles Node.js server to `dist/index.js`
- **Asset Management**: Static files served by Express in production

### Environment Configuration
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection
- **Development**: Local development server with Vite middleware
- **Production**: Compiled server bundle with static file serving

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon serverless recommended)
- Environment variables for database connection
- Static file serving capability for frontend assets

The application is designed for easy deployment on platforms like Replit, Vercel, or traditional VPS hosting with minimal configuration required.