/* eslint-disable react/prop-types */

import { MetadataSkeleton } from "./Skeletons"
import { formatNumber } from "./helpers";

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
                    <div className="flex flex-row items-center justify-center gap-10 mt-20 mb-20 w-4/6">
                        {/* Channel Pane */}
                        <div className="flex flex-row flex-1 items-center justify-center gap-10">
                            <div>
                                <img src={metadata.ChannelThumbnail} className="rounded-full" height="180px" width="180px" />
                            </div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <div>
                                    <p className="text-3xl font-bold text-slate-50">{metadata.ChannelTitle}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-normal text-slate-200">
                                        {formatNumber(metadata.SubscriberCount)} Subscribers
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-normal text-slate-200">
                                        {metadata.VideoCount} Videos
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Video Pane */}
                        <div className="flex flex-row flex-1 items-center justify-center gap-10">
                            <div>
                                <img src={metadata.VideoThumbnail} height="180px" width="240px" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <p className="text-xl font-semibold text-slate-100">
                                        {metadata.VideoTitle}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-normal text-slate-200">
                                        <span className="font-medium text-slate-300">Published On</span> {metadata.PublishDate}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-normal text-slate-200">
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
