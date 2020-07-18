import React, { Fragment } from 'react';
import useRequest from '../libs/useRequest';
/** @jsx jsx */
import { jsx, Spinner, Grid, Box, Select } from 'theme-ui';
import { Order, OrderStatusType } from './api/orders';
import moment from 'moment';
import axios from 'axios';

export default function OrderPage() {
  const { data: orders, revalidate } = useRequest<Order[]>({
    url: '/api/orders',
  });

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>, orderId: number) => {
    await axios({
      url: `/api/order/${orderId}`,
      method: 'POST',
      data:{
        status: e.target.value
      }
    });
    revalidate();
  };

  return (
    <div
      sx={{
        px: 3,
      }}
    >
      <h1>Orders</h1>
      <Grid
        gap={2}
        py={3}
        columns={[3, '1fr 1fr 1fr']}
        sx={{
          fontWeight: 600,
        }}
      >
        <Box pt={2}>Order No.</Box>
        <Box pt={2}>Order Date</Box>
        <Box
          pt={2}
          sx={{
            textAlign: 'center',
          }}
        >
          Order Status
        </Box>
      </Grid>
      {orders ? (
        <Grid gap={2} columns={[3, '1fr 1fr 1fr']}>
          {orders.map((order) => (
            <Fragment key={order.id}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {order.id}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {moment(order.orderDate).format('MMMM Do YYYY, h:mm:ss a')}
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                }}
              >
                <Select value={order.status} onChange={(e) => handleStatusChange(e, order.id)}>
                  <option value={OrderStatusType.none}>None</option>
                  <option value={OrderStatusType.processing}>Processing</option>
                  <option value={OrderStatusType.done}>Done</option>
                </Select>
              </Box>
            </Fragment>
          ))}
        </Grid>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
