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

- Secure Authentication
- Clean Architecture
- Scalable Database
- RESTful APIs
- Modern Mobile UI
- Type Safety
- Production Ready Code

## Problem Statement

Most beginner e-commerce projects lack scalability, proper authentication, clean architecture, and maintainable code.

HapShop solves these problems by providing:

- Modular architecture
- Secure authentication
- Type-safe backend
- Optimized database design
- Clean API responses
- Production-ready folder structure

## Repository Structure

```text
hapshop/
│
├── backend/
│   ├─ ─ prisma/
|   |src/
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

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Bcrypt
- Nodemailer
- Cookie Parser

### Backend Features

### Authentication

- User Registration
- Login
- Logout
- JWT Authentication
- Refresh Token
- Email Verification
- OTP Verification
- Forgot Password
- Reset Password

### User

- Profile
- Update Profile
- Change Password
- Multiple Addresses

### Product

- Create Product
- Update Product
- Delete Product
- Product Details
- Product Search
- Category
- Pagination
- Filtering

### Cart

- Add to Cart
- Update Quantity
- Remove Item
- Clear Cart

### Wishlist

- Add Wishlist
- Remove Wishlist

### Orders

- Place Order
- Order History
- Order Details
- Order Status
  
### API Features

- RESTful APIs
- Error Handling
- Custom ApiResponse
- Custom ApiError
- Status Code Enum
- Validation
- Middleware
- Authentication Middleware

## Mobile Application

## Tech Stack

- React Native
- Expo
- TypeScript
- Redux Toolkit
- RTK Query
- NativeWind

### Mobile Features

### Authentication

- Login
- Register
- OTP Verification
- Forgot Password

### Shopping

- Home
- Categories
- Product Details
- Search
- Wishlist
- Cart

### User

- Orders
- Profile
- Addresses
- Settings

## Database

Main database entities:

- User
- Product
- Category
- Cart
- CartItem
- Wishlist
- Order
- OrderItem
- Address
- OTP
- RefreshToken

## Technologies

| Backend | Mobile |
|----------|---------|
| Node.js | React Native |
| Express.js | Expo |
| PostgreSQL | Redux Toolkit |
| Prisma ORM | RTK Query |
| TypeScript | NativeWind |
| JWT | AsyncStorage |

## Backend Folder Structure

```text
backend/
│
├── prisma/
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
├── package.json
└── tsconfig.json
```

## Mobile Folder Structure

```text
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
└── app.json
```

## Getting Started

### Clone Repository

```bash
git clone https://github.com/your-username/hapshop.git
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

Backend `.env`

```env
DATABASE_URL=

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=

EMAIL_USER=

EMAIL_PASS=

CLIENT_URL=
```

## API Documentation

Coming Soon...

### Future Improvements

- Payment Gateway
- Coupon System
- Product Reviews
- Seller Dashboard
- Admin Dashboard
- Push Notifications
- Analytics Dashboard
- Inventory Management
- Multi Vendor Support

