export default function Hero() {
    return (
        <div className="flex flex-row items-center justify-center w-10/12 mt-24">
            <div className="flex flex-1 flex-row items-center justify-center">
                <div className="rounded-full ml-20 h-2 w-2 bg-transparent shadow-[0_0_250px_100px_rgba(255,0,0,100)]" ></div>
                <div className="-ml-20">
                    <img src="/src/assets/logo.svg"></img>
                </div>
            </div>
            <div className="flex flex-2 flex-col gap-10">
                <div>
                    <p className="text-5xl font-black text-slate-50">YouTube Chronologial Search</p>
                </div>
                <div>
                    <p className="text-xl font-semibold text-slate-300">A tool to search for youtube videos in order of their publishing dates.</p>
                </div>
                <a href="https://github.com/Sailesh-2209/yt-chrono-search-frontend" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center bg-slate-700 w-fit gap-5 px-3 py-2 rounded-lg">
                        <div>
                            <img src="/src/assets/github-mark-white.png" width="20px" height="20px"/>
                        </div>
                        <div>
                            <p className="text-slate-50">Star On GitHub</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}