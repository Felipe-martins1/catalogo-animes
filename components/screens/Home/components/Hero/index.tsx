import React from "react";

import { Button, Input, Typography } from "antd";
const { Title, Text } = Typography;

import styles from "./Hero.module.scss";

type Props = {
  anime: {
    url: string;
    alt: string;
    title: string;
  };
};

const Hero = ({ anime }: Props) => {
  return (
    <section className={styles.container}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `
          linear-gradient(0deg, rgba(102, 57, 244, 0.2), rgba(102, 57, 244, 0.2)), 
          radial-gradient(83.13% 185.46% at 83.13% 26.98%, rgba(0, 0, 0, 0) 0%, 
          rgba(0, 0, 0, 0.91) 67.96%), 
          url(${anime.url})`,
        }}
      >
        <Title>Anime Lobby</Title>
        <Text>
          The best place to find your favorite anime. We have a hulection of
          anime, manga, and more.
        </Text>
      </div>
    </section>
  );
};

export default Hero;
