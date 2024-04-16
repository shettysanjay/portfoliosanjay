import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import "./quiz.css";
import Questions from "./Questions";

const Quiz = ({ name, score, setScore, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [questions, currentQuestion]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <span className="subtitle">Welcome {name}</span>
      {questions ? (
        <>
          <div className="quizinfo">
            <span>{questions[currentQuestion].category}</span>
            <span>Score:{score}</span>
          </div>
          <Questions
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            options={options}
            score={score}
            setScore={setScore}
            correct={questions[currentQuestion]?.correct_answer}
            name={name}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100, color: "inherit", size: 150, thickness: 1 }}
        />
      )}
    </div>
  );
};

export default Quiz;
