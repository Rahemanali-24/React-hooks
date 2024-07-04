import { useState } from "react";

export default function UseStateExample() {
  const [counter, setCounter] = useState(0);
  const [changePlaceHolder, setChangePlaceHolder] = useState();
  const increment = () => {
    setCounter(counter + 2);
  };

  function decrement() {
    setCounter(counter - 2);
  }

  function onChange(event) {
    let target = event.target.value;
    setChangePlaceHolder(target);
  }

  return (
    <>
      {counter}
      <button onClick={increment}>Increment</button>
      
      <button onClick={decrement}>Decrement</button>
      <br />
      <br />
      <input placeholder="ddsd" onChange={onChange} />
      <br />
      <h1> {changePlaceHolder}</h1>

      <br />
    </>
  );
}
