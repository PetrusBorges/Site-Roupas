// Types Express
import { Request, Response } from 'express';

// Model
import { Order } from '../../app/models/Order';

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1})
      .populate('products.product');

    res.json(orders);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
