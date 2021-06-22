import React, { useEffect, useState } from "react";
import { getShortLink } from "../../services/getShortLink";
import LinkTable from "../linkTable/linkTable";
import SearchShortLink from "../searchShortLink/searchShortLink";
import "./shortLinkTable.css";

function ShortLinkTable() {
  const [link, setLink] = useState([]);

  useEffect(() => {
    // getShortLink().then(links => setLink(links.resuñt) )
    // console.log(link)
    getShortLink()
  }, [link]);
  return (
    <section className="App-input-link-content padding-content">
      <SearchShortLink />
      <LinkTable />
    </section>
  );
}

export default ShortLinkTable;
