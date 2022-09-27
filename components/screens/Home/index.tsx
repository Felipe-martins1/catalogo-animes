import type { NextPage } from "next";

import { Typography } from "antd";

import Layout from "../../layout";

import Hero from "./components/Hero";
import Search from "./components/Search";
import AnimeList from "../../ui/AnimeList";

import { useTrending } from "../../../hooks/useTrending";

import styles from "./Home.module.scss";
import { findTrendingAnimes } from "../../../services/animeService";

const Home: NextPage = () => {
  const { loading: loadingAnimes, data: trendingAnimes } = useTrending();

  return (
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
  );
};

export default Home;
