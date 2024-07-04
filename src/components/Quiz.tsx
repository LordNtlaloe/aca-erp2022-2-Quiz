
import { useState } from 'react';
import { QuizData } from '../data/QuizData';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [showScore, setShowScore] = useState<boolean>(false);

  const handleAnswerOptionClick = (isCorrect:boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {showScore ? (
        <div className="text-center text-xl font-bold">
          You scored {score} out of {QuizData.length}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-lg font-semibold">
            <span className="mr-2">Question {currentQuestion + 1}</span>/{QuizData.length}
          </div>
          <div className="text-xl">{QuizData[currentQuestion].Question}</div>
          <div className="space-y-2">
            {QuizData[currentQuestion].Options.map((option:any, index:any) => (
              <button
                key={index}
                className="block w-full bg-gray-200 p-2 rounded hover:bg-gray-300"
                onClick={() => handleAnswerOptionClick(option === QuizData[currentQuestion].Answer)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
