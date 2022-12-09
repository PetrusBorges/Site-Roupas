// Types Express
import { Request, Response } from 'express';

// Model
import { Product } from '../../app/models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const products = await Product.find().where('category').equals(categoryId);

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
