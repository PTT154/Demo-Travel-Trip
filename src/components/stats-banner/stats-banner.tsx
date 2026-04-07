import { Group, Box, Text, SimpleGrid } from '@mantine/core';
import classes from './stats-banner.module.scss';
import React from 'react';

const STATIC_DATA = [
  { value: '10M+', label: 'Total Customers' },
  { value: '09+', label: 'Year Of Experience' },
  { value: '12K', label: 'Total Destinations' },
  { value: '5.0', label: 'Average Rating' },
];

export default function StatsBanner() {
  return (
    <Box className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 4 }} spacing={0} className={classes.grid}>
        {STATIC_DATA.map((stat, index) => (
          <Box key={index} className={classes.statItem}>
            <Text className={classes.value}>{stat.value}</Text>
            <Text className={classes.label}>{stat.label}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
