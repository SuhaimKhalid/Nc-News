import { useEffect, useState } from "react";
import { TopicArticles } from "./TopicArticles";
import { GetAllArticles, getTopicArticles } from "../../../api";
import { useNavigate, useParams } from "react-router";
import { SpinnerSection } from "../SpinnerSection";
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

      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      {!isLoading ? (
        <TopicArticles
          allArticles={allArticles}
          onClickCardHandler={onClickCardHandler}
        />
      ) : (
        <SpinnerSection />
      )}
    </>
  );
};
