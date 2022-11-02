import React from "react";

const Loading = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border text-success"
        role="status"
        style={{
          width: "10rem",
          height: "10rem",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
