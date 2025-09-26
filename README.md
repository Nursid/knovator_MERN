# E-Commerce Frontend

A modern React frontend for an e-commerce application built with TailwindCSS.

## Features

- **Product Listing Page** - Grid layout displaying products with images, names, descriptions, and prices
- **Shopping Cart** - Add/remove products, update quantities, view total
- **Order Form** - Customer information form with validation
- **Responsive Design** - Mobile-first approach with TailwindCSS
- **State Management** - React Context for cart state
- **API Integration** - Connects to backend for products and orders


## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header with cart button
│   ├── ProductCard.js  # Individual product display
│   ├── LoadingSpinner.js # Loading indicator
│   └── ErrorMessage.js # Error display component
├── pages/              # Page components
│   ├── ProductListPage.js # Product listing page
│   └── CartPage.js     # Shopping cart page
├── context/            # React Context
│   └── CartContext.js  # Global cart state management
├── services/           # API services
│   └── api.js         # Backend API integration
├── App.js             # Main app component with routing
└── index.js           # App entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Backend Integration

Make sure the backend server is running on port 5000:

```bash
cd ../backend
npm start
```

## Features Overview

### Product Listing Page (`/`)
- Fetches products from backend API
- Responsive grid layout
- Product cards with images, names, descriptions, prices
- "Add to Cart" functionality
- Loading states and error handling

### Shopping Cart (`/cart`)
- View cart items with quantities
- Update item quantities
- Remove items from cart
- Customer information form
- Form validation for required fields
- Order placement with backend integration

### Cart State Management
- Global cart state using React Context
- Add/remove products
- Update quantities
- Calculate totals
- Persist cart across page navigation

### Form Validation
- Required field validation
- Real-time error display
- User-friendly error messages
- Form submission handling

## API Integration

The frontend integrates with the backend API:

- **GET /api/products** - Fetch product list
- **POST /api/order** - Place order with customer details

## Styling

Built with TailwindCSS for:
- Responsive design
- Utility-first approach
- Consistent spacing and colors
- Hover and focus states
- Mobile-first design

## Development

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Code Structure

- **Components** are modular and reusable
- **Context** provides global state management
- **Services** handle API communication
- **Pages** are route components
- **Clean separation** of concerns

## Production Deployment

1. Build the project:
```bash
npm run build
```

2. The `build` folder contains the production-ready files.

3. Deploy the `build` folder to your hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)