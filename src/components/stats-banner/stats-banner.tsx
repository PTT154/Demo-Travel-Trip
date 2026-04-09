'use client'; // Bắt buộc phải có 'use client' vì có animation và scroll event

import { Box, Text, SimpleGrid } from '@mantine/core';
import CountUp from 'react-countup';
import classes from './stats-banner.module.scss';
import React from 'react';

// Tách riêng các hậu tố (suffix) và tiền tố (prefix) ra để CountUp có thể tính toán số
const STATS_DATA = [
  { end: 10, suffix: 'M+', label: 'Total Customers' },
  { end: 9, prefix: '0', suffix: '+', label: 'Year Of Experience' },
  { end: 12, suffix: 'K', label: 'Total Destinations' },
  { end: 5, decimals: 1, label: 'Average Rating' }, // decimals={1} để hiển thị x.x
];

export default function StatsBanner() {
  return (
    <Box component="section" className={classes.wrapper}>
      <SimpleGrid cols={{ base: 2, sm: 4 }} spacing={0} className={classes.grid}>
        {STATS_DATA.map((stat, index) => (
          <Box key={index} className={classes.statItem}>
            <Text className={classes.value}>
              <CountUp
                end={stat.end}
                suffix={stat.suffix}
                prefix={stat.prefix}
                decimals={stat.decimals || 0}
                duration={2.5}
                enableScrollSpy     // Kích hoạt tính năng: Khi cuộn chuột tới mới bắt đầu chạy
                scrollSpyOnce       // Chỉ chạy 1 lần duy nhất để không gây rối mắt
              />
            </Text>

            <Text className={classes.label}>{stat.label}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}