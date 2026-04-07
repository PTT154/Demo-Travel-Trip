'use client';

import { Container, Title, Text, Group, UnstyledButton, TextInput, ActionIcon } from '@mantine/core';
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import classes from './hero-content.module.scss';
import SearchBar from '@/components/search-bar/search-bar';

export default function HeroContent() {
  return (
    <Container size="xl" className={classes.inner}>
      <div className={classes.content}>
        {/* TIÊU ĐỀ CHÍNH */}
        <Title className={classes.title}>
          Discover the <span className={classes.highlight}>Timeless Beauty</span> of Vietnam
        </Title>

        {/* ĐOẠN GIỚI THIỆU */}
        <Text className={classes.description}>
          Explore the vibrant soul of Vietnam through our curated network of local experts,
          unique excursions, and authentic cultural experiences.
        </Text>

        {/* THANH SEARCH BAR (THE PILL) */}
        <SearchBar />
      </div>
    </Container>
  );
}