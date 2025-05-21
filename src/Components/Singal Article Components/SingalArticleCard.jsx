import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
export const SingalArticleCard = ({ show, singleArticle }) => {
  return (
    <>
      {show ? (
        <Row>
          <Col lg={12} sm={12}>
            <Card className="Item-card">
              <Card.Img
                style={{
                  width: "200px",
                  margin: "10px auto",
                  borderRadius: "10px",
                }}
                variant="top"
                alt={"ArticleImage No " + singleArticle.article_id}
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
        </Row>
      ) : (
        ""
      )}
    </>
  );
};
