import { Container } from "react-bootstrap";
import { ArticleName } from "./Singal Article Components/ArticleName";
import { useEffect, useState } from "react";
import { ArticleName } from "./ArticleName";
import { GetAllArticles } from "../../../api";
import { GetAllArticlesbyId } from "../../../api";
import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import { SingalArticleCard } from "./SingalArticleCard";
export const Comments = () => {
  //Check for article Title
  const [articleTitleLoad, setArticleTitleLoad] = useState(false);
  const [singleArticle, setSingalArticle] = useState({});
  //TO send nma eof title in userInput Field
  const [allArticleTitleObject, setAllArticleObject] = useState({});
  //TO get back User Selected Option by Id value
  const [articleSelect, setArticleSelect] = useState(""); //1,2,3
  const [isloading, setLoading] = useState(true);

  const [show, setShow] = useState(false);

  //For Only Article Title
  useEffect(() => {
    setLoading(true);
    GetAllArticles()
      .then((data) => {
        const articleObject = {};
        data.forEach((item) => {
          articleObject[item.article_id] = item.title;
        });

        setAllArticleObject((prev) => ({
          ...prev,
          ...articleObject,
        }));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (articleTitleLoad) {
      GetAllArticlesbyId(articleSelect)
        .then((data) => {
          setSingalArticle(data);
        })
        .finally(() => {
          setShow(true);
        });
    }
  }, [articleSelect]);
  return (
    <>
      {!isloading ? (
        <Container>
          <h3 className="find-article-heading">
            Select An Article to Se its Comments
          </h3>
          <ArticleName
            setArticleTitleLoad={setArticleTitleLoad}
            singleArticle={singleArticle}
            allArticleTitleObject={allArticleTitleObject}
            setArticleSelect={setArticleSelect}
          />
        </Container>
      ) : (
        <section className="home-article spinner_center">
          <h3 className="text-center text-3xl font-bold">Please Wait...</h3>
          <Spinner className="spinner_div" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </section>
      )}
    </>
  );
};
