import React from "react";

interface Props {
  className: string;
}

const Spacer: React.FC<Props> = ({ className = "h-px" }) => {
  return <div className={className} />;
};

export default Spacer;
