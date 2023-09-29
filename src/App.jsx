import { useRef, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import SearchBar from "./SearchBar";
import Metadata from "./Metadata";
import Videos from "./Videos";

export default function App() {
	const [ search, setSearch ] = useState("");

	const [ showResults, setShowResults ] = useState(false);

	const [ metadata, setMetadata ] = useState({});
	const [ isMetadataLoading, setIsMetadataLoading ] = useState(false);
	const [ isMetadataAvailable, setIsMetadataAvailable] = useState(false);

	const [ videosList, setVideosList ] = useState([]);
	const [ isVideosLoading, setIsVideosLoading ] = useState(false);
	const [ isVideosAvailable, setIsVideosAvailable ] = useState(false);

	const searchBarRef = useRef(null);

	return (
		<div className="bg-slate-900 w-screen min-h-screen h-full flex flex-col items-center">
			<Header />
			<Hero />
			<SearchBar 
				search={search}
				setSearch={setSearch}
				setShowResults={setShowResults}
				setMetadata={setMetadata}
				setIsMetadataLoading={setIsMetadataLoading}
				setIsMetadataAvailable={setIsMetadataAvailable}
				setVideosList={setVideosList}
				setIsVideosLoading={setIsVideosLoading}
				setIsVideosAvailable={setIsVideosAvailable}
				searchBarRef={searchBarRef}
			/>
			<Metadata
				showResults={showResults}
				metadata={metadata}
				isMetadataLoading={isMetadataLoading}
				isMetadataAvailable={isMetadataAvailable}
			/>
			<Videos
				showResults={showResults}
				metadata={metadata}
				videosList={videosList}
				isVideosLoading={isVideosLoading}
				isVideosAvailable={isVideosAvailable}
			/>
		</div>
	)
}