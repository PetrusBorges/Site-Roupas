// PathNode
import path from 'node:path';

// Routes
import { Router } from 'express';

// Multer
import multer from 'multer';

// useCases
import { listCategory } from './useCases/categories/listCategory';
import { createCategory } from './useCases/categories/createCategory';
import { deleteCategory } from './useCases/categories/deleteCategory';
import { listProducts } from './useCases/products/listProducts';
import { createProduct } from './useCases/products/createProducts';
import { deleteProduct } from './useCases/products/deleteProduct';
import { listProductsByCategory } from './useCases/products/listProductsByCategory';
import { listOrders } from './useCases/orders/listOrders';
import { createOrder } from './useCases/orders/createOrder';
import { deleteOrder } from './useCases/orders/deleteOrder';

// Routes
export const router = Router();

// Multer = uploadImage
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

// List Categories
router.get('/categories', listCategory);

// Create Categories
router.post('/categories', createCategory);

// Delete Categories
router.delete('/categories/:categoryId', deleteCategory);

// List Products
router.get('/products', listProducts);

// Create Products
router.post('/products', upload.single('image'), createProduct);

// Delete Products
router.delete('/products/:productId', deleteProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List Orders
router.get('/orders', listOrders);

// Create Order
router.post('/orders', createOrder);

// Delete Order
router.delete('/orders/:orderId', deleteOrder);
