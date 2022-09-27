import type { NextPage } from "next";

import Layout from "../../layout";

import Hero from "./components/Hero";
import AnimeList from "../../ui/AnimeList";

import { useTrending } from "../../../hooks/useTrending";

import styles from "./Home.module.scss";

const Home: NextPage = () => {
  const fetchedTrendingAnimes = useTrending({ type: "anime" });
  const fethecTrendingMangas = useTrending({ type: "manga" });

  const trendingAnimesItemList = fetchedTrendingAnimes.map((each) => ({
    url: each.attributes.posterImage.small,
    alt: each.attributes.canonicalTitle,
    title: each.attributes.canonicalTitle,
  }));

  const trendingMangasItemList = fethecTrendingMangas.map((each) => ({
    url: each.attributes.posterImage.small,
    alt: each.attributes.canonicalTitle,
    title: each.attributes.canonicalTitle,
  }));

  return (
    <Layout>
      <Hero
        anime={{
          url: fetchedTrendingAnimes[0]?.attributes.coverImage.large,
          alt: fetchedTrendingAnimes[0]?.attributes.canonicalTitle,
          title: fetchedTrendingAnimes[0]?.attributes.canonicalTitle,
        }}
      />
      <section className={styles.listsContainer}>
        <AnimeList title="Trending Animes" items={trendingAnimesItemList} />
        <AnimeList title="Trending Mangas" items={trendingMangasItemList} />
      </section>
    </Layout>
  );
};

export default Home;
