import React ,{useEffect,useState} from 'react'
import  io from "socket.io-client"

export const Chat=()=> {
    const [message,setMesage]=useState()
    const [room,setRoom]=useState()
    const [messages,setMessages]=useState([])
    const[isJioned,setIsJioned]=useState(false)
    const socket= io ("https://dental-clinic-m.onrender.com",{transports:["WebSocket"]})
    
    function send(){
        socket.emit("message",message,room)
    }
    return (
    <div>
        <div>
         <input value={room} type= "text"
         placeholder='Enter Room id ' onChange={(e)=>setRoom(e.target.value)}/>
         <button onClick={send}>Jion</button>
         </div>
         <input value={room} type= "text"
         placeholder='Enter message' onChange={(e)=>setRoom(e.target.value)}/>
         <button onClick={send}>Send</button>
    </div>
   
  )
}
export default Chat;