import React from "react";

import { Breadcrumb, Card, Divider, Statistic } from "antd";
import Image from "next/image";
import Layout from "../../../components/layout";

import Link from "next/link";

import styles from "./Anime.module.scss";
import Head from "next/head";
import { IAnime } from "../../../types";

const Anime = ({ anime }: { anime: IAnime }) => {
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
              {startDate && <Statistic title="Start date" value={startDate} />}

              {status && (
                <Statistic title="Status" value={getCanonicalStatus(status)} />
              )}

              {popularityRank && (
                <Statistic title="Popularity Rank" value={popularityRank} />
              )}

              {averageRating && (
                <Statistic title="Average Rating" value={averageRating} />
              )}

              {ageRatingGuide && (
                <Statistic title="Age Rating" value={ageRatingGuide} />
              )}
            </div>
          </Card>
        </section>
      </Layout>
    </React.Fragment>
  );
};

export default Anime;
