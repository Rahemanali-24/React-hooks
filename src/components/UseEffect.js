import axios  from "axios";
import { useEffect, useState } from "react";

export default function UseEffectExample(){

    const [data,setData] = useState("");

     //primly use for api calls 
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
           
           setData(response.data[0].email);
           console.log("calling");
        });
    },[]);

    return <>
        {data}
    </>
}