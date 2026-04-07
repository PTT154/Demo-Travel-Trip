'use client';

import { Title, Text, Stack } from '@mantine/core';
import classes from './section-header.module.scss';

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right'; // Hỗ trợ căn lề linh hoạt
}

export default function SectionHeader({ title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <Stack 
      align={align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'} 
      ta={align}
      gap={0}
      className={classes.wrapper}
    >
      <Title className={classes.title}>{title}</Title>
      {description && <Text className={classes.description}>{description}</Text>}
    </Stack>
  );
}