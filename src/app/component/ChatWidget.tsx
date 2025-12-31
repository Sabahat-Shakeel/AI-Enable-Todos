"use client";

import { useState } from "react";
import { DiProlog } from "react-icons/di";
import AvailabilityText from "./style"

export default function ChatWidget({
  onActionComplete,
}: {
  onActionComplete: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

 const sendMessage = async () => {
  if (!input.trim()) return;

  setMessages((m) => [...m, "💁🏻‍♀️: " + input]);

  const res = await fetch(`${API_URL}/todos_agent/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: "user1",
      text: input
    }),
  });

  const data = await res.json();
  setMessages((m) => [...m, "🐣: " + data.reply]);
  setInput("");
  onActionComplete();
};


  return (
    <>
  <button
    onClick={() => setOpen(!open)}
    
    className="fixed bottom-5 right-5 bg-[#0C2703] hover:bg-[#074300] border-2 border-[#125607]  rounded-full w-15 h-15 font-bold cursor-pointer flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
  >
     <DiProlog size={32} color="#FFFFFF"  className="z-30"/>
     
  </button>
  <div className="fixed bottom-20 p-2  right-1">  <AvailabilityText  /></div>
  

  {open && (
    <div className="fixed lg:bottom-20 bottom-25 lg:right-44 lg:w-8/12 sm:w-15 right-1 sm:h-15 lg:min-h-4/5  bg-[#001E1E] border border-[#125607] rounded-2xl p-1 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
      
      <div className="text-center mb-1">
        <h1 className="text-[18px] font-bold text-white mb-2">
          Add Todos With Agent
        </h1>
        <p className="text-[14px] text-[#A0A0A0] leading-[1.4]">
          you can add tasks by typing add task or delete tasks by typing delete task
        </p>
      </div>

      <div className="h-[320px] overflow-y-auto mb-2.5 bg-[#121112] border-2 border-black rounded-[10px] p-2 scrollbar-thin">
        {messages.map((m, i) => (
          <div
            key={i}
            className="mb-1.5 text-white bg-[#00312f] m-4 p-2 rounded-lg"
          >
            {m}
          </div>
        ))}
      </div>

      <div className="flex gap-1.5">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="add task / updated task_id / delete task 1"
          className="flex-1 p-2 border-2 border-black rounded-lg bg-[#121112] text-white outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-[#0C2703] hover:bg-[#074300] border-[#125607]  border rounded-lg px-3 cursor-pointer text-white font-bold"
        >
          Send
        </button>
      </div>
    </div>
   )}
 </>
);
}
