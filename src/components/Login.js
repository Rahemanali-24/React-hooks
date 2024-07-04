import { useContext } from "react";
import { AppContext } from "./UseContext";
export default function Login(){
    const {setUserName} = useContext(AppContext);

    return <>

        <input onChange={(event)=>{
            setUserName(event.target.value);
        }}
        />
    </>
}