import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { GetAllArticles } from "../../../api";
import Spinner from "react-bootstrap/Spinner";

export const HomeCoding = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;

    GetAllArticles()
      .then((data) => {
        const articleLength = data.length;

        const initialIndex = Math.floor(Math.random() * articleLength);
        setArticle(data[initialIndex]);

        timer = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * articleLength);
          setArticle(data[randomIndex]);
        }, 1500);
      })
      .finally(() => setIsLoading(false));

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {!isLoading ? (
        <section className="home-article">
          <h3 className="">Articles</h3>
          <Row>
            <Col className="left-side-home-article" md={12} lg={6}>
              <img src={article.article_img_url} alt="Coding Image" />
            </Col>
            <Col className="right-side-home-article" md={12} lg={6}>
              <h3>{article.topic}</h3>
              <p>{article.title}</p>
            </Col>
          </Row>
        </section>
      ) : (
        <section className="home-article spinner_center">
          <h3 className="text-center text-3xl font-bold">Articles</h3>
          <Spinner className="spinner_div" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </section>
      )}
    </>
  );
};
