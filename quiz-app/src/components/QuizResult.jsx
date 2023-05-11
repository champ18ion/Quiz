import React from 'react'

function QuizResult({questions,answers,score,timeTaken}) {
  return (
    <div> <div>
    <h2>Quiz Result</h2>
    <p>Your score is {score} out of {questions.length}.</p>
    <p>{timeTaken}</p>
    <ul>
      {questions.map((q, index) => (
        <li key={index}>
          {q.question} - Correct answer: {q.answer}
          {answers[index] === q.answer ? (
            <span style={{ color: 'green' }}> (Your answer: {answers[index]})</span>
          ) : (
            <span style={{ color: 'red' }}> (Your answer: {answers[index]})</span>
          )}
        </li>
      ))}
    </ul>
  </div></div>
  )
}

export default QuizResult