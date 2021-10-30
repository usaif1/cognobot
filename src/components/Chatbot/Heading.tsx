import React from "react";

//imports
import { Spacer } from "components/common";
import hello from "assets/hello.png";

const Heading: React.FC = () => {
  return (
    <div className="animate-fadein">
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
  );
};

export default Heading;
