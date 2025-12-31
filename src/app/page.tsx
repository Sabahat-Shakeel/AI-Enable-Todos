"use client";

import { useEffect, useState } from "react";
import ChatWidget from "./component/ChatWidget";
import Footer from "./component/footer";
import Header from "./component/header"
import { DiMeteor } from "react-icons/di";
import { RiDeleteBinFill} from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { LuClipboardPen } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";


type Todo = {
  id: number;
  task: string;
  is_completed: boolean;
};

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");
  const [ping, setPing] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const fetchTodos = async () => {
    const res = await fetch(`${API_URL}/todos` || `${API_URL}/todos_agent/`);
    setTodos(await res.json());
  };

  useEffect(() => {
    fetchTodos();
  }, []);

const addTodo = async () => {
  if (!task.trim()) return;

  await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });

  setTask("");
  fetchTodos();
};

const updateTodo = async (id: number, newTask: string) => {
  if (!newTask.trim()) return;

  await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: newTask }),
  });

  fetchTodos(); 
};

  const toggleStatus = async (id: number, status: boolean) => {
    await fetch(`${API_URL}/todos/${id}/status?is_completed=${status}`, {
      method: "PATCH",
    });
    fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });
    fetchTodos();
  };
  
   return (
   <div>
    <Header/>
  <main className="min-h-screen bg-linear-to-t from-[#001E1E] to-[#090804] px-4 sm:px-6 lg:px-10 py-8 text-white font-sans ">
    {/* Heading */}
    <header className="text-center mb-16 mt-11  ">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3   ">
        Welcome to Todos App
        <DiMeteor  className="inline-block ml-2 mb-1" />

      </h1>
      <p className="text-sm sm:text-base  max-w-xl mx-auto leading-relaxed bg-gradient-to-r from-gray-500 via-gray-300 to-slate-400 bg-clip-text text-transparent">
        Easily manage your tasks and boost productivity. Add new todos, mark them complete, and keep track of everything in one place.
      </p>
    </header>

    {/* Add Task */}
    <div className="max-w-xl mx-auto mb-5 bg-[#121112] border border-slate-400/60 rounded-2xl p-4 sm:p-6 shadow-lg">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">
        Add New Task
        <LuClipboardPen className="inline-block ml-2 mb-1 text-xl mt-1 text-gray-200" />
      </h2>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          className="flex-1 px-4 py-3 rounded-xl bg-[#001E1E] border border-slate-400/60 text-white outline-none focus:ring-2 focus:ring-gray-700"
        />

        <button
          onClick={addTodo}
          className="px-5 py-3 rounded-xl bg-blue-800 hover:bg-[#074300] transition font-semibold hover:text-white/80"
        >
          Add Task
        </button>
      </div>
    </div>

    {/* Todos List */}
    <div className=" max-w-xl mx-auto lg:mb-12 bg-[#121112] border border-slate-400/60 rounded-2xl p-4 sm:p-6 shadow-lg mt-11">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 flex  "  >
         Your Todos 
         < FaTasks className="inline-block ml-2 mb-1 text-xl mt-1 text-gray-200" />
         </h2>

       

      <ul className="space-y-7">
        {todos.map((t) => (
          <li
            key={t.id}
            className="z-20 flex flex-col gap-3 p-4 bg-[#020202] border border-slate-400/60 rounded-xl"
          >
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={t.is_completed}
                onChange={(e) => toggleStatus(t.id, e.target.checked)}
                className="w-5 h-5 accent-[#125607]"
              />
              <span
                className={`text-base break-words ${
                  t.is_completed 
                    ?  "line-through text-slate-500  " 
                    : "text-white text-xl  "
                }`}
              >
                {t.task}
              </span>
            </label>

            <div className="flex items-end justify-end gap-3 ">
              <button
                onClick={() => {
                  const newTask = prompt("Edit your task:", t.task);
                  if (newTask?.trim()) updateTodo(t.id, newTask.trim());
                }}
                className="flex  px-3 mt-2 py-1 rounded-lg bg-[#0C2703] hover:bg-[#074300] transition font-semibold"
              >
                Edit <FaUserEdit className ="inline ml-2 mb-1 text-xl text-white/80" />

              </button>

              <button
                onClick={() => deleteTodo(t.id)}
                className="flex-1 "
              > 
              <div className="flex ">
                <RiDeleteBinFill
                onClick={() => {
                  setPing(true);
                  setTimeout(() => setPing(false), 500);
                }}
                className={`text-red-600 shadow-2xs shadow-red-700 text-4xl cursor-pointer 
                  ${ping ? "animate-ping" : ""}`}
                  />
                  </div>
                </button>
              </div>
          </li>
      ))}
      </ul>
    </div>

    <ChatWidget onActionComplete={fetchTodos} />
   
    
  </main>
        <div className = "bg-[#071402] py-2" >
      <Footer/>
    </div>
  </div>
);
}