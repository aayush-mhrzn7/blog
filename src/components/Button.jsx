import React from "react";

function Button({
  type = "",
  classname = "",

  ...props
}) {
  return (
    <div>
      <button
        type={type}
        className={` font-primary p-3 rounded-md ${classname} `}
        {...props}
      ></button>
    </div>
  );
}

export default Button;
