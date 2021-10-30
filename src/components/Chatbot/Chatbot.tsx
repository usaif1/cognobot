//dependencies
import React from "react";

//imports
import { Spacer, RoundedIcon } from "components/common";
import hello from "assets/hello.png";
import robo from "assets/robo.png";

const Chatbot: React.FC = () => {
  return (
    <div className="w-3/12 h-chatbot sm:w-11/12 mx-auto mt-10">
      <div
        className="rounded-tr-2xl rounded-tl-2xl pl-14 pt-5 pb-12"
        style={{
          background:
            "linear-gradient(123.75deg, #F5821F 1.87%, #FF5C00 120.46%)",
        }}
      >
        <p className="text-left text-3xl text-white font-bold">IRIS</p>
        <Spacer className="h-3" />
        <div className="flex">
          <p className="text-left text-xl text-white font-bold">Hello</p>
          <img src={hello} alt="hello" className="h-6 w-6 ml-5" />
        </div>
        <Spacer className="h-3" />
        <p className="text-left text-lg text-white font-medium w-7/12">
          I am Iris, a Virtual Assistant How may I help you?
        </p>
        <Spacer className="h-3" />
        <RoundedIcon src={robo} size={16} iconSize={8} bgColor="orange2" />
      </div>
      <div className="h-2/3 border border-black rounded-br-2xl rounded-bl-2xl" />
    </div>
  );
};

export default Chatbot;
