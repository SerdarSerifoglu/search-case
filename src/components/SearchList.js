import React from "react";
import SearchInfoRow from "./SearchInfoRow";

function SearchList({ filteredData }) {
  return filteredData.map((data) => (
    <SearchInfoRow key={data.id} personalData={data} />
  ));
}

export default SearchList;
