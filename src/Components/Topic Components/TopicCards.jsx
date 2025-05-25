import { Row, Card, Col } from "react-bootstrap";

export const TopicCards = ({ onClickTopicHandler, allTopics }) => {
  return (
    <>
      <Row>
        {allTopics.map((topic, index) => {
          return (
            <Col className="topiccard-click" lg={4} md={6} sm={12} key={index}>
              <Card
                className="Item-card"
                onClick={() => {
                  onClickTopicHandler(topic.slug);
                }}
              >
                <Card.Body>
                  <div>
                    <Card.Title>{topic.slug.toUpperCase()}</Card.Title>
                    <p>{topic.description}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
