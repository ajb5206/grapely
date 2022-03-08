import React from "react";

function SearchBar({placeholder, data}){
  return (
		<React.Fragment className="search">
			<div className="searchInputs">
				<input type="text" placeholder={placeholder}/>
				</div>
			<div className="dataResult">
				{data.map((value, key) => {
					return <div> {value.grapeName}</div> // maybe customize tag or use a tag for clickable?
				})}
			</div>
    
		</React.Fragment>
  );
}

export default SearchBar;