import React from "react";
import headerImg from "../../assets/images/impressive-business-results.jpg";
import Title from "../Title/Title";
import "./questions.css";
import { questions } from "../../utils/dumyData";
import Star from "../Star/Star";
import { Link } from "react-router-dom";

const Questions = () => {
  function toggleHandler(e, id) {
    e.preventDefault();
    const pEle = document.querySelectorAll(".questions-text-item p");
    const itemsEle = document.querySelectorAll(".questions-text-item");
    const iEle = document.querySelectorAll(".questions-text-item i");
    
    if (!itemsEle[id - 1].classList.contains("active")) {
      pEle.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });
      iEle.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });
      itemsEle.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });
      pEle[id - 1].classList.toggle("active");
      itemsEle[id - 1].classList.toggle("active");
    } else {
      pEle[id - 1].classList.remove("active");
      itemsEle[id - 1].classList.remove("active");
    }
    if (itemsEle[id - 1].classList.contains("active")) {
      iEle[id - 1].classList = "fa-solid fa-angle-up";
    } else {
      iEle[id - 1].classList = "fa-solid fa-chevron-down";
    }
  }

  return (
    <>
      <div className="questions">
        <div className="container">
          <div className="questions-content d-flex">
            <div className="questions-left">
              <Star />
              <div className="questions-left-img">
                <img src={headerImg} alt="" />
              </div>
              <div className="go-question">
                <h2>Got Any Questions?</h2>
                <Link to="/contact">Ask Questions</Link>
              </div>
            </div>
            <div className="questions-right col-6">
              <Title
                h2={"Frequently Asked "}
                span={"Questions"}
                prgh={`Lorem lpsum is simply dummy text of the printing and typesetting industry, Lorem lpsum has
                been the industry's standard dummy text ever since the 1500s`}
              />
              <div className="questions-content-text-items">
                {questions.map((question) => (
                  <div
                    onClick={(e) => toggleHandler(e, question.id)}
                    className="questions-text-item"
                    key={question.id}
                  >
                    <h4>
                      {question.questions}
                      <i className="fa-solid fa-chevron-down"></i>
                    </h4>
                    <p>{question.res}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
