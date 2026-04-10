'use client';

import Image from "next/image";
import SectionHeader from "../heading-title-group/section-header/section-header";
import classes from "./travel-services.module.scss";
import { TRAVEL_SERVICES_DATA } from "@/mocks/travel-services-data";
import { Flex, Grid } from "@mantine/core";

export default function TravelServices() {
  return (
    <section>
      <SectionHeader
        title="Vietnam Travel Channel"
        description="The travel services offered on this website include a wide range of interconnected and linked options."
        align="left"
      />
      <Grid gap={{ base: 'sm', sm: 'lg' }} align="stretch">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <div className={classes.videoWrapper}>
            {/* <iframe
              width="100%"
              height="100%"
              // src="https://www.youtube-nocookie.com/embed/WhQapHmaYYE?autoplay=1&mute=1&loop=1&playlist=WhQapHmaYYE"
              title="Vietnam Travel Insights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe> */}

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/f8QDvuGLVZw"
              title="Da Nang Vietnam | 3 Days Itinerary | Things to do in Da Nang | Da Nang Travel Guide |Trip to Hoi An"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Flex direction="column" gap={{ base: 'sm', md: 'lg' }}>
            {TRAVEL_SERVICES_DATA.map((item) => (
              <div key={item.id} className={classes.card}>
                <div className={classes.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={classes.bgImage}
                  />
                </div>

                <div
                  className={`${classes.gradientOverlay} ${item.align === "left" ? classes.gradientLeft : classes.gradientRight
                    }`}
                />

                <div
                  className={`${classes.content} ${item.align === "left" ? classes.contentLeft : classes.contentRight
                    }`}
                >
                  <div className={classes.textWrapper}>
                    <h3 className={classes.title}>{item.title}</h3>
                    <div className={classes.subtitleWrapper}>
                      <p className={classes.subtitle}>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Flex>
        </Grid.Col>
      </Grid>
    </section>
  );
}