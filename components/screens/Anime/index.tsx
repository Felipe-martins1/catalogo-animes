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

  return (
    <React.Fragment>
      <Head>
        <title>{anime?.attributes?.canonicalTitle}</title>

        <meta name="og:description" content={anime?.attributes?.description} />
        <meta name="og:title" content={anime?.attributes?.canonicalTitle} />
        <meta name="og:image" content={anime?.attributes?.posterImage?.large} />
      </Head>

      <Layout>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Anime</Breadcrumb.Item>
          <Breadcrumb.Item>{anime?.attributes?.canonicalTitle}</Breadcrumb.Item>
        </Breadcrumb>

        <section className={styles.cardContainer}>
          <Card hoverable>
            <div className={styles.banner}>
              <Image
                alt={anime?.attributes?.canonicalTitle}
                src={anime?.attributes?.coverImage?.original || ""}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <Card.Meta
              className={styles.meta}
              title={anime?.attributes?.canonicalTitle}
              description={anime?.attributes?.synopsis}
            />

            <Divider />
            <div className={styles.stats}>
              <Statistic
                title="Start date"
                value={anime?.attributes?.startDate}
              />
              <Statistic
                title="Status"
                value={getCanonicalStatus(anime?.attributes?.status)}
              />
              <Statistic
                title="Popularity Rank"
                value={anime?.attributes?.popularityRank}
              />
              <Statistic
                title="Average Rating"
                value={anime?.attributes?.averageRating}
              />

              <Statistic
                title="Age Rating"
                value={anime?.attributes?.ageRatingGuide}
              />
            </div>
          </Card>
        </section>
      </Layout>
    </React.Fragment>
  );
};

export default Anime;
