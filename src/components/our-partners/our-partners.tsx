'use client';

import { Box, SimpleGrid, Title, Text, Stack } from '@mantine/core';
import Image from 'next/image';
import classes from './our-partners.module.scss';
import SectionHeader from '../section-header/section-header';

interface PartnerItem {
  id: number;
  name: string;
  image: string;
}

interface OurPartnersProps {
  data: PartnerItem[];
}

export default function OurPartners({ data }: OurPartnersProps) {
  return (
    <Box component="section" className={classes.wrapper}>
      {/* HEADER: Component có sẵn từ User */}
      <Stack align="center" ta="center" gap="xs" mb="3rem">
        <Text classNames={{ root: classes.dashText }}>----</Text>
        <Title order={2} className={classes.title}>
          Our partners
        </Title>
        <Text className={classes.subtitle}>
          Collaborating with industry leaders to ensure your journey is seamless and safe.
        </Text>
      </Stack>

      {/* GRID LOGO PARTNERS */}
      <SimpleGrid 
        cols={{ base: 2, xs: 3, sm: 4, md: 5 }} 
        spacing="lg" 
        verticalSpacing="lg"
      >
        {data.map((partner) => (
          <div key={partner.id} className={classes.logoCard}>
            <div className={classes.imageWrapper}>
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                className={classes.logoImage}
              />
            </div>
          </div>
        ))}
      </SimpleGrid>
    </Box>
  );
}
