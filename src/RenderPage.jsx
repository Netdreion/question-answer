import { useState } from "react";
import questions from "./Data";

const RenderPage = () => {
  const [question, setQuestion] = useState(questions);

  return (
    <>
      <div className="container">
        <h1>questions and info </h1>
        <div className="question-container">
          <ul>
            {question.map((item) => {
              return (
                <li key={question.id}>
                  <h5>
                    {item.title}
                    <p> {item.info}</p>
                  </h5>
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
