import React from "react";
import Head from "next/head";

import Layout from "../../layout";

import Hero from "./components/Hero";
import Search from "./components/Search";
import AnimeList from "../../ui/AnimeList";

import { IAnime } from "../../../types";

import styles from "./Home.module.scss";

const Home = ({ trending }: { trending: IAnime[] }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Anime List</title>

        <meta name="og:description" content="Find your animes in one place!" />
        <meta name="og:title" content="Anime List" />
        <meta
          name="og:image"
          content={trending[0]?.attributes?.posterImage?.small}
        />
      </Head>
      <Layout>
        <Hero
          anime={{
            url: trending[0]?.attributes?.coverImage?.large,
            alt: trending[0]?.attributes?.canonicalTitle,
            title: trending[0]?.attributes?.canonicalTitle,
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
