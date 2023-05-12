import React, { useState } from 'react'
import QuizDetail from './components/QuizDetail';
import QuizAttempt from './components/QuizAttempt';
import Header from './components/Header';
import { questions } from './questions';

import { MDBContainer } from 'mdb-react-ui-kit';

const App = () => {
  
  const [attempt, setAttempt] = useState(false);
  const showQuiz=()=>{
    setAttempt(true);
  }
  const hideQuiz=()=>{
    setAttempt(false);
  }

  return (
    <MDBContainer fluid>
      <Header/>
      {attempt ? <QuizAttempt questions={questions} onStart={hideQuiz} duration={60}/> : <QuizDetail onStart={showQuiz} />}
    </MDBContainer>
    
   
  );
};

export default App;
