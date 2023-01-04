import React from "react";
import SearchIconText from "./components/SearchIconText";
import { staticData } from "./staticData";
import SearchInfoRow from "./components/SearchInfoRow";
import SearchInput from "./components/SearchInput";

export default () => (
  <>
    <div className="row">
      <div className="col-md-12">
        <SearchInput staticData={staticData}></SearchInput>
      </div>
    </div>
  </>
);
