import express from 'express';
import { createConnection } from './shared/db/connection.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { productRoutes } from './modules/products/routes/product-route.js';

const app = express();

// Load environment variables
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/', productRoutes);
app.get('/', (req, res) => {
    res.send('Server is Live!');
  });
  
// Initialize DB & Start Server
const promise = createConnection();
promise
  .then(() => {
    console.log('✅ DB connection established');

    const PORT = process.env.PORT || 4444;  // Default fallback

    app.listen(PORT, (err) => {
      if (err) {
        console.error('❌ Application crashed:', err);
      } else {
        console.log(`🚀 Server running on port ${PORT}`);
      }
    });
  })
  .catch((err) => {
    console.error('❌ Application failed to start - DB is down:', err);
  });
