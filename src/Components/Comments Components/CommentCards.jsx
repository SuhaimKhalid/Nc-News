import { Col, Card, Row } from "react-bootstrap";

export const CommentCards = ({ commentsArray, singleArticle }) => {
  return (
    <>
      <Col lg={6} md={12}>
        <h3>{singleArticle.item_name}</h3>

        {commentsArray.map((comment, index) => {
          return (
            <Col lg={12} key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>Username: {comment.author}</Card.Title>
                  <Card.Text>
                    <b>Comment:</b> {comment.body}
                  </Card.Text>
                  <Card.Text>
                    <b>Votes: </b>
                    {comment.votes}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Col>
    </>
  );
};
