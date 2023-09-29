/* eslint-disable react/prop-types */

import { VideosSkeleton } from "./Skeletons";
import { useRef, useEffect } from "react";
import { formatDate, formatNumber } from "./helpers";

export default function Videos(props) {
    const {
        showResults,
        metadata,
        videosList,
        isVideosLoading,
        isVideosAvailable,
    } = props;

    const scrollToRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (scrollToRef.current) {
            const container = containerRef.current;
            const element = scrollToRef.current;
            container.scrollTo({ top: (element.offsetTop / 2) + (element.clientHeight / 2), behaviour: 'smooth' });
        }
    }, [scrollToRef, videosList])

    if (showResults) {
        if (isVideosLoading) {
            return (
                <div className="mt-20 mb-20 w-5/6 flex items-center justify-center">
                    <VideosSkeleton />
                </div>
            )
        } else {
            if (isVideosAvailable) {
                return (
                    <div className="bg-slate-950 rounded-xl w-11/12 p-2 flex flex-col mb-20 max-h-[500px] overflow-auto custom-scrollbar 2xl:w-2/3 2xl:p-5 xl:w-2/3 xl:p-5 lg:w-2/3 lg:p-5 md:w-2/3 md:p-5 sm:w-4/5 sm:p-5" ref={containerRef}>
                        {videosList.map((video) => {
                            return (
                            <a 
                                key={video.VideoId} 
                                href={`https://youtube.com/watch/?v=${video.VideoId}`} 
                                target="_blank" rel="noopener noreferrer" 
                                ref={video.VideoId == metadata.VideoId ? scrollToRef : null}
                            >
                                <div 
                                    className={"flex flex-row gap-2 2xl:gap-12 xl:gap-12 lg:gap-12 md:gap-12 sm:gap-8 transition-colors ease-linear duration-300 p-2 rounded-lg" + (video.VideoId == metadata.VideoId ? "" : " hover:bg-slate-900")}
                                    style={
                                        {
                                            backgroundColor: video.VideoId == metadata.VideoId ? 'rgba(255, 255, 0, 0.15)' : '',
                                        }
                                    }
                                >
                                    <div className="flex min-w-[120px] 2xl:min-w-[160px] xl:min-w-[160px] lg:min-w-[160px] md:min-w-[160px] sm:min-w-[160px] justify-center items-center rounded-md">
                                        <img 
                                            src={video.VideoThumbnail}
                                            alt={video.VideoTitle}
                                            className="rounded-md h-[90px] w-[120px] 2xl:h-[120px] 2xl:w-[160px] xl:h-[120px] xl:w-[160px] lg:h-[120px] lg:w-[160px] md:h-[120px] md:w-[160px] sm:h-[120px] sm:w-[160px]"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center gap-0 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-2">
                                        <p className="text-slate-50 text-sm font-semibold whitespace-pre-line overflow-hidden">{video.VideoTitle}</p>
                                        <p className="text-slate-50 text-xs font-medium">
                                            <span className="font-medium text-slate-300">Published On</span> {formatDate(video.PublishedAt)}
                                        </p>
                                        <p className="text-xs font-medium text-slate-200">
                                            {formatNumber(video.ViewCount)} views
                                        </p>
                                    </div>
                                </div>
                            </a>
                        )})}
                    </div>
                )
            } else {
                return <></>
            }
        }
    } else {
        return <></>
    }
}