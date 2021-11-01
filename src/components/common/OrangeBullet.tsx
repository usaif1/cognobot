import React from "react";

const OrangeBullet: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 118, 0, 0.15)",
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#FF7600",
          width: "7px",
          height: "7px",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default OrangeBullet;
