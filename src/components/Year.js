import React from "react";

const Year = (props) => {
  const [year, setYear] = React.useState(props.initialValue);
  const minus = () => setYear(year - 1);
  const plus = () => setYear(year + 1);
  return (
    <span>
      <button onClick={minus}>-</button>
      {year}
      <button onClick={plus}>+</button>
    </span>
  );
};

export default Year;
