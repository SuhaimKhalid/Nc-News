import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { VoteComponent } from "../VoteComponent";
export const SingalArticleCard = ({
  show,
  singleArticle,
  setSingalArticle,
  articleSelect,
}) => {
  const formatedDate = new Date(singleArticle.created_at).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

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
                alt={singleArticle.title}
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
                      <td>{formatedDate}</td>
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

                <VoteComponent
                  articleId={articleSelect}
                  setSingalArticle={setSingalArticle}
                />
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
