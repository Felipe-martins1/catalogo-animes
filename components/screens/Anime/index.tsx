import React, { useEffect } from "react";

import { Breadcrumb, Button, Card, Col, Divider, Row, Statistic } from "antd";
import Image from "next/image";
import Layout from "../../../components/layout";

import Link from "next/link";
import { useRouter } from "next/router";

import { api } from "../../../utils/api";

import styles from "./Anime.module.scss";
import Head from "next/head";
import { IAnime } from "../../../types";

const Anime = ({ anime }: { anime: IAnime }) => {
  console.log(anime);

  const getCanonicalStatus = (status: string) => {
    switch (status) {
      case "current":
        return "Currently Airing";
      case "finished":
        return "Finished Airing";
      case "tba":
        return "To Be Announced";
      case "unreleased":
        return "Unreleased";
      case "upcoming":
        return "Upcoming";
      default:
        return "Status Unknown";
    }
  };

  const { attributes } = anime || {};
  const {
    description,
    canonicalTitle,
    posterImage,
    coverImage,
    averageRating,
    status,
    synopsis,
    startDate,
    popularityRank,
    ageRatingGuide,
    youtubeVideoId,
  } = attributes || {};

  return (
    <React.Fragment>
      <Head>
        <title>{canonicalTitle}</title>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:title" content={canonicalTitle} />
        <meta name="og:image" content={posterImage?.large} />
      </Head>

      <Layout>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Anime</Breadcrumb.Item>
          <Breadcrumb.Item>{canonicalTitle}</Breadcrumb.Item>
        </Breadcrumb>

        <section className={styles.cardContainer}>
          <Card hoverable>
            <div className={styles.banner}>
              {youtubeVideoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title={canonicalTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <Image
                  alt={canonicalTitle}
                  src={coverImage?.original || ""}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              )}
            </div>
            <Card.Meta
              className={styles.meta}
              title={canonicalTitle}
              description={synopsis}
            />

            <Divider />
            <div className={styles.stats}>
              <Statistic title="Start date" value={startDate} />
              <Statistic title="Status" value={getCanonicalStatus(status)} />
              <Statistic title="Popularity Rank" value={popularityRank} />
              <Statistic title="Average Rating" value={averageRating} />

              <Statistic title="Age Rating" value={ageRatingGuide} />
            </div>
          </Card>
        </section>
      </Layout>
    </React.Fragment>
  );
};

export default Anime;
