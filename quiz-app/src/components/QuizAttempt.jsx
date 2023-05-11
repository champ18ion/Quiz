import React, { useState, useEffect } from 'react';
import QuizResult from './QuizResult';

const QuizAttempt = ({ questions, duration }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(''));
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration=10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0 && !showScore) {
        setTimeLeft(timeLeft - 1);
      } else {
        setShowScore(true);
      }
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [timeLeft, showScore]);

  const handleAnswerClick = (selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const timeTaken = duration - timeLeft;

  return (
    <div>
      {showScore ? (
        <QuizResult questions={questions} answers={answers} score={score} timeTaken={timeTaken} />
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <div>{questions[currentQuestion].question}</div>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleAnswerClick(option)}
                />
                {option}
              </label>
            </div>
          ))}
          <div>Time left: {timeLeft}s</div>
        </div>
      )}
    </div>
  );
};

export default QuizAttempt;
