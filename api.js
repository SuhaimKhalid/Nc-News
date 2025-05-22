import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-6r1i.onrender.com/api/",
});

export const GetAllArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const GetArticlesbyId = (id) => {
  return api.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const GetCommentsByArticleId = (id) => {
  return api.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
export const GetUsers = () => {
  return api.get("/users").then(({ data }) => {
    return data.users;
  });
};

//Update Article by Increment vote
export const UpdateVoteByArticle = (id, inc_votes) => {
  return api
    .patch(`/articles/${id}`, { inc_votes: inc_votes })
    .then(({ data }) => {
      return data.article;
    });
};
