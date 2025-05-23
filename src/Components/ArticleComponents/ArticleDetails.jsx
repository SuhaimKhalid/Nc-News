import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SpinnerSection } from "../Spinner";
import {
  GetArticlesbyId,
  GetCommentsByArticleId,
  postComment,
} from "../../../api";
import useFormattedDate from "../Hooks/useFormattedDate";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { VoteComponent } from "../VoteComponent";
import { CommentForm } from "../CommentForm";
import { CommentSection } from "../Comments Components/CommentSection";

export const ArticleDetails = ({ selectedUser }) => {
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(false);
  const [article, setArticle] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [commentFormShow, setCommentFormShow] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [error, setError] = useState("");
  const [isPosting, setIsPosting] = useState(false);
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
  }, []);

  function addCommentHandler() {
    setCommentFormShow(true);
  }
  function postCommentHandler() {
    if (!commentBody.trim()) {
      setError("Comment cannot be empty!");
      return;
    }
    if (!commentBody || commentBody.trim() === "") {
      alert("Please Fill The Comment Field!");
      return;
    }
    const newComment = {
      username: selectedUser.username,
      body: commentBody,
    };

    setIsPosting(true);
    postComment(id, newComment)
      .then((data) => {
        setArticleComments((prev) => [data, ...prev]);
        setCommentBody(""); // Clear the input
        setCommentFormShow(false); // Hide the form
      })
      .catch((err) => {
        console.error("Failed to post comment:", err);
      })
      .finally(() => {
        setIsPosting(false);
      });
  }

  const formattedDate = useFormattedDate(article?.created_at);
  return (
    <>
      {isloading ? (
        <section className="Article_detail_page">
          <div className="article-img">
            <img alt={article.title} src={article.article_img_url} />
          </div>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <Table id="transparent-table">
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
            </tbody>
          </Table>

          {commentFormShow ? (
            <CommentForm
              isPosting={isPosting}
              error={error}
              setError={setError}
              postCommentHandler={postCommentHandler}
              setCommentFormShow={setCommentFormShow}
              setCommentBody={setCommentBody}
              commentBody={commentBody}
              id={id}
            />
          ) : (
            <div className="btns-section">
              <VoteComponent
                articleId={article.article_id}
                setArticle={setArticle}
              />
              <Button onClick={addCommentHandler}>Add Comment</Button>
            </div>
          )}

          <CommentSection
            setArticleComments={setArticleComments}
            articleComments={articleComments}
          />
        </section>
      ) : (
        <SpinnerSection />
      )}
    </>
  );
};
