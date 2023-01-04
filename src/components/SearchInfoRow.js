import React from "react";
import SearchIconText from "./SearchIconText";

function SearchInfoRow({ personalData }) {
  return (
    <>
      <section className="bc-effect" key={personalData.id}>
        <div className="search-row">
          <h5>{personalData.name}</h5>
          <div className="search-info-wrapper col-xs-12">
            <SearchIconText
              classNameData="col-sm-12 col-md-4"
              icon="phone"
              text={personalData.phone}
            ></SearchIconText>
            <SearchIconText
              classNameData="col-sm-12 col-md-4"
              icon="at"
              text={personalData.email}
            ></SearchIconText>
            <SearchIconText
              classNameData="col-sm-12 col-md-4"
              icon="file"
              text={personalData.policyNumber + "|" + personalData.policyNumber}
            ></SearchIconText>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchInfoRow;
