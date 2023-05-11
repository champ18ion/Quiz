import React from 'react';


const QuizDetail = ({onStart}) => {
    
  return (
    <div>
      <h2>Quiz Detail</h2>
      <p>This is a multiple-choice quiz. You have 1 minute to complete the quiz.</p>
      <button onClick={()=>onStart()}>Start Quiz</button>
    </div>
  );
};

export default QuizDetail;
