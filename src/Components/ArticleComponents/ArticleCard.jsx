import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
export const ArticleCard = ({ allArticles }) => {
  function isValidImageUrl(url) {
    return (
      typeof url === "string" &&
      /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp)$/i.test(url)
    );
  }

  return (
    <>
      <Row>
        {allArticles.map((article, index) => {
          const imageUrl = isValidImageUrl(article.article_img_url)
            ? article.img_url
            : "/images/default.jpg";
          return (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card className="Item-card">
                <Card.Img
                  style={{
                    width: "200px",
                    margin: "10px auto",
                    borderRadius: "10px",
                  }}
                  variant="top"
                  alt={"ArticleImage No " + article.article_id}
                  src={article.article_img_url}
                />
                <Card.Body>
                  <Card.Title>{article.item_name}</Card.Title>
                  <Card.Text>{article.topic}</Card.Text>
                  <Table striped>
                    <tbody>
                      <tr>
                        <td>Created At:</td>
                        <td>{article.created_at}</td>
                      </tr>
                      <tr>
                        <td>Votes:</td>
                        <td>{article.votes}</td>
                      </tr>
                      <tr>
                        <td>Comment Count</td>
                        <td>{article.comment_count}</td>
                      </tr>
                    </tbody>
                  </Table>

                  <Button variant="primary">Vote</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
