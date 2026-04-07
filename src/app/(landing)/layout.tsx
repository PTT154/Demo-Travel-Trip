import React from "react";
import classes from "./layout.module.scss";
import MainHeader from "@/components/main-header/main-header";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={classes.landingLayout}>
            <MainHeader />
            {children}
        </div>
    )
}