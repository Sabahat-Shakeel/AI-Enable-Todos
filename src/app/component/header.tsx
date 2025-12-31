import { BiDialpadAlt } from "react-icons/bi";
import {  DiGithubBadge } from "react-icons/di";

export default function Header(){
    return (
 
<div className="flex items-center justify-between py-2 px-2 sm:px-10 md:py-4 lg:px-20 bg-[#071402] ">
      <h1 className="text-lg sm:text-3xl md:text-3xl font-bold  underline underline-offset-6 decoration-[#125607] hover:cursor-pointer text-gray-100 hover:scale-90 " >
        Sabahat Todo App
        <BiDialpadAlt className="inline-block ml-2 mb-1 text-white" />
      </h1>

      <a
        href="https://github.com/sabahat-shakeel"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-[#0C2703] hover:bg-[#074300]  text-gray-100 font-bold rounded-md border border-[#125607] transition-colors duration-200 text-sm sm:text-base"
      >
        View on GitHub
        <DiGithubBadge className="inline-block ml-2 mb-1 size-6" />
      </a>
    </div>
    )
}