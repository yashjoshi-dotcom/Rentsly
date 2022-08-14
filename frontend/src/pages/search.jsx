import React from "react";
import HouseSnip from "../components/searchPage/Cards/HouseSnip";
import HeaderSearch from "../components/searchPage/HeaderSearch/HeaderSearch";
import SearchBar from "../components/searchPage/SearchBar/SearchBar";

const search = () => {
	return (
		<>
			{/* <h1>This is the Search Page</h1> */}
			<HeaderSearch/>
			{/* <SearchBar/> */}
			<HouseSnip/>

		</>
	);
};

export default search;
