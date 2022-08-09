import React, { useEffect, useState } from "react";
import "../Quiz/Quiz.scss";
import { getQuestion } from "../Axios/Axios.service";

const Quiz = () => {
  console.log();
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getQuestion();
      if (res.status === 200) {
        setQuestion(res.data);
        console.log(res.data.data);
      }
    }
    fetchData();
  }, []);

  // const [currentQuestion, setCurrentQuestion] = useState(0);

  // const handleAnswerOptionClick = () => {
  //   const nextQuestion = currentQuestion + 1;
  //   if (nextQuestion < question.length) {
  //     setCurrentQuestion(nextQuestion);
  //   }
  // };

  return (
    <>
      <div className="stepper-wrapper">
        <div className="stepper-item completed">
          <div className="step-counter">1</div>
        </div>
        <div className="stepper-item completed">
          <div className="step-counter">2</div>
        </div>
        <div className="stepper-item active">
          <div className="step-counter">3</div>
        </div>
        <div className="stepper-item">
          <div className="step-counter">4</div>
        </div>
        <div className="stepper-item">
          <div className="step-counter">5</div>
        </div>
      </div>
      <div className="box">
        {question?.data?.map((el, id) => (
          <>
            <div className="Title" key={el.id}>
              <p>{el.text}</p>
            </div>
            {el.answer.map((e, id) => (
              <div className="answer" key={id}>
                <button className="mini-tag" tabIndex="1">
                  <div>{e.context}</div>
                </button>
              </div>
            ))}
          </>
        ))}
      </div>

      <div className="foo">
        <div className="clock">60</div>

        <button
          className="next"
          // onClick={(answerOption) =>
          //   handleAnswerOptionClick(answerOption.isCorrect)
          // }
        >
          <span className="caret right" />
          <span>Next</span>
        </button>
        <button className="skip">
          <span className="caret right" />
          <span className="caret right" />
          <span>Skip</span>
        </button>
      </div>
    </>
  );
};

export default Quiz;
