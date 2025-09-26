# E-Commerce Frontend

A modern React frontend for an e-commerce application built with TailwindCSS.

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
