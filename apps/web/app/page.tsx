'use client'
import { useState } from "react";
import { useSocket } from "../context/SockerProvider"
import classes from "./page.module.css"

export default function Page(){

  const {sendMessage} =useSocket();
  const [message,setMessage]=useState('');

  return (
    <div className={classes.container}>
    <div className={classes.innerContainer}>
      <h1 className={classes.heading}>All messages will appear here...</h1>
    </div>
    <div className={classes["inner-container"]}>
      <input className={`${classes["message-input"]} ${classes["flex-input"]}`} placeholder="Message..." 
       value={message}
       onChange={(e)=>setMessage(e.target.value)}
      />
      <button className={`${classes["button"]} ${classes["margin-left"]}`}
      onClick={()=>sendMessage(message)}
      >Send</button>
    </div>
  </div>
  )
}