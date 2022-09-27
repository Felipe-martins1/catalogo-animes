import { useEffect, useState } from "react";
import { findTrendingAnimes } from "../services/animeService";

export const useTrending = () => {
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState<any[]>([]);

  const fetchTrending = async () => {
    setLoading(true);
    try {
      const { data } = await findTrendingAnimes();
      setTrending(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const formatedTrending = trending?.map((each) => ({
    url: each.attributes.posterImage.small,
    alt: each.attributes.canonicalTitle,
    title: each.attributes.canonicalTitle,
    slug: `${each.attributes.slug}-${each.id}`,
    rating: each.attributes.averageRating,
    ...each,
  }));

  return { loading, data: formatedTrending };
};
