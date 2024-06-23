import React from "react";

function Button(
  {
    type = "",
    classname = "",

    ...props
  },
  ref
) {
  return (
    <div>
      <button
        type={type}
        ref={ref}
        className={` font-primary p-3 rounded-md ${classname} `}
        {...props}
      ></button>
    </div>
  );
}

export default React.forwardRef(Button);
