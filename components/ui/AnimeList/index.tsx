import React from "react";

import { Typography } from "antd";

import styles from "./AnimeList.module.scss";
import { AnimePoster } from "../AnimePoster";

const { Title } = Typography;

type Props = {
  title: string;
  items: React.ComponentProps<typeof AnimePoster>["data"][];
};

const AnimeList = ({ title, items }: Props) => {
  return (
    <section className={styles.container}>
      <Title>{title}</Title>
      <div className={styles.list}>
        {items?.map((item, index) => (
          <AnimePoster data={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default AnimeList;
