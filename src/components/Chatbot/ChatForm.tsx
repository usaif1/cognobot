//dependencies
import React from "react";

//imports
import chaticon from "assets/chaticon.png";
import robo from "assets/robo.png";
import FaqCard from "./FAQCard";
import { Spacer, RoundedIcon } from "components/common";
import { faqs } from "./FAQs";
import question from "assets/question.png";

const ChatForm: React.FC = () => {
  return (
    <div
      className="text-left px-7 flex flex-col justify-center w-11/12 mx-auto pt-12 pb-5"
      style={{
        border: "1px solid #E4E4E4",
        boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.05)",
        borderRadius: "8px",
        background: "white",
      }}
    >
      <div style={{ position: "absolute", top: "-2rem" }}>
        <RoundedIcon src={robo} size={16} iconSize={8} bgColor="orange2" />
      </div>
      <div className="flex">
        <p className="text-sm font-medium">Frequently Asked Questions</p>
        <img src={question} alt="question" className="w-5 h-5 ml-2" />
      </div>
      <Spacer className="h-2.5" />
      {faqs.map((faq) => {
        return <FaqCard key={faq.id} faq={faq.question} />;
      })}
      <Spacer className="h-7" />
      <button
        className="rounded-full flex items-center justify-center px-10 py-3 w-10/12 mx-auto"
        style={{ border: "1px solid #D1D1D1" }}
      >
        <img src={chaticon} className="w-3.5 mr-1.5" alt="asd" />
        Start a New Conversation
      </button>
    </div>
  );
};

export default ChatForm;
