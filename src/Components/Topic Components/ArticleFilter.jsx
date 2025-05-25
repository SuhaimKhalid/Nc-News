import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getSortedArticles } from "../../../api";
import { useParams } from "react-router";

export const ArticleFilter = ({ setIsLoading, setAllArticles }) => {
  const { slug } = useParams();
  const [order, setOrder] = useState("");
  const [sortBy, setSortBy] = useState("");
  function ArticleOrdertHandler(e) {
    setOrder(e.target.value);
  }
  function ArticleSorttHandler(e) {
    setSortBy(e.target.value);
  }
  useEffect(() => {
    setIsLoading(true);
    getSortedArticles(slug, sortBy, order)
      .then((data) => {
        setAllArticles(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [order, sortBy]);

  return (
    <Form className="formGroup">
      <Row>
        <Col lg={4} className="mb-3">
          <Form.Select
            aria-label="Select Order"
            value={order}
            onChange={ArticleOrdertHandler}
          >
            <option value="" disabled>
              --Select Order--
            </option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Form.Select>
        </Col>
        <Col lg={4} className="mb-3">
          <Form.Select aria-label="Select Order" onChange={ArticleSorttHandler}>
            <option value="" disabled>
              --Sort By --
            </option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Vote</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};
