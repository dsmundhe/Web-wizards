import React, { useState } from 'react';
import '../style/Quiz.css';

const Quiz = () => {
  const questions = [
    {
      questionText: "What does the 'M' in MERN stack stand for?",
      answerOptions: [
        { answerText: "MongoDB", isCorrect: true },
        { answerText: "MySQL", isCorrect: false },
        { answerText: "MariaDB", isCorrect: false },
        { answerText: "Mongoose", isCorrect: false },
      ],
    },
    {
      questionText: "Which framework is represented by the 'E' in MERN?",
      answerOptions: [
        { answerText: "Ember.js", isCorrect: false },
        { answerText: "Express.js", isCorrect: true },
        { answerText: "Electron", isCorrect: false },
        { answerText: "EJS", isCorrect: false },
      ],
    },
    {
      questionText: "What is used as the front-end library in the MERN stack?",
      answerOptions: [
        { answerText: "Angular", isCorrect: false },
        { answerText: "Vue.js", isCorrect: false },
        { answerText: "React.js", isCorrect: true },
        { answerText: "Svelte", isCorrect: false },
      ],
    },
    {
      questionText: "Which database is typically used in the MERN stack?",
      answerOptions: [
        { answerText: "PostgreSQL", isCorrect: false },
        { answerText: "MongoDB", isCorrect: true },
        { answerText: "SQLite", isCorrect: false },
        { answerText: "Cassandra", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is a NoSQL database?",
      answerOptions: [
        { answerText: "MongoDB", isCorrect: true },
        { answerText: "MySQL", isCorrect: false },
        { answerText: "SQL Server", isCorrect: false },
        { answerText: "Oracle", isCorrect: false },
      ],
    },
    {
      questionText: "What does Node.js allow you to do?",
      answerOptions: [
        { answerText: "Write server-side code in JavaScript", isCorrect: true },
        { answerText: "Write CSS code", isCorrect: false },
        { answerText: "Write SQL queries", isCorrect: false },
        { answerText: "Create mobile apps", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is a popular MongoDB ODM?",
      answerOptions: [
        { answerText: "Mongoose", isCorrect: true },
        { answerText: "Sequelize", isCorrect: false },
        { answerText: "TypeORM", isCorrect: false },
        { answerText: "Prisma", isCorrect: false },
      ],
    },
    {
      questionText: "In Express.js, which method is used to create a route?",
      answerOptions: [
        { answerText: "app.get()", isCorrect: true },
        { answerText: "app.render()", isCorrect: false },
        { answerText: "app.createRoute()", isCorrect: false },
        { answerText: "app.route()", isCorrect: false },
      ],
    },
    {
      questionText: "Which command is used to start a React application?",
      answerOptions: [
        { answerText: "npm start", isCorrect: true },
        { answerText: "npm run", isCorrect: false },
        { answerText: "npm serve", isCorrect: false },
        { answerText: "npm build", isCorrect: false },
      ],
    },
    {
      questionText: "What is the default port used by MongoDB?",
      answerOptions: [
        { answerText: "3306", isCorrect: false },
        { answerText: "5432", isCorrect: false },
        { answerText: "27017", isCorrect: true },
        { answerText: "8080", isCorrect: false },
      ],
    },
  ];

  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result-section">
          <h2>Quiz Completed</h2>
          <p>You scored {score} out of {questions.length}</p>
        </div>
      ) : (
        <div className="questions-container">
          {questions.map((question, index) => (
            <div key={index} className="question-section">
              <div className="question-text">{question.questionText}</div>
              <div className="answer-section">
                {question.answerOptions.map((answerOption, optionIndex) => (
                  <label key={optionIndex} className="answer-option">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                    />
                    {answerOption.answerText}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleSubmit} className="submit-button">Submit Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
