# HapShop

### A Modern Full-Stack E-Commerce Application

Built with **Node.js**, **Express.js**, **PostgreSQL**, **Prisma**, **TypeScript**, **React Native**, and **Expo**.

## Overview

HapShop is a production-ready full-stack e-commerce application designed using modern development practices.

The project consists of two independent applications:

- **Backend** – REST APIs built with Node.js, Express.js, PostgreSQL, Prisma ORM, and TypeScript.
- **Mobile** – Cross-platform mobile application built using React Native and Expo.

The architecture focuses on scalability, security, maintainability, and clean code practices.

## Project Goals

- Secure Authentication & Authorization
- Clean Architecture
- Scalable Database Design
- RESTful APIs
- Modern Mobile UI
- Type Safety
- Production Ready Code

## Problem Statement

Most beginner e-commerce projects lack scalability, proper authentication, clean architecture, and maintainable code.

HapShop solves these problems by providing:

- Modular and scalable architecture
- Secure JWT-based authentication
- Type-safe backend with TypeScript
- Optimized relational database design
- Consistent and clean API responses
- Production-ready folder structure

## Repository Structure

```
hapshop/
│
├── backend/
│   ├── prisma/
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
│
├── mobile/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── package.json
│   └── app.json
│
└── README.md
```

## Backend

### Tech Stack

| Technology | Purpose             |
| ---------- | ------------------- |
| Node.js    | Runtime Environment |
| Express.js | Web Framework       |
| TypeScript | Type Safety         |
| PostgreSQL | Database            |
| Prisma ORM | Database Management |
| JWT        | Authentication      |
| Bcrypt     | Password Hashing    |
| Nodemailer | Email Service       |

### Backend Features

#### Authentication

- User Registration with validation
- Secure Login with JWT tokens
- Logout functionality
- JWT Access & Refresh tokens
- Email Verification
- OTP Verification
- Forgot & Reset Password flow

#### User Management

- User Profile
- Update Profile Information
- Change Password
- Multiple Addresses Management

#### Product Management

- Create, Update, Delete Products
- Product Details & Search
- Category Management
- Pagination & Advanced Filtering

#### Shopping Cart

- Add/Remove Items
- Update Quantities
- Clear Cart
- Cart Persistence

#### Wishlist

- Add to Wishlist
- Remove from Wishlist
- Wishlist Management

#### Orders

- Place Orders
- Order History
- Order Details
- Order Status Tracking

#### API Infrastructure

- RESTful API Design
- Comprehensive Error Handling
- Custom ApiResponse & ApiError classes
- HTTP Status Code Enums
- Request Validation
- Middleware System
- Authentication Guards

### Backend Folder Structure

```
backend/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── config/          
│   ├── constants/      
│   ├── controllers/     
│   ├── middlewares/    
│   ├── models/          
│   ├── routes/          
│   ├── services/        
│   ├── types/           
│   ├── utils/           
│   ├── validators/      
│   └── index.ts         
│
├── .env.example
├── package.json
└── tsconfig.json
```

## Mobile Application

### Tech Stack

| Technology    | Purpose                  |
| ------------- | ------------------------ |
| React Native  | Mobile Framework         |
| Expo          | Development & Deployment |
| TypeScript    | Type Safety              |
| Redux Toolkit | State Management         |
| RTK Query     | API Caching & Sync       |
| NativeWind    | Styling (Tailwind CSS)   |
| AsyncStorage  | Local Storage            |

### Mobile Features

#### Authentication

- Secure Login
- User Registration
- OTP Verification
- Forgot Password Recovery

#### Shopping Experience

- Home Screen with Featured Products
- Browse Categories
- Product Details & Reviews
- Full-Text Search
- Add to Wishlist
- Shopping Cart Management

#### User Account

- Order History & Details
- User Profile Management
- Saved Addresses
- Account Settings

### Mobile Folder Structure

```
mobile/
│
├── app/               
├── assets/              
├── components/          
├── hooks/               
├── services/            
├── store/               
├── styles/              
├── types/              
├── utils/               
│
├── app.json
└── package.json
```

## Database Schema

### Core Entities

- **User** – Customer accounts with authentication
- **Product** – Product catalog with details
- **Category** – Product categorization
- **Cart** – Shopping cart management
- **CartItem** – Individual cart items
- **Wishlist** – User wishlists
- **Order** – Customer orders
- **OrderItem** – Order line items
- **Address** – User delivery addresses
- **OTP** – One-time passwords for verification
- **RefreshToken** – JWT refresh token storage

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- PostgreSQL database

### Clone Repository

```bash
git clone https://github.com/shbzkhan/hapshop.git
cd hapshop
```

### Backend Setup

```bash
cd backend

npm install

npx prisma generate

npx prisma migrate dev

npm run dev
```

### Mobile Setup

```bash
cd mobile

npm install

npx expo start
```

## Environment Variables

### Backend `.env`

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/hapshop

# JWT Secrets
JWT_ACCESS_SECRET=your_access_token_secret_key
JWT_REFRESH_SECRET=your_refresh_token_secret_key

# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Client URL
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

### Mobile `.env`

```env
EXPO_PUBLIC_API_BASE_URL=http://your-backend-url/api
```

## API Documentation

Coming Soon...

## Future Improvements

- Payment Gateway Integration
- Coupon & Discount System
- Product Reviews & Ratings
- Seller Dashboard
- Admin Dashboard
- Push Notifications
- Analytics Dashboard
- Inventory Management
- Multi-Vendor Support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

