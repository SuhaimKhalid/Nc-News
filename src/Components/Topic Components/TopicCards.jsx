import { Row, Card, Col } from "react-bootstrap";

export const TopicCards = ({ onClickTopicHandler, allTopics }) => {
  return (
    <>
      <Row>
        {allTopics.map((topic, index) => {
          return (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card
                className="Item-card card-click"
                onClick={() => {
                  onClickTopicHandler(topic.slug);
                }}
              >
                <Card.Body>
                  <Card.Title>{topic.slug.toUpperCase()}</Card.Title>
                  <p>{topic.description}</p>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
