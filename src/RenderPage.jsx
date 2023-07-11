import { useState } from "react";
import questions from "./Data";

const RenderPage = () => {
  const [question, setQuestion] = useState(questions);
  const [infoShow, setInfoShow] = useState(false);

  const showInfo = () => {
    infoShow === true ? setInfoShow(false) : setInfoShow(true);
  };

  return (
    <>
      <div className="container">
        <h1>questions and info </h1>
        <div className="question-container">
          <ul>
            {question.map((item) => {
              return (
                <li key={item.id}>
                  <h5>{item.title}</h5>
                  <span>
                    <button onClick={showInfo}>{infoShow ? "+" : "-"}</button>
                  </span>
                  {infoShow && <p> {item.info}</p>}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RenderPage;
