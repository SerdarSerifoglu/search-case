import React from "react";

function SearchIconText(data) {
  const { text, icon, classNameData } = data;
  return (
    <>
      <span className={classNameData}>
        <i className={"fa fa-" + icon}></i> {text}
      </span>
    </>
  );
}

export default SearchIconText;
