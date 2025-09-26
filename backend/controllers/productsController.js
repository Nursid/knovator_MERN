const products = require('../Data');

const getAllProducts = (req, res) => {
    res.json(products);
};

const orderProduct = (req, res) => {
    try {
        const { customer, items, total } = req.body;
        
        // Validate required fields
        if (!customer || !customer.firstName || !customer.lastName || !customer.address) {
          return res.status(400).json({ 
            error: 'Missing required customer information' 
          });
        }
        
        if (!items || items.length === 0) {
          return res.status(400).json({ 
            error: 'No items in order' 
          });
        }
        
        // Generate order ID (in a real app, this would be saved to database)
        const orderId = Date.now().toString();
        
        // Simulate order processing
        const order = {
          id: orderId,
          customer,
          items,
          total,
          status: 'confirmed',
          createdAt: new Date().toISOString()
        };
        
        console.log('New order received:', order);
        
        res.status(201).json({
          message: 'Order placed successfully',
          orderId: orderId,
          order: order
        });
        
      } catch (error) {
        console.error('Error processing order:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
};


module.exports = {
    getAllProducts,
    orderProduct
};
