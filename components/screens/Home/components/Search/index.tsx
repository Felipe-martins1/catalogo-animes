import React from "react";

import { Button, Input, Typography } from "antd";
const { Title } = Typography;
import { AnimePoster } from "../../../../ui/AnimePoster";

import { useAnimes } from "../../../../../hooks/useAnimes";

import styles from "./Search.module.scss";

const Search = () => {
  const { data, loading, fetchMoreAnimes, fetchAnimes, next } = useAnimes();

  const handleSearch = async (value: string) => {
    await fetchAnimes({
      ...(value.length && { "filter[text]": value }),
    });
  };

  return (
    <section className={styles.container}>
      <Input.Search
        size="large"
        allowClear
        placeholder="Find your favorite anime!"
        onSearch={handleSearch}
      />

      <section className={styles.results}>
        {data?.map((each) => (
          <AnimePoster key={each.slug} data={each} />
        ))}
      </section>

      {next && (
        <Button
          className={styles.loadMoreButton}
          type="primary"
          size="large"
          loading={loading}
          onClick={fetchMoreAnimes}
        >
          {loading ? "Loading..." : "Load more"}
        </Button>
      )}
    </section>
  );
};

export default Search;
