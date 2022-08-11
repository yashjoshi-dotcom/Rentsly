import React from "react";
import HouseSnip from "../components/Cards/HouseSnip";
import HeaderSearch from "../components/HeaderSearch/HeaderSearch";
import SearchBar from "../components/SearchBar/SearchBar";

const search = () => {
	return (
		<>
			<h1>This is the Search Page</h1>
			<HeaderSearch/>
			<SearchBar/>
			<HouseSnip/>

		</>
	);
};

export default search;
