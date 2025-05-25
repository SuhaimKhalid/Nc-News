import axios from "axios";
import { useNavigate } from "react-router";

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
export const getTopics = () => {
  return api.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

// Get Specifice Article by Topic

export const getTopicArticles = (topic) => {
  return api.get(`articles/?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
};

//Get Article by sorted
export const getSortedArticles = (topic, sorted_by, order) => {
  return api
    .get(`articles/?topic=${topic}&sort_by=${sorted_by}&order=${order}`)
    .then(({ data }) => {
      return data.articles;
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

//Patch Request to add new Comment
export const postComment = (id, body) => {
  return api.post(`/articles/${id}/comments`, body).then(({ data }) => {
    return data.comment;
  });
};

//Delete Comment
export const deleteComment = (id) => {
  return api.delete(`/comments/${id}`).then(({ data }) => {
    return data.comment;
  });
};
