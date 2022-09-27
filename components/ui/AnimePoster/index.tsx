import Image from "next/image";
import React from "react";

import styles from "./AnimePoster.module.scss";

type Props = {
  data: {
    url: string;
    alt: string;
    title: string;
  };
};

export const AnimePoster = ({ data }: Props) => {
  return (
    <React.Fragment>
      <div className={styles.poster}>
        <Image
          src={data.url}
          alt={data.alt}
          width="200px"
          height={300}
          quality={100}
          className={styles.posterImage}
        />
        <h4>{data.title}</h4>
      </div>
    </React.Fragment>
  );
};
