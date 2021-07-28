import React from 'react';
import './SearchBox.css'



function SearchBox({ placeholder, searchText, onSearchChange, results, onResultSelected}) {
    return (
        <div className="c-searchbox">
            <input type="text" className="form-control" placeholder={placeholder}
                value={searchText} onChange={onSearchChange} />
            <ul className="list-group result-box">
                {results.map((result, index) => 
                    <li key={index} className="list-group-item list-group-item-action"
                        onClick={() => onResultSelected(index)}>
                        {result}
                    </li>)}
            </ul>
        </div>
    );
}

export default SearchBox;