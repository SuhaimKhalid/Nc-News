import { Row, Col, Card, Table } from "react-bootstrap";
export const TopicArticles = ({ onClickCardHandler, allArticles }) => {
  return (
    <>
      <Row>
        {allArticles.map((article, index) => {
          const formatedDate = new Date(article.created_at).toLocaleDateString(
            "en-GB",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          );

          return (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card
                className="Item-card card-click"
                onClick={() => {
                  onClickCardHandler(article.article_id);
                }}
              >
                <Card.Img
                  style={{
                    width: "200px",
                    margin: "10px auto",
                    borderRadius: "10px",
                  }}
                  variant="top"
                  alt={"ArticleImage No " + article.title}
                  src={article.article_img_url}
                />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Table striped>
                    <tbody>
                      <tr>
                        <td>Topic:</td>
                        <td>{article.topic.toUpperCase()}</td>
                      </tr>
                      <tr>
                        <td>Created At:</td>
                        <td>{formatedDate}</td>
                      </tr>
                      <tr>
                        <td>Votes:</td>
                        <td>{article.votes}</td>
                      </tr>
                      <tr>
                        <td>Comment Count:</td>
                        <td>{article.comment_count}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
