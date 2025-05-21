import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-6r1i.onrender.com/api/",
});

export const GetAllArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const GetAllArticlesbyId = (id) => {
  return api.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};
