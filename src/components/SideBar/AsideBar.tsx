import { FaSquarePhone } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoMdChatbubbles } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

export default function AsideBar() {
    return (
        <div className="w-16 bg-[#2D2D2D] flex flex-col h-screen justify-center items-center">
            <div className="flex flex-col ">
                <div className="p-2 text-4xl text-green-500 "><GoHomeFill /></div>
                <div className="p-2 mt-4 text-4xl"><IoMdChatbubbles /></div>
                <div className="p-2 mt-4 text-4xl"><FaSquarePhone /></div>
                <div className="p-2 mt-4 text-4xl"><IoSettingsOutline /></div>
            </div>
        </div>
    )
}
