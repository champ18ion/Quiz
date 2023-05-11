import React, { useState } from 'react'

import QuizDetail from './components/QuizDetail';
import QuizAttempt from './components/QuizAttempt';


const App = () => {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Madrid"],
      answer: "Paris"
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      answer: "Jupiter"
    },
    {
      id: 3,
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
      answer: "Vatican City"
    },
    {
      id: 4,
      question: "Which river flows through Egypt?",
      options: ["Amazon", "Nile", "Mississippi", "Danube"],
      answer: "Nile"
    },
    {
      id: 5,
      question: "What is the largest ocean in the world?",
      options: ["Atlantic", "Arctic", "Indian", "Pacific"],
      answer: "Pacific"
    },
    {
      id: 6,
      question: "What is the most spoken language in the world?",
      options: ["English", "Chinese", "Spanish", "Hindi"],
      answer: "Chinese"
    },
    {
      id: 7,
      question: "What is the capital of Canada?",
      options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      answer: "Ottawa"
    },
    {
      id: 8,
      question: "What is the highest mountain in the world?",
      options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount Aconcagua"],
      answer: "Mount Everest"
    }
  ];
  
  const [attempt, setAttempt] = useState(false);
  const showQuiz=()=>{
    setAttempt(true);
  }

  return (
    <div>
      {attempt ? <QuizAttempt questions={questions}/> : <QuizDetail onStart={showQuiz} />}
    </div>
    
   
  );
};

export default App;
