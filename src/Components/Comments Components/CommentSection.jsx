import { useContext, useEffect, useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { AppContext } from "../AppContext";
import { Alert } from "react-bootstrap";
import { deleteComment, GetCommentsByArticleId } from "../../../api";
import { useParams } from "react-router";
export const CommentSection = ({ articleComments, setArticleComments }) => {
  const { selectedUser } = useContext(AppContext);
  const [errorIndex, setErrorIndex] = useState(null);

  const [disabled, setDisabled] = useState(false);
  const [disableIndex, setDisableIndex] = useState(null);

  const [showAlert, setShowAlert] = useState(false);
  const { id } = useParams();
  function deleteCommentHandler(username, commentId, index) {
    if (username === selectedUser.username) {
      setDisabled(true);
      setDisableIndex(index);
      deleteComment(commentId)
        .then(() => {
          GetCommentsByArticleId(id).then((data) => {
            setArticleComments(data);
          });
        })
        .finally(() => {
          setDisabled(false);
          setDisableIndex(null);
          alert("Your Comment is Deleted Successfully!");
        });
    } else {
      setShowAlert(true);
      setErrorIndex(index);
    }
  }

  useEffect(() => {
    if (showAlert) {
      let timer = setInterval(() => {
        setShowAlert(false);
      }, 1500);
      return () => clearInterval(timer);
    }
  }, [showAlert]);

  return (
    <>
      <Col lg={12} className="Comments-section">
        <h4>Comments</h4>
        {articleComments.map((comment, index) => {
          const formattedDate = new Date(comment.created_at).toLocaleDateString(
            "en-GB",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          );
          return (
            <Card className="Item-card comment_card" key={index}>
              {errorIndex === index && showAlert && (
                <Alert variant="danger">
                  User can delete only its Comments
                </Alert>
              )}
              <Button
                className="comment-btn"
                disabled={disabled}
                onClick={() =>
                  deleteCommentHandler(
                    comment.author,
                    comment.comment_id,
                    index
                  )
                }
              >
                {disableIndex === index ? "..." : "X"}
              </Button>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{comment.body}</p>
                  <footer className="blockquote-footer">
                    {comment.author}
                  </footer>
                  <footer className="blockquote-footer">
                    Created at: {formattedDate}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          );
        })}
      </Col>
    </>
  );
};
