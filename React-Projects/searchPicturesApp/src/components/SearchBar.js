import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault(); //avoids the behaviour aka form input collection and prevents form/ page re-loading

        //Get input value from the SearchBar 
        onSubmit(term);
    };

    const handleChange = (event) => {
    //console.log(event.target.value); // get's the value from the input
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;