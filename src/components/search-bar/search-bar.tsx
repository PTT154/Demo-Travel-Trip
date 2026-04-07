'use client';

import { Group, Text, UnstyledButton, TextInput } from '@mantine/core';
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import classes from './search-bar.module.scss';

export default function SearchBar() {
  return (
    <div className={classes.searchBarWrapper}>
      <div className={classes.searchInner}>
        
        {/* 1. Phần Location (Nút bấm bên trái) */}
        <UnstyledButton className={classes.locationField}>
          <Group gap="xs" wrap="nowrap">
            <IoLocationOutline size={24} className={classes.locationIcon} />
            <div className={classes.fieldContent}>
              <Text size="xs" fw={500} c="dimmed" lts={1}>LOCATION</Text>
              <Group gap={4}>
                <Text fw={600} size="sm">Where to go?</Text>
                <FaChevronDown size={10} />
              </Group>
            </div>
          </Group>
        </UnstyledButton>

        {/* Vạch kẻ dọc */}
        <div className={classes.divider} />

        {/* 2. Ô Nhập liệu (Nằm giữa) */}
        <TextInput
          placeholder="Enter Destination..."
          variant="unstyled"
          className={classes.searchInput}
          size="md"
          style={{ pointerEvents: 'auto' }} // Bắt buộc để gõ được phím
        />

        {/* 3. Nút Search (Nằm sát phải) */}
        <button className={classes.searchBtn}>
          <IoSearch size={20} className={classes.searchIcon} />
          <Text fw={700} className={classes.btnText}>Search</Text>
        </button>
        
      </div>
    </div>
  );
}