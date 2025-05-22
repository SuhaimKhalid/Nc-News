import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SpinnerSection } from "../Spinner";
import { GetArticlesbyId, GetCommentsByArticleId } from "../../../api";
import useFormattedDate from "../Hooks/useFormattedDate";
import { Row, Col, Card } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { VoteComponent } from "../VoteComponent";

export const ArticleDetails = () => {
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(false);
  const [article, setArticle] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  useEffect(() => {
    GetArticlesbyId(id)
      .then((data) => {
        setArticle(data);
      })
      .then(() => {
        GetCommentsByArticleId(id)
          .then((data) => {
            setArticleComments(data);
          })
          .finally(() => {
            setIsLoading(true);
          });
      });
  });
  const formattedDate = useFormattedDate(article?.created_at);
  return (
    <>
      {isloading ? (
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
                alt={article.title}
                src={article.article_img_url}
              />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.body}</Card.Text>

                <Table striped>
                  <tbody>
                    <tr>
                      <td>Topic:</td>
                      <td>{article.topic}</td>
                    </tr>
                    <tr>
                      <td>Created At:</td>
                      <td>{formattedDate}</td>
                    </tr>
                    <tr>
                      <td>Author:</td>
                      <td>{article.author}</td>
                    </tr>
                    <tr>
                      <td>Votes:</td>
                      <td>{article.votes}</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <VoteComponent
                          articleId={article.article_id}
                          setArticle={setArticle}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>

                {/* <VoteComponent
                  articleId={articleSelect}
                  setSingalArticle={setSingalArticle}
                /> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <SpinnerSection />
      )}
    </>
  );
};
