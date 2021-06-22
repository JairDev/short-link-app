import React from "react";
import LinkTable from "../linkTable/linkTable";
import SearchShortLink from "../searchShortLink/searchShortLink";
import "./shortLinkTable.css"

function ShortLinkTable() {
  return (
    <section className="App-input-link-content padding-content">
      <SearchShortLink/>
      <LinkTable/>
    </section>
  );
}

export default ShortLinkTable