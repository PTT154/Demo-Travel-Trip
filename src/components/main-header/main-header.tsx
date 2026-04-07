'use client';

import { Group, ActionIcon, UnstyledButton, Text, Box, Container } from '@mantine/core';
import { IoSearch } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import classes from './main-header.module.scss';
import Link from 'next/link';
import type { Route } from 'next';

export default function MainHeader() {
    const navLinks = [
        { label: 'HOME', href: '/', active: true },
        { label: 'TOUR', href: '/tour' },
        { label: 'DESTINATION', href: '/destination' },
        { label: 'SERVICES', href: '/services' },
        { label: 'ABOUT US', href: '/about' },
    ];

    return (
        <header className={classes.headerWrapper}>
            {/* HÀNG 1: NỀN TRẮNG (Logo, Button, Icons) */}
            <div className={classes.topRow}>
                <Container size="xl" h="100%">
                    <Group justify="space-between" align="center" h="100%" wrap="nowrap">
                        {/* Bên trái: Nút Customized Tours */}
                        <Box style={{ flex: 1 }} className={classes.btnContainer}>
                            <button className={classes.customizedBtn}>
                                CUSTOMIZED TOURS
                            </button>
                        </Box>

                        {/* Ở giữa: Logo chữ xanh */}
                        <Link href="/" className={classes.logoLink}>
                            <Text className={classes.logoText}>The Vietnam Travel</Text>
                        </Link>

                        {/* Bên phải: Kính lúp & Hamburger */}
                        <Group justify="flex-end" style={{ flex: 1 }} wrap="nowrap" className={classes.rightSection}>
                            <ActionIcon 
                                variant="outline" 
                                radius="xl" 
                                size="lg" 
                                className={classes.searchIcon}
                            >
                                <IoSearch size={20} strokeWidth={2} />
                            </ActionIcon>
                            
                            <ActionIcon variant="transparent" size="xl" className={classes.menuIcon}>
                                <HiMenuAlt3 size={32} />
                            </ActionIcon>
                        </Group>
                    </Group>
                </Container>
            </div>

            {/* HÀNG 2: NỀN XANH (Thanh Điều Hướng) */}
            <div className={classes.bottomRow}>
                <Container size="xl" h="100%">
                    <Group gap={40} justify="center" align="center" h="100%" wrap="nowrap" className={classes.navGroup}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href as Route}
                                className={`${classes.navLink} ${link.active ? classes.active : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </Group>
                </Container>
            </div>
        </header>
    );
}