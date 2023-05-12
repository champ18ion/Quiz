import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import Confetti from 'react-confetti'
import trophy from '../trophy.svg'
import retry from '../retry.svg'

function QuizResult({questions,answers,score,timeTaken,onStart}) {
  return (
     <>
   <MDBContainer fluid className='result'> 
    <div className='result'>
      {score>=7 && <Confetti/>} 
      <h2 className='text-center text-success '>Quiz Result</h2>
      <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
       {score>=7 ?<div class="ag-courses-item_bg"></div>:<div class="ag-courses-item_bg-fail"></div>} 

        <div class="ag-courses-item_title">
        <img src={score>=7 ? trophy : retry} alt="" className='img-fluid m-auto' width={200}/>
        <p>Your score is {score} out of {questions.length}.</p>
        </div>

        <div class="ag-courses-item_date-box">
          You took :
          <span class="ag-courses-item_date">
           &nbsp; {timeTaken} seconds
          </span>
        </div>
      </a>
    </div>
      <MDBBtn onClick={onStart} rounded color={score>=7?'success':'danger'}> take Quiz Again</MDBBtn>
      <ol className='alternating-colors'>
        {questions.map((q, index) => (
          <li className='li' key={index}>
            <strong>{q.question}</strong> - Correct answer: {q.answer}
            {answers[index] === q.answer ? (
              <p style={{ color: 'green', fontSize:'small'}}> (Your answer: {answers[index]})</p>
            ) : (
              <p style={{ color: 'red', fontSize:'small' }}> (Your answer: {answers[index]})</p>
            )}
          </li>
        ))}
      </ol>
    </div></MDBContainer>
    </>
  )
}

export default QuizResult