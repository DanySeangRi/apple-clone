import React from "react";

const Button = ({ title, css }) => {
  return (
    <div
      className={`py-2 px-3.75  ${css} rounded-[50px] flex justify-center items-center`}
    >
      <button className="text-[14px] ">{title}</button>
    </div>
  );
};

export default Button;
