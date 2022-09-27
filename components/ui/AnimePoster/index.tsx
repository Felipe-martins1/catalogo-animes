import React from "react";

import { Rate, Statistic, Typography } from "antd";
const { Title } = Typography;
import Image from "next/image";
import { useRouter } from "next/router";

import { IAnime } from "../../../types";

import styles from "./AnimePoster.module.scss";

type Props = {
  data: IAnime;
};

export const AnimePoster = ({ data }: Props) => {
  const router = useRouter();

  const { attributes, id } = data || {};

  const {
    slug,
    canonicalTitle,
    posterImage,
    averageRating,
    episodeCount,
    episodeLength = 0,
    totalLength = 0,
  } = attributes || {};

  const getEpisodeCount = () => {
    let count;
    let title = "Episode";

    if (episodeCount) {
      count = episodeCount;
    } else {
      count = Math.round(totalLength / episodeLength);
    }

    if (count > 1 || !count) title = title.concat("s");

    return `${count || "??"} ${title}`;
  };

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
        <Title level={4}>{canonicalTitle}</Title>
      </div>
      <Title level={5}>{getEpisodeCount()}</Title>
      <Rate disabled value={(averageRating * 5) / 100} />
    </div>
  );
};
