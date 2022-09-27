import type { NextPage } from "next";

import { Typography } from "antd";

import Layout from "../../layout";

import Hero from "./components/Hero";
import Search from "./components/Search";
import AnimeList from "../../ui/AnimeList";

import { useTrending } from "../../../hooks/useTrending";

import styles from "./Home.module.scss";
import { findTrendingAnimes } from "../../../services/animeService";
import React from "react";
import Head from "next/head";

const Home: NextPage = () => {
  const { loading: loadingAnimes, data: trendingAnimes } = useTrending();

  return (
    <React.Fragment>
      <Head>
        <title>Anime List</title>

        <meta name="og:description" content="Find your animes in one place!" />
        <meta name="og:title" content="Anime List" />
      </Head>
      <Layout>
        <Hero
          anime={{
            url: trendingAnimes[0]?.attributes?.coverImage?.large,
            alt: trendingAnimes[0]?.attributes?.canonicalTitle,
            title: trendingAnimes[0]?.attributes?.canonicalTitle,
          }}
        />
        <section className={styles.listsContainer}>
          <AnimeList
            title="Trending Animes"
            items={trendingAnimes}
            loading={loadingAnimes}
          />
        </section>
        <Search />
      </Layout>
    </React.Fragment>
  );
};

export default Home;
