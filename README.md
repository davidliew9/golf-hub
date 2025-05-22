# Golf Hub

Golf Hub is a web-based marketplace platform designed for small golf shops and professional sellers to list and sell used golf clubs and related equipment.

## 🎯 Overview

This platform enables:
- Professional vendors to list used golf clubs for sale
- Buyers to browse and purchase or negotiate for equipment
- Secure payment processing through Stripe
- Vendor inventory management
- Trust building through a review system (sellers review buyers)
- Self-collection from the seller's store location

## 🛠️ Technology Stack

- **Frontend**: Next.js (React), TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Image Storage**: Cloudinary

## 📋 Features

- **Authentication**: User signup and login
- **Listings**: Create, edit, and manage product listings
- **Browsing**: View and filter products
- **Offers**: Submit and respond to purchase offers
- **Transactions**: Complete purchases through Stripe
- **Dashboard**: Separate dashboards for buyers and sellers
- **Reviews**: Sellers can leave reviews for buyers

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn
- MongoDB database
- Stripe account
- Cloudinary account (for image uploads)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/davidliew9/golf-hub.git
   cd golf-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # MongoDB Connection
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/golfhub?retryWrites=true&w=majority

   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_random_secret_here

   # Stripe Configuration
   STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret

   # Cloudinary (for image uploads)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

- `/src/app`: Next.js app router pages and layouts
- `/src/components`: Reusable React components
- `/src/models`: Mongoose database models
- `/src/lib`: Utility functions and configurations
- `/src/utils`: Helper functions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License.

## 🐳 Docker Setup

You can also run the application using Docker:

### Using Docker Compose (Recommended)

1. Make sure you have Docker and Docker Compose installed
2. Clone the repository and navigate to the project directory
3. Copy `.env.example` to `.env` and update the environment variables:
   ```bash
   cp .env.example .env
   ```
4. Run the following command:
   ```bash
   docker-compose up -d
   ```
5. Access the application at http://localhost:3000

### Using Docker Directly

1. Build the Docker image:
   ```bash
   docker build -t golf-hub .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 -e MONGODB_URI=your_mongodb_uri -e NEXTAUTH_SECRET=your_secret golf-hub
   ```

Note: When using Docker, make sure to set all required environment variables. 