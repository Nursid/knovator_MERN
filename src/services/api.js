import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API service functions
export const productService = {
  // Get all products
  getProducts: async () => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to fetch products');
    }
  },
};

export const orderService = {
  // Place an order
  placeOrder: async (orderData) => {
    try {
      const response = await api.post('/order', orderData);
      return response.data;
    } catch (error) {
      console.error('Error placing order:', error);
      throw new Error('Failed to place order');
    }
  },
};

export default api;
