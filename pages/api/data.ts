export type Customer = {
  id: number;
  name: string;
  quantity: number;
  product_id: number;
  orderId: number;
  orderDate: string;
};

const customers: Customer[] = [
  {
    id: 4633499533378,
    name: 'Test 1',
    quantity: 3,
    product_id: 4460755157058,
    orderId: 7,
    orderDate: '2020-04-14T06:15:23.000Z',
  },
  {
    id: 4633579421762,
    name: 'Test 2',
    quantity: 1,
    product_id: 4467615531074,
    orderId: 6,
    orderDate: '2020-04-14T06:42:47.000Z',
  },
  {
    id: 4633579454530,
    name: 'Test 1',
    quantity: 2,
    product_id: 4460755157058,
    orderId: 6,
    orderDate: '2020-04-14T06:42:47.000Z',
  },
  {
    id: 4684687114306,
    name: 'Test 4',
    quantity: 4,
    product_id: 4467830194242,
    orderId: 3,
    orderDate: '2020-04-24T10:07:57.000Z',
  },
  {
    id: 4684738265154,
    name: 'Test 1',
    quantity: 2,
    product_id: 4460755157058,
    orderId: 3,
    orderDate: '2020-04-24T10:07:57.000Z',
  },
  {
    id: 4684890800194,
    name: 'Test 6',
    quantity: 100,
    product_id: 4455579123778,
    orderId: 2,
    orderDate: '2020-04-24T11:41:40.000Z',
  },
  {
    id: 4684890832962,
    name: 'Test 7',
    quantity: 60,
    product_id: 4455579025474,
    orderId: 2,
    orderDate: '2020-04-24T11:41:40.000Z',
  },
];

export default (req, res) => {
  setTimeout(() => {
    const map = new Map<string, Customer>();
    for (const customer of customers) {
      const key = `${customer.name}:${customer.product_id}`;
      const cacheCustomer = map.get(key);
      if (cacheCustomer) {
        map.set(key, {
          ...cacheCustomer,
          ...{ quantity: customer.quantity + cacheCustomer.quantity },
        });
      } else {
        map.set(key, customer);
      }
    }
    res.json(Array.from(map.values()));
  }, 2000);
};
