import React, { useState } from "react";
import "./index.css";

function Poll() {
  const [votes, setVotes] = useState({ option1: 0, option2: 0, option3: 0 });
  const [buttonSize, setButtonSize] = useState({
    option1: "normal",
    option2: "normal",
    option3: "normal",
  });
  const [showResults, setShowResults] = useState(false);

  const handleVote = (option) => {
    setVotes({
      ...votes,
      [option]: votes[option] + 1,
    });

    // Toggle button size
    setButtonSize({
      ...buttonSize,
      [option]: buttonSize[option] === "normal" ? "large" : "normal",
    });
  };

  const getTotalVotes = () => votes.option1 + votes.option2 + votes.option3;

  const getPercentage = (optionVotes) => {
    const totalVotes = getTotalVotes();
    return totalVotes === 0 ? 0 : ((optionVotes / totalVotes) * 100).toFixed(1);
  };

  return (
    <div className="container">
      <h1>Vote for Your Favorite Marvel Hero</h1>
      <div className="poll-options">
        <div className="poll-option">
          <img
            src="https://i.imgur.com/JRSukNC.jpeg"
            alt="Iron Man"
            className="poll-image"
          />
          <button
            onClick={() => handleVote("option1")}
            className={`vote-button ${buttonSize.option1}`}
          >
            Vote for Iron Man
          </button>
        </div>
        <div className="poll-option">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg"
            alt="Captain America"
            className="poll-image"
          />
          <button
            onClick={() => handleVote("option2")}
            className={`vote-button ${buttonSize.option2}`}
          >
            Vote for Captain America
          </button>
        </div>
        <div className="poll-option">
          <img
            src="https://i.imgur.com/mrjRlKq.jpeg"
            alt="Spider-Man"
            className="poll-image"
          />
          <button
            onClick={() => handleVote("option3")}
            className={`vote-button ${buttonSize.option3}`}
          >
            Vote for Spider-Man
          </button>
        </div>
      </div>

      <button onClick={() => setShowResults(!showResults)} className="results-button">
        {showResults ? "Hide Results" : "Show Results"}
      </button>

      {showResults && (
        <div className="results">
          <h2>Results</h2>
          <p>Iron Man: {votes.option1} votes ({getPercentage(votes.option1)}%)</p>
          <p>Captain America: {votes.option2} votes ({getPercentage(votes.option2)}%)</p>
          <p>Spider-Man: {votes.option3} votes ({getPercentage(votes.option3)}%)</p>
        </div>
      )}
    </div>
  );
}

export default Poll;
