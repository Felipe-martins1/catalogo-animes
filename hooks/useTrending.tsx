import { useEffect, useState } from "react";
import { BASE_API_URL } from "../constants";

import axios from "axios";

type Props = {
  type: "anime" | "manga";
};

export const useTrending = ({ type = "anime" }: Props) => {
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState<any[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${BASE_API_URL}/edge/trending/${type}`
        );
        setTrending(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  return trending;
};
