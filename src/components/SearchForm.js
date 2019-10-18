import React, { useEffect, useState } from "react";

export default function SearchForm(props) {
  const setSearchResults = props.setDataToDisplay;

  const [searchTerm, setSearchTerm] = useState("");
  const [dataToSearch] = useState(props.data);

  const handleChange = event => setSearchTerm(event.target.value);

  useEffect(() => {
    const results = dataToSearch.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(results);
    setSearchResults(results);
  }, [searchTerm, setSearchResults, dataToSearch]);

  return (
    <section className="search-form">
      {/* // Add a search form here */}
      <input placeholder="Search" value={searchTerm} onChange={handleChange} />
    </section>
  );
}
