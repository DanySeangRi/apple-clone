import React from "react";

const Button = ({ title, css }) => {
  return (
    <div
      className={`py-1.75 px-3.75  lg:px-5.25 lg:py-2.75 ${css} rounded-[50px] flex justify-center items-center`}
    >
      <button className="text-[14px] lg:text-[16px]">{title}</button>
    </div>
  );
};

export default Button;
