import React from "react";

import { Col, Row, Spin, Typography } from "antd";

import styles from "./AnimeList.module.scss";
import { AnimePoster } from "../AnimePoster";

const { Title } = Typography;

type Props = {
  title: string;
  items: React.ComponentProps<typeof AnimePoster>["data"][];
  loading?: boolean;
};

const AnimeList = ({ title, items, loading }: Props) => {
  return (
    <section className={styles.container}>
      <Title>{title}</Title>

      {loading ? (
        <div className={styles.loadingContainer}>
          <Spin tip="Loading..." />
        </div>
      ) : (
        <div className={styles.list}>
          {items?.map((item, index) => (
            <AnimePoster data={item} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AnimeList;
