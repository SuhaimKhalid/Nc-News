import { Container } from "react-bootstrap";
import { ArticleFilter } from "./ArticleComponents/ArticleFilter";
import { ArticleName } from "./ArticleComponents/ArticleName";

import { ArticleCard } from "./ArticleComponents/ArticleCard";
import { useEffect, useState } from "react";
import { GetAllArticles, GetAllArticlesbyId } from "../../api";
import Spinner from "react-bootstrap/Spinner";

export const Articles = () => {
  //To send title in User Input Field
  const [allArticleTitleObject, setAllArticleObject] = useState({});

  //Check for article Title
  const [articleTitleLoad, setArticleTitleLoad] = useState(false);
  const [singleArticle, setSingalArticle] = useState({});

  //TO get back User Selected Option
  const [articleSelect, setArticleSelect] = useState("");

  const [articleTopics, setArticleTopics] = useState([]);

  const [allArticles, setAllArticles] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    GetAllArticles()
      .then((data) => {
        const getTopics = [...new Set(data.map((item) => item.topic))];
        setArticleTopics(getTopics);

        const articleObject = {};
        data.forEach((item) => {
          articleObject[item.article_id] = item.title;
        });

        setAllArticleObject((prev) => ({
          ...prev,
          ...articleObject,
        }));

        setAllArticles(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //For Only Article Title
  useEffect(() => {
    if (articleTitleLoad) {
      GetAllArticlesbyId(articleSelect)
        .then((data) => {
          setSingalArticle(data);
        })
        .finally(() => setArticleTitleLoad(true));
    }
  }, [articleSelect]);

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

          <ArticleName
            setArticleTitleLoad={setArticleTitleLoad}
            singleArticle={singleArticle}
            allArticleTitleObject={allArticleTitleObject}
            setArticleSelect={setArticleSelect}
          />

          <ArticleFilter />

          <ArticleCard
            singleArticle={singleArticle}
            articleTitleLoad={articleTitleLoad}
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
