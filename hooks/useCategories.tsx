import { useEffect, useState } from "react";
import { BASE_API_URL } from "../constants";

import axios from "axios";

export const useCategories = () => {
    const [categories, setCategories] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchCategories = async () => {
            const { data } = await axios.get(
                `${BASE_API_URL}/edge/categories`
            );
            setCategories(data.data);
        };
        fetchCategories();
    }, []);
    
    return categories;
}