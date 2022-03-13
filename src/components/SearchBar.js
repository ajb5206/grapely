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
					return <a className="searchResults" href={value.link}>{value.grapeName}</a> 
				})}
			</div>
			)}
		</div>
  );
}

export default SearchBar;