import { AxiosRequestConfig } from "axios";
import { IAPIResponse } from "../types";
import { api } from "../utils/api";

export const findAllAnimes = async (
  params: AxiosRequestConfig["params"],
  next?: string | null
) => {
  const { data } = await api.get(next || "/anime", {
    params,
  });
  return data as Promise<IAPIResponse>;
};
