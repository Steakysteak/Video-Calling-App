'use client'
import { useSocket } from "@/context/SocketProvider";
import { ReactEventHandler, useState } from "react";

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const socket: any = useSocket()

  const handleSubmit: ReactEventHandler = (e) => {
    e.preventDefault()
    if(socket){
        socket.emit('room:join', {email, room})
        console.log(email,room, "Form Values")
    }else {

    }
  }


  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Id</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="room">Room Id Number</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default Lobby;
