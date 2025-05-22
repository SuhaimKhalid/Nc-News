import { useEffect, useState } from "react";
import { ArticleName } from "./ArticleName";
import { GetAllArticles } from "../../../api";
import { GetArticlesbyId } from "../../../api";
import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import { SingalArticleCard } from "./SingalArticleCard";
export const SingalArticle = () => {
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
      GetArticlesbyId(articleSelect)
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
          <h3 className="find-article-heading">Find Article By Name</h3>
          <ArticleName
            setArticleTitleLoad={setArticleTitleLoad}
            singleArticle={singleArticle}
            allArticleTitleObject={allArticleTitleObject}
            setArticleSelect={setArticleSelect}
            articleSelect={articleSelect}
          />
          <SingalArticleCard
            show={show}
            articleSelect={articleSelect}
            articleTitleLoad={articleTitleLoad}
            singleArticle={singleArticle}
            setSingalArticle={setSingalArticle}
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
