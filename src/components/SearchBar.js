import React from "react";
import "./SearchBar.css";


function SearchBar({placeholder, data}){
  return (
		<React.Fragment className="search">
			<div className="searchInputs">
				<input type="text" placeholder={placeholder}/>
				</div>
			<div className="dataResult">
				{data.map((value, key) => {
					return <div className="searchResults"> {value.grapeName}</div> // maybe customize tag or use a tag for clickable? <a grapeName="dataItem" href={value.COMPONENT?} target="_blank">
				})}
			</div>
    
		</React.Fragment>
  );
}

export default SearchBar;