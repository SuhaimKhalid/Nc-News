import { useEffect, useState } from "react";
import { TopicArticles } from "./TopicArticles";
import { GetAllArticles, getTopicArticles } from "../../../api";
import { useNavigate, useParams } from "react-router";
import { SpinnerSection } from "../SpinnerSection";
import { ArticleFilter } from "./ArticleFilter";
export const TopicPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allArticles, setAllArticles] = useState([]);

  const navigate = useNavigate();
  function onClickCardHandler(id) {
    navigate(`/article/${id}`);
  }
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getTopicArticles(slug)
      .then((data) => {
        setAllArticles(data);
      })
      .catch(() => {
        navigate("*");
      })

      .finally(() => setIsLoading(false));
  }, [slug]);
  return (
    <>
      <ArticleFilter
        setIsLoading={setIsLoading}
        setAllArticles={setAllArticles}
      />
      {!isLoading ? (
        <>
          <TopicArticles
            allArticles={allArticles}
            onClickCardHandler={onClickCardHandler}
          />
        </>
      ) : (
        <SpinnerSection />
      )}
    </>
  );
};
