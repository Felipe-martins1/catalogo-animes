import { AxiosRequestConfig } from "axios";
import { IAPIResponse } from "../types";
import { api } from "../utils/api";

export const findAllAnimes = async (params: AxiosRequestConfig["params"]) => {
  const { data } = await api.get("/anime", {
    params,
  });
  return data as Promise<IAPIResponse>;
};
