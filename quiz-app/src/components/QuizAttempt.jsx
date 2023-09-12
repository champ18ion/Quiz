import React, { useState, useEffect } from "react";
import QuizResult from "./QuizResult";
import {
  MDBBtn,
  MDBCard,
  MDBCardHeader,
} from "mdb-react-ui-kit";

const QuizAttempt = ({ questions, onStart, duration }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(""));
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration);

// setting timer for quiz
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0 && !showScore) {
        setTimeLeft(timeLeft - 1);
      } else {
        handleSubmit();
        setShowScore(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, showScore]);
   
  // setting answers in answer array
  const handleAnswer = (questionIndex, selectedAnswer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedAnswer;
    setAnswers(newAnswers);
  };
  
  const handleSubmit = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      const selectedAnswer = answers[i];
      const correctAnswer = questions[i].answer;
      if (selectedAnswer === correctAnswer) {
        newScore++;
      }
    }
    setScore(newScore);
    setShowScore(true);
  };
  
  
  
  
  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  

  const handlePrevClick = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };
  const timeTaken = duration - timeLeft;

  return (
    <div className="container flex-column align-items-center">
      {showScore ? (
        <QuizResult
          questions={questions}
          answers={answers}
          score={score}
          timeTaken={timeTaken}
          onStart={onStart}
        />
      ) : (
        <div className="mt-4">
          <MDBCard alignment="center">
          <div className="time-left">
                <h4>⌚</h4>
                <span>{`${timeLeft} sec`}</span>
              </div>
            <MDBCardHeader className="">
              {" "}
              <h2>Question {currentQuestion + 1}</h2>
            </MDBCardHeader>
            <div className="text-primary que-box">
              {questions[currentQuestion].question}
            </div>

            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="inputGroup">
                <input
                  type="radio"
                  value={option}
                  id={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => {handleAnswer(currentQuestion, option);
                  }}
                  className="radio"
                  disabled={false}
                />
                <label for={option}>{option}</label>
              </div>
            ))}
            <MDBBtn
              className="m-2"
              color="success"
              rounded
              onClick={currentQuestion === questions.length - 1 ? handleSubmit : handleNextClick}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </MDBBtn>
            <MDBBtn
              className="m-2"
              rounded
              color="info"
              onClick={handlePrevClick}
              disabled={currentQuestion === 0}
            >
              prev
            </MDBBtn>
          </MDBCard>
        </div>
      )}
    </div>
  );
};

export default QuizAttempt;
