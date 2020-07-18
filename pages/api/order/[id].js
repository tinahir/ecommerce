import { getOrderData, UpdateOrderData } from '../orders';
export default function orderHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ id });
      break;
    case 'POST':
      const orders = getOrderData();
      const order = orders.find((order) => {
        return id == order.id;
      });
      let updateOrder = { ...order, ...req.body };
      UpdateOrderData(updateOrder);
      res.status(200).json(updateOrder);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
