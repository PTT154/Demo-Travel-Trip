'use client';

import { Title, Text, Box } from '@mantine/core';
import Image from 'next/image';
import classes from './supplier-card.module.scss';

export interface SupplierCardProps {
  title: string;
  description: string;
  image: string;
}

export default function SupplierCard({ title, description, image }: SupplierCardProps) {
  return (
    <Box className={classes.card}>
      {/* Ảnh nền tối ưu bằng next/image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        style={{ objectFit: 'cover' }}
        className={classes.image}
      />
      
      {/* Lớp phủ tối dần từ dưới lên (Gradient Overlay) */}
      <div className={classes.overlay} />

      {/* Nội dung chữ ở góc dưới */}
      <div className={classes.content}>
        <Title order={3} className={classes.title}>{title}</Title>
        <Text className={classes.description}>{description}</Text>
      </div>
    </Box>
  );
}