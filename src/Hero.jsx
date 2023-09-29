export default function Hero() {
    return (
        <div 
            className="flex flex-col items-center justify-center mt-10 gap-5 2xl:flex-row 2xl:w-5/6 2xl:p-0 2xl:gap-0 2xl:mt-24 xl:flex-row xl:w-5/6 xl:p-0 xl:gap-0 xl:mt-24 lg:flex-row lg:w-5/6 lg:p-0 lg:gap-24 lg:mt-24 md:flex-row md:w-full md:p-5 md:gap-10 md:mt-16 sm:flex-row sm:w-full sm:p-2 sm:gap-2 sm:mt-10"
        >
            <div className="flex md:flex-2 flex-row items-center justify-center 2xl:justify-center 2xl:mx-24 xl:justify-center xl:mx-20 xl:min-w-[300px] lg:justify-center lg:min-w-[300px] md:justify-start md:min-w-[240px] sm:justify-center sm:mx-10 pl-20">
                <div 
                    className="rounded-full 2xl:ml-20 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-5 h-2 w-2 bg-transparent shadow-[0_0_175px_70px_rgba(255,0,0,100)] 2xl:shadow-[0_0_250px_100px_rgba(255,0,0,100)] xl:shadow-[0_0_250px_100px_rgba(255,0,0,100)] lg:shadow-[0_0_250px_100px_rgba(255,0,0,100)] md:shadow-[0_0_200px_80px_rgba(255,0,0,100)] sm:shadow-[0_0_175px_70px_rgba(255,0,0,100)]"
                ></div>
                <div className="-ml-20">
                    <img 
                        src="/src/assets/logo.svg" 
                        className="2xl:w-[250px] 2xl:h-[250px] xl:w-[250px] xl:h-[250px] lg:w-[200px] lg:h-[200px] md:w-[180px] md:h-[180px] sm:w-[150px] sm:h-[150px]"
                    ></img>
                </div>
            </div>
            <div className="flex flex-col p-4 items-start gap-3 2xl:gap-10 2xl:p-0 xl:gap-10 xl:p-0 lg:gap-10 lg:p-0 md:gap-6 md:p-0 md:pr-10 sm:gap-5 sm:p-0 2xl:items-center xl:items-center lg:items-center md:items-center sm:items-start">
                <div>
                    <p 
                        className="2xl:text-5xl 2xl:whitespace-nowrap xl:text-5xl xl:whitespace-nowrap lg:text-4xl lg:whitespace-nowrap md:text-3xl md:whitespace-nowrap sm:text-xl sm:whitespace-nowrap text-5xl font-black text-slate-50"
                    >
                        YouTube Chronological Search
                    </p>
                </div>
                <div>
                    <p 
                        className="text-md 2xl:text-xl xl:text-xl lg:text-md md:text-sm sm:text-xs md:whitespace-nowrap font-semibold text-slate-300"
                    >
                        A tool to search for youtube videos in order of their publishing dates.
                    </p>
                </div>
                <a href="https://github.com/Sailesh-2209/yt-chrono-search-frontend" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center bg-slate-700 w-fit gap-5 px-3 py-2 rounded-lg">
                        <div>
                            <img src="/src/assets/github-mark-white.png" width="20px" height="20px"/>
                        </div>
                        <div>
                            <p className="text-slate-50 sm:text-sm">Star On GitHub</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}