//dependencies
import React from "react";

//imports
import Heading from "./Heading";
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
        }}
      >
        <Heading />
        <Spacer className="h-4" />
        <div className="animate-fadein">
          <RoundedIcon src={robo} size={16} iconSize={8} bgColor="orange2" />
        </div>
      </div>
      <div className="h-2/3 border border-black rounded-br-2xl rounded-bl-2xl" />
    </div>
  );
};

export default Chatbot;
