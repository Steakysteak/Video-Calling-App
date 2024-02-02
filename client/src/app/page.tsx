"use client";
import { SocketProvider } from "@/context/SocketProvider";
import Lobby from "@/screens/Lobby";

export default function Home() {
  return (
    <>
      <SocketProvider>
        <Lobby />
      </SocketProvider>
    </>
  );
}
