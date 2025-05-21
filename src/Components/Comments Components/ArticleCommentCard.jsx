import { Col, Card, Table, Button } from "react-bootstrap";
export const ArticleCommentCard = ({ singleArticle }) => {
  return (
    <>
      <Col lg={6} md={12}>
        <Card className="Item-card">
          <Card.Img
            style={{
              width: "200px",
              margin: "10px auto",
              borderRadius: "10px",
            }}
            variant="top"
            alt={"ArticleImage No " + singleArticle.title}
            src={singleArticle.article_img_url}
          />
          <Card.Body>
            <Card.Title>{singleArticle.title}</Card.Title>
            <Card.Text>{singleArticle.body}</Card.Text>

            <Table striped>
              <tbody>
                <tr>
                  <td>Topic:</td>
                  <td>{singleArticle.topic}</td>
                </tr>
                <tr>
                  <td>Created At:</td>
                  <td>{singleArticle.created_at}</td>
                </tr>
                <tr>
                  <td>Author:</td>
                  <td>{singleArticle.author}</td>
                </tr>
                <tr>
                  <td>Votes:</td>
                  <td>{singleArticle.votes}</td>
                </tr>
              </tbody>
            </Table>

            <Button variant="primary">Vote</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
