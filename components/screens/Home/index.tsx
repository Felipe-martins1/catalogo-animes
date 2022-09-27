import React from "react";
import Head from "next/head";

import Layout from "../../layout";

import Hero from "./components/Hero";
import Search from "./components/Search";
import AnimeList from "../../ui/AnimeList";

import { IAnime } from "../../../types";

import styles from "./Home.module.scss";

const Home = ({ trending }: { trending: IAnime[] }) => {
  const randomTrendingItem =
    trending[Math.floor(Math.random() * trending.length)];

  return (
    <React.Fragment>
      <Head>
        <title>Anime Lobby</title>
        <meta name="description" content="Find your animes in one place!" />
        <meta name="og:description" content="Find your animes in one place!" />
        <meta name="og:title" content="Anime Lobby" />
        <meta
          name="og:image"
          content={randomTrendingItem?.attributes?.posterImage?.small}
        />
      </Head>
      <Layout>
        <Hero
          anime={{
            url: randomTrendingItem?.attributes?.coverImage?.large,
            alt: randomTrendingItem?.attributes?.canonicalTitle,
            title: randomTrendingItem?.attributes?.canonicalTitle,
          }}
        />
        <section className={styles.listsContainer}>
          <AnimeList title="Trending Animes" items={trending} />
        </section>
        <Search />
      </Layout>
    </React.Fragment>
  );
};

export default Home;
