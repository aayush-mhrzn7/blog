import React, { useId } from "react";

function Select(
  { label, className = "", labelStyle = "", options = [], ...props },
  ref
) {
  const id = useId();
  return (
    <div>
      {label && (
        <label className={`${labelStyle}`} htmlFor={id}>
          {label}
        </label>
      )}
      <select id={id} className={`${className}`} {...props} ref={ref}>
        {options
          ? options.map((option) => (
              <option value={option} defaultValue="active" key={option}>
                {option}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
