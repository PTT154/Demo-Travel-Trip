'use client';

import { SimpleGrid } from '@mantine/core';
import SectionHeader from '../section-header/section-header';
import SupplierCard, { SupplierCardProps } from './supplier-card/supplier-card';
import classes from './supplier-section.module.scss';

const SUPPLIER_DATA: SupplierCardProps[] = [
  {
    title: 'Tour Sellers',
    description: 'Connecting to local experts',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
  },
  {
    title: 'Travel companies',
    description: 'Certified industry leaders',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
  },
  {
    title: 'Local restaurant',
    description: 'Authentic culinary journeys',
    image: 'https://images.unsplash.com/photo-1722995690313-9ef561d30143?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Tourist attraction',
    description: 'Iconic local sights',
    image: 'https://images.unsplash.com/photo-1553851919-596510268b99?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function SupplierSection() {
  return (
    <section className={classes.sectionWrapper}>
      {/* Tái sử dụng Section Header */}
      <SectionHeader 
        title="Vietnam Travel Supplier"
        description="Providing information about local tourism services in Vietnam: Tours, restaurants, attractions... recommended directly by sales staff from the providers."
      />

      {/* Lưới Grid: Mobile 1 cột, Tablet 2 cột, Desktop 4 cột */}
      <SimpleGrid cols={{ base: 2, lg: 4 }} spacing={{ base: 'xs', sm: 'lg' }}>
        {SUPPLIER_DATA.map((item, index) => (
          <SupplierCard key={index} {...item} />
        ))}
      </SimpleGrid>
    </section>
  );
}