//dependencies
import React from "react";

//imports
import { Spacer } from "components/common";
import hello from "assets/hello.png";

const Chatbot: React.FC = () => {
  return (
    <div className="w-3/12 h-chatbot sm:w-11/12 mx-auto mt-10">
      <div className="bg-gradient-to-r from-orange1 to-orange2 h-1/3 rounded-tr-2xl rounded-tl-2xl pl-12 pt-5">
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
      </div>
      <div className="h-2/3 border border-black rounded-br-2xl rounded-bl-2xl" />
    </div>
  );
};

export default Chatbot;
