import HeroCarousel from "@/components/hero-carousel/hero-carousel";
import HeroContent from "@/components/hero-content/hero-content";
import { Container, Stack } from "@mantine/core";

import StatsBanner from "@/components/stats-banner/stats-banner";
import SupplierSection from "@/components/supplier-section/supplier-section";
import TourTypes from "@/components/tour-types/tour-types";


import { MOCK_SLIDES } from "@/mocks/hero-carousel-data";
import { SUPPLIER_DATA } from "@/mocks/suppiler-data";
import { MOCK_TOUR_TYPES } from "@/mocks/tour-types-data";

export default function Home() {
  return (
    <main>
      <HeroCarousel data={MOCK_SLIDES} height="70vh">
        <HeroContent />
      </HeroCarousel>

      <Container size={1232} pt="3rem">
        <Stack gap="3rem">
          <SupplierSection data={SUPPLIER_DATA} />
          <TourTypes data={MOCK_TOUR_TYPES} />
          <StatsBanner />
        </Stack>
      </Container>

      <div style={{ height: '2000px' }} />
    </main>
  );
}