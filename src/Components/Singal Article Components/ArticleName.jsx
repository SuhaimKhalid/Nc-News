import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
export const ArticleName = ({
  articleSelectId,
  setArticleSelectId,
  allArticleTitleObject,
  searchSingleArticleHandler,
}) => {
  function ArticleSelectHandler(e) {
    setArticleSelectId(e.target.value);
    // setArticleTitleLoad(true);
  }

  return (
    <Form className="formGroup">
      <Row>
        <Col lg={10} md={12} className="mb-3">
          <Form.Select
            aria-label="Select Order"
            value={articleSelectId || ""}
            onChange={ArticleSelectHandler}
          >
            <option value="" disabled>
              --Select Article By Title--
            </option>
            {Object.entries(allArticleTitleObject).map(
              ([key, value], index) => {
                return (
                  <option value={key} key={index}>
                    {value}
                  </option>
                );
              }
            )}
          </Form.Select>
        </Col>
        <Col lg={2} md={12}>
          <Button
            onClick={() => {
              searchSingleArticleHandler(articleSelectId);
            }}
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
