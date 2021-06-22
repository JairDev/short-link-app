import React from "react";
import Link from "../link/link";
import "./linkTable.css";

const data = [
  {
    ok: true,
    result: {
      code: "KCveN",
      short_link: "shortT",
      full_short_link: "https://shrtco.de/KCveN",
      short_link2: "9qr.de/KCveN",
      full_short_link2: "https://9qr.de/KCveN",
      share_link: "shrtco.de/share/KCveN",
      full_share_link: "https://shrtco.de/share/KCveN",
      original_link: "http://twitter.com/very/long/link.html",
    },
  },
  {
    ok: true,
    result: {
      code: "KCveN",
      short_link: "shortF",
      full_short_link: "https://shrtco.de/KCveN",
      short_link2: "9qr.de/KCveN",
      full_short_link2: "https://9qr.de/KCveN",
      share_link: "shrtco.de/share/KCveN",
      full_share_link: "https://shrtco.de/share/KCveN",
      original_link: "http://facebook.com/very/long/link.html",
    },
  },
];

function LinkTable() {
  return (
    <div className="result-short-link">
      {data.map((link) => (
        <Link
          key={link.result.short_link}
          originalLink={link.result.original_link}
          shortLink={link.result.short_link}
        />
      ))}
    </div>
  );
}
export default LinkTable;
