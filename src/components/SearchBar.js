import React, { useState } from "react";
import "./SearchBar.css";


function SearchBar({placeholder, data}){

	const [filteredData, setFilteredData] = useState([]);


	const handleFilter = (event) => {
		const searchWord = event.target.value
		const newFilter = data.filter((value) => {
			return value.grapeName.toLowerCase().includes(searchWord.toLowerCase());
		});
		if (searchWord === "") {
			setFilteredData([]);
		} else {
		setFilteredData(newFilter);  
		}
	};

  return (
		<div className="search">
			<div className="searchInputs">
				<input type="text" placeholder={placeholder} 
					onChange={handleFilter}/>
				</div>
			{filteredData.length !== 0 && (
			<div className="dataResult">
				{filteredData.map((value, key) => {
					return <div className="searchResults"> {value.grapeName}</div> // maybe customize tag or use a tag for clickable? <a grapeName="dataItem" href={value.COMPONENT?} target="_blank">
				})}
			</div>
			)}
		</div>
  );
}

export default SearchBar;