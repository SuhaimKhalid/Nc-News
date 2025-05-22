import { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router";

export const SingleArticleCard = ({ singleArticle, setSingleArticleShow }) => {
  const navigate = useNavigate();

  function onClickCardHandler() {
    navigate(`/article/${singleArticle.article_id}`);
    setSingleArticleShow(false);
  }

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
      <Row className="singaleArticle">
        <h3>{singleArticle.title}</h3>
        <p>{singleArticle.body}</p>
        <Col lg={6} md={12} className="singleArticleImg">
          <img alt={singleArticle.title} src={singleArticle.article_img_url} />
        </Col>
        <Col lg={6} sm={12}>
          <Table id="transparent-table">
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
              <tr>
                <td colSpan={2}>
                  <Button
                    style={{ width: "100%" }}
                    className=""
                    onClick={onClickCardHandler}
                  >
                    View Article
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};
