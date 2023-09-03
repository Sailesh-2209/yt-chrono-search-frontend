import { BsBoxArrowUpRight } from "react-icons/bs"

export default function Header() {
    return (
        <div className="w-full p-6">
			<div className="flex flex-row gap-10">
                <div className="flex flex-row items-center gap-1">
                    <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-100 font-noto font-semibold hover:text-slate-400 duration-300"
                    >
                        About
                    </a>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <a 
                        href="https://github.com/Sailesh-2209/yt-chrono-search-frontend" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-100 font-noto font-semibold hover:text-slate-400 duration-300"
                    >
                        GitHub
                    </a>
                    <BsBoxArrowUpRight color="white" size="0.6em"/>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <a 
                        href="https://github.com/Sailesh-2209/yt-chrono-search-backend" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-100 font-noto font-semibold hover:text-slate-400 duration-300"
                    >
                        Server
                    </a>
                    <BsBoxArrowUpRight color="white" size="0.6em"/>
                </div>
			</div>
        </div>
    )
}