import React from "react"
import ChatList from "./chat/ChatList"
import Navbar from "./navbar/Navbar"

export default function MainApp() {
  return (
    <div className="container bg-success">
      <Navbar />
      <ChatList />
    </div>
  )
}
