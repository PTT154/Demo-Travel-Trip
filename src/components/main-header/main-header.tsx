'use client';

import { Group, ActionIcon, Text, Box, Container } from '@mantine/core';
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import classes from './main-header.module.scss';
import Link from 'next/link';
import type { Route } from 'next';

const NAV_LINKS = [
    { label: 'Home', href: '/', active: true },
    { label: 'Tour', href: '/tour' },
    { label: 'Destination', href: '/destination' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
];

const SOCIAL_LINKS = [
    { icon: <FaFacebookF size={20} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaWhatsapp size={22} />, href: 'https://whatsapp.com', label: 'Whatsapp' },
    { icon: <FaYoutube size={22} />, href: 'https://youtube.com', label: 'Youtube' },
];

export default function MainHeader() {
    return (
        <header className={classes.headerWrapper}>
            {/* HÀNG 1: Logo & Socials */}
            <div className={classes.topRow}>
                <Container size={1232} h="100%">
                    <Group justify="space-between" align="center" h="100%" wrap="nowrap">

                        {/* BÊN TRÁI: Social Icons */}
                        <Box className={classes.btnContainer} style={{ flex: 1 }}>
                            <Group gap="xs">
                                {SOCIAL_LINKS.map((social) => (
                                    <ActionIcon
                                        key={social.label}
                                        component="a"
                                        href={social.href}
                                        target="_blank"
                                        variant="subtle"
                                        radius="xl"
                                        size="lg"
                                        className={classes.socialIcon}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </ActionIcon>
                                ))}
                            </Group>
                        </Box>

                        {/* GIỮA: Logo */}
                        <Link href="/" className={classes.logoLink}>
                            <Text className={classes.logoText}>The Vietnam Travel</Text>
                        </Link>

                        {/* PHẢI: Search & Menu */}
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
                                <RxHamburgerMenu size={32} />
                            </ActionIcon>
                        </Group>
                    </Group>
                </Container>
            </div>

            {/* HÀNG 2: Navigation */}
            <nav className={classes.bottomRow}>
                <Container size={1232} h="100%" classNames={{ root: classes.navContainer }}>
                    <Group gap={40} justify="center" align="center" h="100%" wrap="nowrap" className={classes.navGroup}>
                        {NAV_LINKS.map((link) => (
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
            </nav>
        </header>
    );
}