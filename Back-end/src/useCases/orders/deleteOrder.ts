import { Request, Response } from 'express';

// Model
import { Order } from '../../app/models/Order';

export async function deleteOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
