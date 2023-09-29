/* eslint-disable react/prop-types */
import { AiOutlineSearch } from "react-icons/ai"

import axios from "axios"

export default function SearchBar(props) {
    const { 
        search,
        setSearch,
        setShowResults,
        setMetadata,
        setIsMetadataLoading,
        setIsMetadataAvailable,
        setVideosList,
        setIsVideosLoading,
        setIsVideosAvailable,
        searchBarRef,
    } = props;

    const handleSearch = () => {
        const baseURL = import.meta.env.VITE_BASE_URL;
        const url = `${baseURL}/metadata/?idorurl=${search}`;
        
        setShowResults(true);
        setIsMetadataLoading(true);
        setIsVideosLoading(true);
        setIsMetadataAvailable(false);
        setIsVideosAvailable(false);

        axios.get(url).then((response) => {
            setIsMetadataLoading(false);

            if (response.status == 200) {
                setIsMetadataAvailable(true);
                setMetadata(response.data);
                
                const channelId = response.data['ChannelId'];
                const videoId = response.data['VideoId'];

                const vidsUrl = `${baseURL}/videos/?channelId=${channelId}&videoId=${videoId}`;
                
                axios.get(vidsUrl).then((response) => {
                    setIsVideosLoading(false);
                    if (response.status == 200) {
                        setIsVideosAvailable(true);
                        setVideosList(response.data['Videos']);
                    } else {
                        setIsVideosAvailable(false);
                        console.error(`Request to ${vidsUrl} failed with status ${response.status}`);
                    }
                }).catch((error) => {
                    setIsVideosLoading(false);
                    setIsVideosAvailable(false);
                    console.error(error);
                });
            } else {
                setIsMetadataAvailable(false);
                setIsVideosLoading(false);
                setIsVideosAvailable(false);
            }
            
        }).catch((error) => {
            setIsMetadataLoading(false);
            setIsVideosLoading(false);
            setIsMetadataAvailable(false);
            setIsVideosAvailable(false);
            console.error(error);
        });
    }

    return (
        <div className="flex flex-row items-center justify-center mt-10 2xl:mt-28 xl:mt-28 lg:mt-28 md:mt-28 sm:mt-28 mb-10 w-full" ref={searchBarRef}>
            <div className="flex flex-row items-center justify-center w-full">
                <div className="bg-slate-100 2xl:w-2/5 xl:w-2/5 lg:w-1/2 md:w-3/5 sm:w-3/5 rounded-l-lg outline-none">
                    <input 
                        className="rounded-l-lg w-full h-8 bg-transparent outline-slate-400 px-5" 
                        type="text" 
                        placeholder="Paste a YouTube Video URL or Video ID."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="bg-slate-700 rounded-r-lg w-16 h-8 flex justify-center items-center cursor-pointer 2xl:w-24 xl:w-24 lg:w-24 md:w-24 sm:w-24" onClick={handleSearch}>
                    <AiOutlineSearch color="white" size="1.3rem"/>
                </div>
            </div>
        </div>
    )
}
