// Types Express
import { Request, Response } from 'express';

// Model
import { Product } from '../../app/models/Product';

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
