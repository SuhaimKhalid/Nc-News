import { Container } from "react-bootstrap";
import { ArticleFilter } from "./ArticleFilter";

import { ArticleCard } from "./ArticleCard";
import { useEffect, useState } from "react";
import { GetAllArticles } from "../../../api";
import Spinner from "react-bootstrap/Spinner";
import { GetArticlesbyId } from "../../../api";
import { useNavigate } from "react-router";
export const Articles = () => {
  const [articleTopics, setArticleTopics] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    GetAllArticles()
      .then((data) => {
        const getTopics = [...new Set(data.map((item) => item.topic))];
        setArticleTopics(getTopics);

        setAllArticles(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();
  function onClickCardHandler(id) {
    navigate(`/article/${id}`);
  }
  return (
    <>
      {!isloading ? (
        <Container>
          <h3
            className="text-3xl font-bold underline"
            style={{ textAlign: "center" }}
          >
            Articles
          </h3>

          <ArticleFilter />

          <ArticleCard
            onClickCardHandler={onClickCardHandler}
            allArticles={allArticles}
          />
        </Container>
      ) : (
        <section className="home-article spinner_center">
          <h3 className="text-center text-3xl font-bold">
            Articles is Loading
          </h3>
          <Spinner className="spinner_div" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </section>
      )}
    </>
  );
};
