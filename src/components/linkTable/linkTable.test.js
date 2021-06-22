import { render } from "@testing-library/react"
import LinkTable from "./linkTable"
const data = [
  {
    "ok": true,
    "result": {
        "code": "KCveN",
        "short_link": "shortT",
        "full_short_link": "https://shrtco.de/KCveN",
        "short_link2": "9qr.de/KCveN",
        "full_short_link2": "https://9qr.de/KCveN",
        "share_link": "shrtco.de/share/KCveN",
        "full_share_link": "https://shrtco.de/share/KCveN",
        "original_link": "http://twitter.com/very/long/link.html"
    }
  },
  {
    "ok": true,
    "result": {
        "code": "KCveN",
        "short_link": "shortF",
        "full_short_link": "https://shrtco.de/KCveN",
        "short_link2": "9qr.de/KCveN",
        "full_short_link2": "https://9qr.de/KCveN",
        "share_link": "shrtco.de/share/KCveN",
        "full_share_link": "https://shrtco.de/share/KCveN",
        "original_link": "http://facebook.com/very/long/link.html"
    }
  },
]
describe("Short Link Results", () => {
  it("has a list of Links including Link2", () => {
    const { getByText } = render(<LinkTable/>);

    expect(getByText(/shortT\b/i)).toBeInTheDocument();
    
  })

  it("has a list of links", () => {
    const { getByText } = render(<LinkTable/>);
    for(let link of data) {
      expect(getByText(link.result.short_link)).toBeInTheDocument()
    }
  })
})