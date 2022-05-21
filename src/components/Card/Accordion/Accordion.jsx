import React, { useState } from "react";
import arrow from "../../../images/icon-arrow-down.svg";
import "./Accordion.css";


function Accordion(props) {

  const data = [
    {
      question: "How many team members can I invite?",
      answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    },
    {
      question: "What is the maximum file upload size?",
      answer: "No more than 2GB. All files in your account must fit your allotted storage space"
    },
    {
      question: "How do I reset my password?",
      answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes! Send us a message and we’ll process your request no questions asked."
    },
    {
      question: "Do you provide additional support?",
      answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    }
  ]

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <>
      {data.map((item, i) => (
        <section className="tab">
          <section className="title" onClick={() => toggle(i)}>
            <button>{item.question}</button>
            <div>
              <img className={selected === i ? "arrow_active" : "arrow"} src={arrow}/>
            </div>
          </section>
          <section className="answer_cont">
            <p className={selected === i ? "content_active" : "content"}>{item.answer}</p>
          </section>
          <hr/>
        </section>
      ))}
    </>
  )
}

export default Accordion;