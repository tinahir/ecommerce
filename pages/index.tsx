import React, { Fragment } from 'react';
import useRequest from '../libs/useRequest';
import { Customer } from './api/data';
/** @jsx jsx */
import { jsx, Spinner, Grid, Box } from 'theme-ui';

export default function HomePage() {
  const { data: customers } = useRequest<Customer[]>({
    url: '/api/data',
  });

  return (
    <div
      sx={{
        px: 3,
      }}
    >
      <h1>Customers</h1>
      <Grid
        gap={2}
        py={3}
        columns={[2, '2fr 1fr']}
        sx={{
          fontWeight: 600,
        }}
      >
        <Box>Customer Name</Box>
        <Box
          py={2}
          sx={{
            textAlign: 'right',
          }}
        >
          Quantity
        </Box>
      </Grid>
      {customers ? (
        <Grid gap={2} columns={[2, '2fr 1fr']}>
          {customers.map((customer) => (
            <Fragment key={customer.id}>
              <Box py={2}>{customer.name}</Box>
              <Box
                py={2}
                sx={{
                  textAlign: 'right',
                }}
              >
                {customer.quantity}
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
