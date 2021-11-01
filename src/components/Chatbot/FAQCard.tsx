//dependencies
import React from "react";

//imports
import { OrangeBullet } from "components/common";

interface Props {
  faq: string;
}

const FaqCard: React.FC<Props> = ({ faq }) => {
  return (
    <div
      className="flex items-center px-1.5 py-4 mb-2.5"
      style={{
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.05)",
        border: "1px solid #E1E1E1",
        borderRadius: "8px",
      }}
    >
      <OrangeBullet />
      <p className="text-xs ml-1.5">{faq}</p>
    </div>
  );
};

export default FaqCard;
