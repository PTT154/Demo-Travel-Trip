'use client';

import { Box, Group, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import classes from './tour-types.module.scss';
import '@mantine/carousel/styles.css';

const TOUR_TYPES = [
  {
    title: 'Biking Tours',
    image: 'https://images.unsplash.com/photo-1629626495452-37bfe96e142b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Trekking Tours',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600&h=600&auto=format&fit=crop',
  },
  {
    title: 'Food Tours',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&h=600&auto=format&fit=crop',
  },
  {
    title: 'Beach Holidays',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&h=600&auto=format&fit=crop',
  },
  {
    title: 'Luxury Cruises',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=600&h=600&auto=format&fit=crop',
  },
];

export default function TourTypes() {
  return (
    <Box className={classes.wrapper}>
      <Group align="flex-start" className={classes.header}>
        <Title order={2} className={classes.title}>
          Vietnam tour types
        </Title>
        <Text className={classes.description}>
          The Vietnam Travel is your premier destination, where we showcase a wide variety of tours offered by carefully selected and trusted travel agents.
        </Text>
      </Group>

      <div className={classes.carouselWrapper}>
        <Carousel
          slideSize={{ base: '100%', sm: '33.333333%', md: '25%', lg: '20%' }}
          slideGap="md"
          controlsOffset="xl"
          classNames={{
            control: classes.carouselControl,
            controls: classes.carouselControls,
          }}
          previousControlIcon={<FaArrowLeft size={16} />}
          nextControlIcon={<FaArrowRight size={16} />}
        >
          {TOUR_TYPES.map((tour, index) => (
            <Carousel.Slide key={index}>
              <div className={classes.card}>
                <div className={classes.imageWrapper}>
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={classes.image}
                  />
                  <div className={classes.overlay}>
                    <Text className={classes.cardTitle}>{tour.title}</Text>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </Box>
  );
}
