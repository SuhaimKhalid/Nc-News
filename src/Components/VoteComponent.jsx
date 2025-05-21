import Button from "react-bootstrap/Button";
import { UpdateVoteByArticle } from "../../api";
export const VoteComponent = ({ articleId, setSingalArticle }) => {
  function voteHandler() {
    const vt = 1;
    UpdateVoteByArticle(articleId, vt).then((data) => {
      setSingalArticle(data);
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
