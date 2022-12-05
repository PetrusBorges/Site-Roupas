// Types Express
import { Request, Response } from 'express';

// Model
import { Category } from '../../app/models/Category';

export async function listCategory(req: Request, res: Response) {
  try {
    const categories = await Category.find();

    res.json(categories);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
