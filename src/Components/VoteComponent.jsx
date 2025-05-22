import Button from "react-bootstrap/Button";
import { UpdateVoteByArticle } from "../../api";
import { useState } from "react";
export const VoteComponent = ({ articleId, setArticle }) => {
  const [error, setError] = useState(null);
  const [isVoting, setIsVoting] = useState(false);

  function voteHandler() {
    const vote = 1;

    // Optimistically update UI
    setArticle((prev) => ({
      ...prev,
      votes: prev.votes + vote,
    }));
    setIsVoting(true);
    setError(null);

    UpdateVoteByArticle(articleId, vote)
      .then((data) => {
        setArticle(data); // Final update with backend response
      })
      .catch((err) => {
        // Rollback on failure
        setArticle((prev) => ({
          ...prev,
          votes: prev.votes - vote,
        }));
        setError("Failed to register vote. Please try again.");
      })
      .finally(() => setIsVoting(false));
  }

  return (
    <>
      <Button variant="primary" onClick={voteHandler} disabled={isVoting}>
        {isVoting ? "Voting..." : "Vote"}
      </Button>
      {error && <div className="text-danger mt-2">{error}</div>}
    </>
  );
};
