import { AxiosRequestConfig } from "axios";
import { IAPIResponse } from "../types";
import { api } from "../utils/api";

export const findAllAnimes = async (params: AxiosRequestConfig["params"]) => {
  const { data } = await api.get("/anime", {
    params,
  });
  return data as Promise<IAPIResponse>;
};

export const findTrendingAnimes = async () => {
  const { data } = await api.get("/trending/anime");
  return data as Promise<IAPIResponse>;
};

export const findAnimeById = async (id: string) => {
  const { data } = await api.get(`/animes/${id}`);
  return data as Promise<IAPIResponse>;
};
