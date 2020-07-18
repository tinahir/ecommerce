// Fake orders data
export enum OrderStatusType {
  none = 'None',
  processing = 'Processing',
  done = 'Done',
}

export type Order = {
  id: number;
  status: OrderStatusType;
  orderDate: string;
};

let orders: Order[] = [
  { id: 2, orderDate: '2020-04-14T06:15:23.000Z', status: OrderStatusType.none },
  { id: 3, orderDate: '2020-04-14T06:15:23.000Z', status: OrderStatusType.none },
  { id: 4, orderDate: '2020-04-14T06:15:23.000Z', status: OrderStatusType.none },
  { id: 5, orderDate: '2020-04-14T06:15:23.000Z', status: OrderStatusType.none },
  { id: 6, orderDate: '2020-04-14T06:15:23.000Z', status: OrderStatusType.none },
  { id: 7, orderDate: '2020-04-14T06:15:23.000Z', status: OrderStatusType.none },
  { id: 8, orderDate: '2020-04-14T06:15:23.000Z', status: OrderStatusType.none },
  { id: 9, orderDate: '2020-04-14T06:15:23.000Z', status: OrderStatusType.none },
];

export default function handler(req, res) {
  res.status(200).json(orders);
}

export function getOrderData() {
  return orders;
}
export function UpdateOrderData(updateOrder: Order) {
  for (let i in orders) {
    if (orders[i].id == updateOrder.id) {
      orders[i] = updateOrder;
      break;
    }
  }
}
