import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
export const CommentForm = ({
  setCommentFormShow,
  commentBody,
  setCommentBody,
  postCommentHandler,
  error,
  setError,
  isPosting,
}) => {
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submit reload
          postCommentHandler();
        }}
      >
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group
          type="submit"
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Add Comment</Form.Label>
          <Form.Control
            type="text"
            value={commentBody}
            onChange={(e) => {
              setCommentBody(e.target.value);
              setError("");
            }}
            placeholder="Type Your Comment"
          />
        </Form.Group>
        <div className="form-btns">
          <Button
            onClick={() => {
              setCommentFormShow(false);
              setCommentBody("");
            }}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isPosting}>
            {isPosting ? "Posting..." : "Post Comment"}
          </Button>
        </div>
      </Form>
    </>
  );
};
