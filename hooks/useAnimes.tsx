import { useEffect, useState } from "react";
import { findAllAnimes } from "../services/animeService";
import { api } from "../utils/api";

export const useAnimes = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [next, setNext] = useState<string | null>(null);

  const fetchAnimes = async (params?: any) => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await findAllAnimes(params);
      console.log(response);
      setData(response.data || []);
      setNext(response.links.next);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreAnimes = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const { data } = await api.get(String(next));
      setData((prev) => [...prev, ...data.data]);
      setNext(data.links.next);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimes();
  }, []);

  const formatedData = data?.map((each) => ({
    url: each.attributes.posterImage.small,
    alt: each.attributes.canonicalTitle,
    title: each.attributes.canonicalTitle,
    slug: `${each.attributes.slug}-${each.id}`,
    rating: each.attributes.averageRating,
    ...each,
  }));

  return {
    loading,
    data: formatedData,
    next,
    fetchAnimes,
    fetchMoreAnimes,
  };
};
