import React from "react";
import classes from "./layout.module.scss";
import MainHeader from "@/components/main-header/main-header";
import MainFooter from "@/components/main-footer/main-footer";
import ScrollToTop from "@/components/scroll-to-top/scroll-to-top";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={classes.landingLayout}>
            <MainHeader />
            {children}
            <MainFooter />
            <ScrollToTop />
        </div>
    )
}