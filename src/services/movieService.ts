import axios from "axios";
import { type Movie } from "../types/movie";

const token = import.meta.env.VITE_TMDB_API_KEY;

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
    accept: "application/json",
  },
});

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await instance.get("/search/movie", {
    params: {
      query: query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
  return response.data.results;
};
