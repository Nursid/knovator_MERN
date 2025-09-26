# E-Commerce Application

A full-stack e-commerce application with React frontend and Node.js backend.

## Project Structure

```
Knovator/
├── frontend/          # React frontend application
├── backend/           # Node.js backend API
└── README.md         # This file
```

## Features

### Frontend (React + TailwindCSS)
- **Product Listing Page** - Grid layout with product cards
- **Shopping Cart** - Add/remove products, quantity management
- **Order Form** - Customer information with validation
- **Responsive Design** - Mobile-first approach
- **State Management** - React Context for cart state

### Backend (Node.js + Express)
- **Products API** - GET /api/products
- **Order API** - POST /api/order
- **CORS Enabled** - Cross-origin requests
- **In-memory Storage** - No database required

## Quick Start

### 1. Start the Backend

```bash
cd backend
npm install
npm start
```

The backend will run on `http://localhost:5000`

### 2. Start the Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

### 3. Access the Application

Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### Backend API (Port 5000)

- **GET /api/products** - Returns list of products
- **POST /api/order** - Place an order
- **GET /api/health** - Health check

### Frontend Routes

- **/** - Product listing page
- **/cart** - Shopping cart page

## Development

### Backend Development
```bash
cd backend
npm run dev  # Uses nodemon for auto-restart
```

### Frontend Development
```bash
cd frontend
npm start    # React development server with hot reload
```

## Production Deployment

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
# Deploy the 'build' folder to your hosting service
```

## Technology Stack

### Frontend
- React 19
- React Router
- TailwindCSS
- Axios
- Context API

### Backend
- Node.js
- Express
- CORS
- In-memory storage

## Features Overview

1. **Browse Products** - View products in a responsive grid
2. **Add to Cart** - Add products to shopping cart
3. **Manage Cart** - Update quantities, remove items
4. **Place Order** - Fill customer information and place order
5. **Form Validation** - Real-time validation with error messages
6. **Responsive Design** - Works on all device sizes

## Getting Help

- Check the individual README files in `frontend/` and `backend/` directories
- Ensure both servers are running on their respective ports
- Check browser console for any errors
- Verify API connectivity between frontend and backend

## License

This project is for educational purposes.
