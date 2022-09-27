import { Breadcrumb, Button, Card, Col, Divider, Row, Statistic } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "../../components/layout";
import { api } from "../../utils/api";

import styles from "./Anime.module.scss";

const Anime: React.FC = () => {
  const router = useRouter();
  const [anime, setAnime] = React.useState<any>(null);
  const { slug } = router.query;

  const id = String(slug)?.split("-").pop();

  const getAnimeById = async () => {
    const { data } = await api.get(`anime/${id}`);
    setAnime(data.data);
  };

  useEffect(() => {
    getAnimeById();
  }, []);

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

  return (
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
              src={anime?.attributes?.coverImage?.original}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <Card.Meta
            className={styles.meta}
            title={anime?.attributes.canonicalTitle}
            description={anime?.attributes.synopsis}
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
  );
};

export default Anime;
