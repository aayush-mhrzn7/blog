import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    type = "",
    className = "",
    placeholder = "",
    labelStyle = "",
    label = "",
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div>
      <label
        className={` font-primary block font-semibold text-xl ${labelStyle}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        id={id}
        {...props}
        className={` font-primary p-3  rounded-md ${className}`}
      />
    </div>
  );
});
export default Input;
