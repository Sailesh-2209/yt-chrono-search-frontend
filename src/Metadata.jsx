/* eslint-disable react/prop-types */

import { MetadataSkeleton } from "./Skeletons"
import { formatDate, formatNumber } from "./helpers";

export default function Metadata(props) {
    const { 
        showResults,
        metadata,
        isMetadataLoading,
        isMetadataAvailable
    } = props;

    if (showResults) {
        if (isMetadataLoading) {
            return (
                <div className="mt-20 mb-20 w-4/6">
                    <MetadataSkeleton />
                </div>
            )
        } else {
            if (isMetadataAvailable) {
                return (
                    <div className="flex flex-col items-start justify-center mt-2 mb-10 px-5 gap-5 2xl:flex-row 2xl:items-center 2xl:gap-10 2xl:w-2/3 2xl:mt-20 2xl:mb-20 2xl:px-0 xl:flex-row xl:items-center xl:gap-5 xl:w-3/4 xl:mt-20 xl:mb-20 xl:px-0 lg:flex-row lg:items-center lg:gap-5 lg:w-3/4 lg:mt-15 lg:mb-15 lg:px-0 md:flex-row md:items-center md:gap-2 md:w-4/5 md:mt-12 md:mb-12 md:px-0 sm:flex-row sm:items-center sm:gap-2 sm:w-4/5 sm:mt-10 sm:mb-10 sm:px-0">
                        {/* Channel Pane */}
                        <div className="flex flex-row flex-1 items-center justify-start gap-4 2xl:gap-20 xl:gap-20 lg:gap-10 md:gap-4 sm:gap-2">
                            <div className="flex flex-2">
                                <a href={`https://youtube.com/${metadata.ChannelCustomUrl}`} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src={metadata.ChannelThumbnail}
                                        className="rounded-full h-[120px] w-[120px] 2xl:h-[150px] 2xl:w-[150px] xl:h-[150px] xl:w-[150px] lg:h-[150px] lg:w-[150px] md:h-[120px] md:w-[120px] sm:h-[90px] sm:w-[90px]"
                                        alt={metadata.ChannelTitle} />
                                </a>
                            </div>
                            <div className="flex flex-1 flex-col justify-start items-start gap-0 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-2">
                                <div>
                                    <a href={`https://youtube.com/${metadata.ChannelCustomUrl}`} target="_blank" rel="noopener noreferrer">
                                        <p className="font-bold text-slate-50 text-lg 2xl:text-xl xl:text-xl lg:text-xl md:text-base sm:text-base">{metadata.ChannelTitle}</p>
                                    </a>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-200 text-xs 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs">
                                        {formatNumber(metadata.SubscriberCount)} Subscribers
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-200 text-xs 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs">
                                        {metadata.VideoCount} Videos
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Video Pane */}
                        <div className="flex flex-row flex-1 items-center justify-start gap-4 2xl:gap-20 xl:gap-20 lg:gap-10 md:gap-4 sm:gap-2">
                            <div className="flex flex-2">
                                <a href={`https://youtube.com/watch/?v=${metadata.VideoId}`} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src={metadata.VideoThumbnail} 
                                        className="h-[90px] w-[120px] 2xl:h-[150px] 2xl:w-[200px] xl:h-[150px] xl:w-[200px] lg:h-[150px] lg:w-[200px] md:h-[120px] md:w-[160px] sm:h-[90px] sm:w-[120px]"
                                        alt={metadata.VideoTitle}
                                    />
                                </a>
                            </div>
                            <div className="flex flex-1 flex-col gap-0 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-2">
                                <div>
                                    <a href={`https://youtube.com/watch/?v=${metadata.VideoId}`} target="_blank" rel="noopener noreferrer">
                                        <p className="font-semibold text-slate-100 text-md 2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-sm">
                                            {metadata.VideoTitle}
                                        </p>
                                    </a>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-200 text-xs 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                                        <span className="font-medium text-slate-300">Published On</span> {formatDate(metadata.PublishedAt)}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-200 text-xs 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                                        {formatNumber(metadata.ViewCount)} views
                                    </p>
                                </div>
                            </div>
                        </div>
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
