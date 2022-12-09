// Types Express
import { Request, Response } from 'express';

// Model
import { Order } from '../../app/models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { products } = req.body;

    const order = await Order.create({ products });

    res.status(201).json(order);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
