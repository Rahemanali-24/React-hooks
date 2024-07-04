import { useEffect, useLayoutEffect, useRef } from "react";

export default function UseLayoutEffectExample() {
  const inputRef = useRef(null);

  
  useEffect(() => {
    inputRef.current.value = "hello m";
  }, []);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);


  return (
    <>
      <div className="App">
        <input
          ref={inputRef}
          value="wow"
          style={{ width: 400, height: 100 }}
          readOnly
        />
      </div>
    </>
  );
}
