# E-commerce Backend API

A simple Node.js + Express backend for an e-commerce site.

## Features

- Express server running on port 5000
- CORS enabled for cross-origin requests
- RESTful API endpoints
- In-memory product storage

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Server

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### GET /api/products
Returns a list of all products.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Product A",
    "description": "A great product",
    "price": 199,
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 2,
    "name": "Product B",
    "description": "Another product",
    "price": 299,
    "image": "https://via.placeholder.com/150"
  }
]
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Testing the API

You can test the API using:

1. **Browser**: Navigate to `http://localhost:5000/api/products`
2. **curl**: `curl http://localhost:5000/api/products`
3. **PowerShell**: `Invoke-WebRequest -Uri "http://localhost:5000/api/products" -Method GET`
4. **Node.js test script**: `node test-api.js`

## Project Structure

```
backend/
├── index.js          # Main server file
├── package.json      # Dependencies and scripts
├── test-api.js       # API testing script
└── README.md         # This file
```
