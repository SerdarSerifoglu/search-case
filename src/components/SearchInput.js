import React, { useState } from "react";
import SearchList from "./SearchList";

const SearchInput = ({ staticData }) => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchListShow, setSearchListShow] = useState(false);

  const filteredData = staticData.filter((client) => {
    return client.name.toLowerCase().includes(searchInputValue.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchInputValue(e.target.value);
    if (e.target.value === "") {
      setSearchListShow(false);
    } else {
      setSearchListShow(true);
    }
  };

  return (
    <>
      <nav className="nav-search-input">
        <div className="search-area">
          <i className="fa fa-search"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search ( Client Name / Policy Number )"
            onChange={handleChange}
          />
        </div>
      </nav>
      {searchListShow ? <SearchList filteredData={filteredData} /> : ""}
    </>
  );
};

export default SearchInput;
