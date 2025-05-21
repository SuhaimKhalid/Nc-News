import { Row, Col, Card } from "react-bootstrap";
import { ArticleCommentCard } from "./ArticleCommentCard";
import { CommentCards } from "./CommentCards";
export const CommentCardSection = ({ singleArticle, commentsArray }) => {
  return (
    <>
      <Row>
        <ArticleCommentCard singleArticle={singleArticle} />
        <CommentCards
          commentsArray={commentsArray}
          singleArticle={singleArticle}
        />
      </Row>
    </>
  );
};
