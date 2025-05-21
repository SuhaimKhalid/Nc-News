import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const ArticleFilter = () => {
  function ArticleOrdertHandler() {}
  function ArticleTypetHandler() {}

  return (
    <Form className="formGroup">
      <Col lg={4} className="mb-3">
        <Form.Select aria-label="Select Order" onChange={ArticleOrdertHandler}>
          <option value="">--Select Order--</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Form.Select>
      </Col>
      <Col lg={4} className="mb-3">
        <Form.Select aria-label="Select Order" onChange={ArticleTypetHandler}>
          <option value="">--Select Type--</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Form.Select>
      </Col>
    </Form>
  );
};
