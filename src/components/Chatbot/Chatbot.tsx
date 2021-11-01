//dependencies
import React from "react";

//imports
import Heading from "./Heading";
import ChatForm from "./ChatForm";
import { Spacer, RoundedIcon } from "components/common";
import robo from "assets/robo.png";

const Chatbot: React.FC = () => {
  return (
    <div className="mx-auto mt-10 w-3/12 xl:w-5/12 2xl:w-4/12 h-chatbot lg:w-8/12 sm:w-11/12">
      <div
        className="rounded-tr-2xl rounded-tl-2xl pl-14 pt-5 pb-10 sm:pl-8"
        style={{
          background:
            "linear-gradient(123.75deg, #F5821F 1.87%, #FF5C00 120.46%)",
          boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Heading />
        <Spacer className="h-4" />
        <div className="animate-fadein" style={{ marginLeft: "-0.5rem" }}>
          <RoundedIcon src={robo} size={16} iconSize={8} bgColor="orange2" />
        </div>
      </div>
      <div
        className="h-2/3 rounded-br-2xl rounded-bl-2xl"
        style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.08)" }}
      >
        <Spacer className="h-4" />
        <div style={{ position: "relative", top: "-6rem" }}>
          <ChatForm />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
