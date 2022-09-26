import { useEffect, useState } from "react";
import { BASE_API_URL } from "../constants";

import axios from "axios";

export const useTrendingAnimes = () => {
    const [trendingAnimes, setTrendingAnimes] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchTrendingAnimes = async () => {
            const { data } = await axios.get(
                `${BASE_API_URL}/edge/trending/anime`
            );
            setTrendingAnimes(data.data);
        };
        fetchTrendingAnimes();
    }, []);
    
    return trendingAnimes;
}