import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Confetti from "react-confetti";
import trophy from "../trophy.svg";

function QuizResult({ questions, answers, score, timeTaken, onStart }) {
  return (
    <>
      {score >= 7 && <Confetti />}
      <MDBContainer fluid className="result">
        <div className="result">
          <h2 className="text-center text-success ">Quiz Result</h2>
          <div className="d-flex flex-column text-center">
            <img
              src={trophy}
              alt=""
              srcset=""
              className="img-fluid"
              width={30}
            />
            Your Score:
            <big
              className={
                score >= 7 ? "text-success display-2" : "text-danger display-2"
              }
            >
              {score} / {questions.length}
            </big>
            <br />
            <span className="text-info ">
              Time Taken: <big>{timeTaken}</big> seconds
            </span>
          </div>
          <MDBBtn
            onClick={onStart}
            rounded
            color={score >= 7 ? "success" : "danger"}
          >
            {" "}
            take Quiz Again
          </MDBBtn>
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
        </div>
      </MDBContainer>
    </>
  );
}

export default QuizResult;
