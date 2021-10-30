import React from "react";

interface Props {
  src: string;
  size: number;
  bgColor: string;
  iconSize: number;
}

const RoundedIcon: React.FC<Props> = ({
  src,
  size = 14,
  bgColor,
  iconSize = 10,
}) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center w-${size} h-${size} bg-${bgColor} shadow-roundedicon`}
    >
      <img src={src} alt="rounded-icon" className={`w-${iconSize}`} />
    </div>
  );
};

export default RoundedIcon;
