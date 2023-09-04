import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import SearchBar from "./SearchBar";
import Metadata from "./Metadata";

export default function App() {
	const [ search, setSearch ] = useState("");

	const [ showResults, setShowResults ] = useState(false);

	const [ metadata, setMetadata ] = useState({});
	const [ isMetadataLoading, setIsMetadataLoading ] = useState(false);
	const [ isMetadataAvailable, setIsMetadataAvailable] = useState(false);

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
			/>
			<Metadata
				showResults={showResults}
				metadata={metadata}
				isMetadataLoading={isMetadataLoading}
				isMetadataAvailable={isMetadataAvailable}
			/>
		</div>
	)
}