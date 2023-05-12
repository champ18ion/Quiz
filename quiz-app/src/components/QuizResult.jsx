import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React, { useState } from "react";
import Confetti from "react-confetti";
import trophy from "../trophy.svg";

function QuizResult({ questions, answers, score, timeTaken, onStart }) {
  // state to show attempted answers
  const [showanswer, setShowAnswer] = useState(false);

  return (
    <>
    {/* renders confetti only if user passes test */}
      {score >= 7 && <Confetti />}
      <MDBContainer fluid className="result">
        <div className="result">
          <aside class="responsive-banner first">
            <div class="container-envelope">
              {/* Circles for design */}
              <svg class="cirle-a" height="160" width="160">
                <circle cx="80" cy="80" r="80" />
              </svg>
              <svg class="cirle-b" height="60" width="60">
                <circle cx="30" cy="30" r="30" />
              </svg>
              <svg class="cirle-c" height="600" width="600">
                <circle cx="300" cy="300" r="300" />
              </svg>
              <svg class="cirle-d" height="60" width="60">
                <circle cx="30" cy="30" r="30" />
              </svg>
              <img src={trophy} alt="logo" />
              {/* Result description */}
              <big className="text-info ">You Scored</big>
              <h1
                className="display-1"
                style={{
                  position: "absolute",
                  fontWeight: 900,
                  left: 10,
                  top: 50,
                }}
              >
                {score * 10}%
              </h1>
              <div className="d-grid">
                <h3 style={{ position: "absolute", left: 20, top: 200 }}>
                  Your Score
                </h3>
                <h1
                  className="text-info display-1"
                  style={{
                    position: "absolute",
                    fontWeight: 800,
                    left: 10,
                    top: 230,
                  }}
                >
                  {score}/{questions.length}
                </h1>
                <h3 style={{ position: "absolute", left: 20, top: 370 }}>
                  Time Taken
                </h3>
                <h1
                  className="text-success display-1"
                  style={{
                    position: "absolute",
                    fontWeight: 800,
                    left: 10,
                    top: 400,
                  }}
                >
                  {timeTaken} <small>sec</small>
                </h1>
              </div>
            </div>
          </aside>

          <MDBBtn
            style={{ position: "absolute", left: 200, top: 600 }}
            rounded
            outline
            onClick={() => setShowAnswer(!showanswer)}
          >
            show Answer
          </MDBBtn>
          <MDBBtn
            style={{ position: "absolute", right: 200, top: 600 }}
            onClick={onStart}
            rounded
            color={score >= 7 ? "success" : "danger"}
          >
            {" "}
            take Quiz Again
          </MDBBtn>
           {/* Show Answer when button is clicked*/}
          {showanswer && (
            <ol className="alternating-colors">
              {questions.map((q, index) => (
                <li className="li" key={index}>
                  <strong>{q.question}</strong> - Correct answer: {q.answer}
                  {answers[index] === q.answer ? (
                    <p style={{ color: "green", fontSize: "small" }}>
                      {" "}
                      (Your answer: {answers[index]})
                    </p>
                  ) : (
                    <p style={{ color: "red", fontSize: "small" }}>
                      {" "}
                      (Your answer: {answers[index]})
                    </p>
                  )}
                </li>
              ))}
            </ol>
          )}
        </div>
      </MDBContainer>
    </>
  );
}

export default QuizResult;
