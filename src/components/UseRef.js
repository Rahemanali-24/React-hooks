import { useRef } from "react";

export default function UseRefExample() {
    const inputRef = useRef(null);

    const onClick = ()=>{
        // console.log(inputRef.current.value);
        inputRef.current.value ="";
    }
    return <>
        <h2>
            Technic
        </h2>

        <input type="text" placeholder="example" ref={inputRef}/>
        <br/>
        <br/>
        
        <button onClick={onClick}>Change Name</button>
      

    </>
}