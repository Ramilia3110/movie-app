import axios from "axios";

const instance = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api/",
  headers: {
    "X-API-KEY": "941c29e1-11dd-4483-9362-2f60c83ecbe1",
    "Content-Type": "application/json",
  },
});

export const filmsAPIs = {
  getAllFilms() {
    return instance.get(`v2.2/films`);
  },
  getDetail(id: string) {
    return instance.get(`v2.2/films/${id}`);
  },
  getSearchedFilm(search: string) {
    return instance.get(`v2.1/films/search-by-keyword?keyword=${search}`);
  },
};
