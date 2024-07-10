import React, { useId, useState } from "react";

function Select(
  { label, className = "", labelStyle = "", options = [], ...props },
  ref
) {
  const [state, setState] = useState();
  const id = useId();
  return (
    <div>
      {label && (
        <label className={`${labelStyle}`} htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        className={`${className}`}
        value={state}
        {...props}
        ref={ref}
      >
        {options
          ? options.map((option) => (
              <option
                value={option}
                onChange={(e) => setState(e.target.value)}
                defaultValue="active"
                key={option}
              >
                {option}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
