import { useRef } from "react";
import Button from "./Button";


export default function UseImperativeExample(){
    
   const buttonRef = useRef(null);   
    return <>
            <div>
            <button onClick={()=>{buttonRef.current.alterToggle()}}>Button From Parent</button>
            <br/> <br/>
            <Button ref={buttonRef}/>
            </div>
    </>
}