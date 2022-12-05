// Types Express
import { Request, Response } from 'express';

// Model
import { Product } from '../../app/models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, size, category } = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      size: size ? JSON.parse(size) : [],
      category,
    });

    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
