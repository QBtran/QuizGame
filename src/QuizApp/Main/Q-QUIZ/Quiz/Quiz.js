import React, { useEffect, useState, useRef } from "react";
import "../Quiz/Quiz.scss";
import { getQuestion } from "../Axios/Axios.service";

const Quiz = () => {
  const [question, setQuestion] = useState([123]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState("00");
  const Ref = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const res = await getQuestion();
      if (res.status === 200) {
        setQuestion(res.data);
        setLoading(false);
        console.log(res.data.data);
      }
    }
    fetchData();
  }, []);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const second = Math.floor((total / 1000) % 60);
    return { total, second };
  };

  const startTimer = (e) => {
    const { total, second } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer((second > 9 ? second : "0", second));
    }
  };

  const clearTimer = (e) => {
    setTimer("20");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    const deadLine = new Date();
    deadLine.setSeconds(deadLine.getSeconds() + 20);
    return deadLine;
  };

  const handleChangeQuestion = (number) => {
    if (currentQuestion === number) return;
    console.log(number);
    setCurrentQuestion(number);
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  if (loading === true) return;
  return (
    <>
      <div className="stepper-wrapper">
        {question.data.map((question, index) => (
          <div className="stepper-item completed">
            <div
              className="step-counter"
              onClick={() => handleChangeQuestion(index)}
            >
              {index + 1}
            </div>
          </div>
        ))}
      </div>
      <div className="box">
        <div className="Title">
          <p>{question.data[currentQuestion].text}</p>
        </div>
        {question.data[currentQuestion].answer.map((e, id) => (
          <div className="answer" key={id}>
            <button className="mini-tag" tabIndex="1">
              <div>{e.context}</div>
            </button>
          </div>
        ))}
      </div>

      <div className="foo">
        <div className="clock">{timer}</div>
        <button
          className="next"
          onClick={() => {
            handleChangeQuestion(currentQuestion + 1);
            onClickReset();
          }}
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
