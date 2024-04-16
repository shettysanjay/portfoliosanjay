import React, { useState } from "react";
import "./question.css";
import ErrorMessage from "./ErrorMessage";
import { Button } from "@mui/material";
import FinalScreen from "./FinalScreen";

const Questions = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  score,
  setScore,
  options,
  correct,
  name,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelect = (option) => {
    if (selected === option && selected === correct) {
      return "select";
    } else if (selected === option && selected !== correct) {
      return "wrong";
    } else if (option === correct) {
      return "select";
    }
  };
  const handleCheck = (option) => {
    setSelected(option);
    if (option === correct) {
      setScore(score + 1);
    }
    setError(false);
  };
  const handleQuit = () => {};
  const handleNext = () => {
    if (currentQuestion === 10) {
      return <FinalScreen score={score} name={name} />;
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected("");
    } else {
      setError("please select an option");
    }
  };
  return (
    <div className="question">
      <h1>Question {currentQuestion + 1} </h1>
      <div className="singleQuestion">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {error ? <ErrorMessage>{error}</ErrorMessage> : <></>}
          {options &&
            options.map((option) => (
              <button
                onClick={() => handleCheck(option)}
                className={`singleOption ${selected && handleSelect(option)}`}
                key={option}
                disabled={selected}
              >
                {option}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/quiz"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
