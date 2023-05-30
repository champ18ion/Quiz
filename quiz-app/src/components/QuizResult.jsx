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
      <MDBContainer fluid className="d-flex flex-column justify-content-center align-items-center">
        <div>
              <img src={trophy} alt="logo" className="bg-image img-fluid" style={{height:'100vh', opacity:'0.5'}} />
              {/* Result description */}
              <h3 style={{ position: "absolute", right: 20, top: 200 }}>
                  Time Taken
                </h3>
              <h1
                className="display-1"
                style={{
                  position: "absolute",
                  fontWeight: 900,
                  right: 10,
                  top: 230,
                }}
              >
                {timeTaken} sec
              </h1>
              <div>
                <h3 style={{ position: "absolute", left: 20, top: 200 }}>
                  Your Score
                </h3>
                <h1
                  className={`display-1 ${score >= 7 ? "text-info" : "text-danger"}`}
                  style={{
                    position: "absolute",
                    fontWeight: 800,
                    left: 10,
                    top: 230,
                  }}
                >
                  {score}/{questions.length}
                </h1>
                
              </div>

          <MDBBtn
            style={{ position: "absolute", left: 200, top: 550 }}
            rounded
            outline
            onClick={() => setShowAnswer(!showanswer)}
          >
            show Answer
          </MDBBtn>
          <MDBBtn
            style={{ position: "absolute", right: 200, top: 550 }}
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
