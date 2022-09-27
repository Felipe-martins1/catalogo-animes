import { Rate } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { IAnime } from "../../../types";

import styles from "./AnimePoster.module.scss";

type Props = {
  data: IAnime;
};

export const AnimePoster = ({ data }: Props) => {
  const router = useRouter();

  const { attributes, id } = data || {};

  const { slug, canonicalTitle, posterImage, averageRating } = attributes || {};

  return (
    <div>
      <div
        className={styles.poster}
        onClick={() => router.push(`/anime/${slug}-${id}`)}
      >
        <Image
          src={posterImage.small}
          alt={canonicalTitle}
          width="200px"
          height={300}
          quality={100}
          className={styles.posterImage}
        />
        <h4>{canonicalTitle}</h4>
      </div>
      <Rate disabled value={(averageRating * 5) / 100} />
    </div>
  );
};
