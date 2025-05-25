import { useEffect, useState } from "react";
import { GetAllArticles, getTopics } from "../../../api";
import Spinner from "react-bootstrap/Spinner";
import { GetArticlesbyId } from "../../../api";
import { useNavigate } from "react-router";
import { ArticleName } from "../Singal Article Components/ArticleName";
import { SingleArticleCard } from "../Singal Article Components/SingleArticleCard";
import { TopicCards } from "../Topic Components/TopicCards";
export const Articles = () => {
  const navigate = useNavigate();

  const [isloading, setLoading] = useState(true);

  ////For Single Card Article

  const [singleArticle, setSingleArticle] = useState({});
  //TO send nma eof title in userInput Field
  const [allArticleTitleObject, setAllArticleObject] = useState({});

  const [singleArticleShow, setSingleArticleShow] = useState(false);
  //TO get back User Selected Option by Id value
  const [articleSelectId, setArticleSelectId] = useState(""); //1,2,3

  //For Topics
  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    getTopics().then((data) => {
      setAllTopics(data);
    });
  }, []);
  useEffect(() => {
    setLoading(true);
    GetAllArticles()
      .then((data) => {
        //For Singale Article
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

  //For Search For single Article
  function searchSingleArticleHandler(id) {
    if (articleSelectId != "") {
      GetArticlesbyId(id)
        .then((data) => {
          setSingleArticle(data);
        })
        .catch(() => {
          navigate("*");
        })
        .finally(() => {
          setSingleArticleShow(true);
        });
    } else {
      alert("Please Select an Article!");
    }
  }

  function onClickCardHandler(id) {
    navigate(`/article/${id}`);
  }
  function onClickTopicHandler(slug) {
    navigate(`/articles/${slug}`);
  }
  return (
    <>
      {!isloading ? (
        <section className="Article_page">
          <h3>Articles</h3>
          <ArticleName
            searchSingleArticleHandler={searchSingleArticleHandler}
            allArticleTitleObject={allArticleTitleObject}
            setArticleSelectId={setArticleSelectId}
            articleSelectId={articleSelectId}
          />
          <h3 className="Heading_topic">Topics</h3>
          <TopicCards
            onClickCardHandler={onClickCardHandler}
            allTopics={allTopics}
            onClickTopicHandler={onClickTopicHandler}
          />
          {singleArticleShow ? (
            <SingleArticleCard
              setSingleArticleShow={setSingleArticleShow}
              singleArticle={singleArticle}
            />
          ) : (
            ""
          )}
        </section>
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
