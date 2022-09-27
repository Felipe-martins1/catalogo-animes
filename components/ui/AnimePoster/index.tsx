import { Rate } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import styles from "./AnimePoster.module.scss";

type Props = {
  data: {
    slug: string;
    url: string;
    alt: string;
    title: string;
    rating: number;
  };
};

export const AnimePoster = ({ data }: Props) => {
  const router = useRouter();

  return (
    <div>
      <div
        className={styles.poster}
        onClick={() => router.push(`/anime/${data.slug}`)}
      >
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
      <Rate disabled value={(data.rating * 5) / 100} />
    </div>
  );
};
