# User Registration System - Frontend

A modern React-based user registration and authentication system built with TypeScript, Tailwind CSS, and shadcn/ui.


## Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

## Installation

1. Navigate to the frontend directory:
```bash
cd user-registration-system-fe
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Configuration

The API base URL is configured in `src/lib/api.ts`. By default, it connects to:
```
http://localhost:3000
```

Make sure the backend server is running on this port.


### Home Page (`/`)
- Landing page with call-to-action for guest users
- User dashboard for authenticated users
- Navigation to Login and Sign Up pages

### Login Page (`/login`)
- Email and password authentication
- Form validation
- Error handling
- Redirects to home on success

### Sign Up Page (`/signup`)
- User registration with email and password
- Form validation
- Success/error feedback
- Redirects to home on success

## Environment Setup

Create a `.env` file (optional) to configure the application:

```env
VITE_API_BASE_URL=http://localhost:3000
```