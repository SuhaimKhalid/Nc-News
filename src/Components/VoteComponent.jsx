import Button from "react-bootstrap/Button";
import { UpdateVoteByArticle } from "../../api";
export const VoteComponent = ({ articleId, setArticle }) => {
  function voteHandler() {
    const vote = 1;
    UpdateVoteByArticle(articleId, vote).then((data) => {
      setArticle(data);
    });
  }

  return (
    <>
      <Button variant="primary" onClick={voteHandler}>
        Vote
      </Button>
    </>
  );
};
