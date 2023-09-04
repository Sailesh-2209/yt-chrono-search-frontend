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
        setIsMetadataAvailable
    } = props;

    const handleSearch = () => {
        const baseURL = import.meta.env.VITE_BASE_URL;
        const url = `${baseURL}/metadata/?idorurl=${search}`;
        
        // TODO: Smooth scroll the search bar to the top of the page
    
        setShowResults(true);
        setIsMetadataLoading(true);
        setIsMetadataAvailable(false);
    
        axios.get(url).then((response) => {
            setIsMetadataLoading(false);

            if (response.status == 200) {
                setIsMetadataAvailable(true);
                setMetadata(response.data);
                
            } else {
                setIsMetadataAvailable(false);
            }
            
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className="flex flex-row items-center justify-center mt-28 mb-10 w-full">
            <div className="flex flex-row items-center justify-center w-full">
                <div className="bg-slate-100 w-2/5 rounded-l-lg outline-none">
                    <input 
                        className="rounded-l-lg w-full h-8 bg-transparent outline-slate-400 px-5" 
                        type="text" 
                        placeholder="Paste a YouTube Video URL or Video ID."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="bg-slate-700 rounded-r-lg w-24 h-8 flex justify-center items-center cursor-pointer" onClick={handleSearch}>
                    <AiOutlineSearch color="white" size="1.3rem"/>
                </div>
            </div>
        </div>
    )
}
