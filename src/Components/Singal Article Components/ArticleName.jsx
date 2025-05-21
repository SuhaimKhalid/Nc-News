import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
export const ArticleName = ({
  articleSelect,
  allArticleTitleObject,
  setArticleSelect,
  setArticleTitleLoad,
}) => {
  function ArticleSelectHandler(e) {
    setArticleSelect(e.target.value);
    setArticleTitleLoad(true);
  }

  return (
    <Form className="formGroup">
      <Col lg={12} className="mb-3">
        <Form.Select
          aria-label="Select Order"
          value={articleSelect || ""}
          onChange={ArticleSelectHandler}
        >
          <option value="" disabled>
            --Select Article By Title--
          </option>
          {Object.entries(allArticleTitleObject).map(([key, value], index) => {
            return (
              <option value={key} key={index}>
                {value}
              </option>
            );
          })}
        </Form.Select>
      </Col>
    </Form>
  );
};
