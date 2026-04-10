'use client';

import { Box, SimpleGrid, Text } from '@mantine/core';
import Image from 'next/image';
import classes from './our-partners.module.scss';
import SectionHeader from '../heading-title-group/section-header/section-header';

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
      <Box ta="center">
        <Text classNames={{ root: classes.dashText }} mb="xs">
          ----
        </Text>
      </Box>
      <SectionHeader
        title="Our partners"
        description="Collaborating with industry leaders to ensure your journey is seamless and safe."
        align="center"
        order={2}
      />

      {/* GRID LOGO PARTNERS */}
      <SimpleGrid
        cols={{ base: 2, xs: 3, sm: 4, md: 5 }}
        spacing={{ base: 'xs', sm: 'lg' }}
        verticalSpacing={{ base: 'xs', sm: 'lg' }}
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