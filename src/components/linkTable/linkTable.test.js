import { render, screen } from "@testing-library/react";
import LinkTable from "./linkTable";

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
describe("Short Link Results", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));
  it("shows a list of links retrieved from an API", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => data,
    });
  });

  render(<LinkTable />);

  expect(window.fetch).toHaveBeenCalledWith("https://api.shrtco.de/v2/shorten?url=twitter.com/very/long/link.html");
  expect(window.fetch).toHaveBeenCalledTimes(1);

  it("has a list of Links including Link2", () => {
    const { getByText } = render(<LinkTable />);

    expect(getByText(/shortT\b/i)).toBeInTheDocument();
  });

  it("has a list of links", () => {
    const { getByText } = render(<LinkTable />);
    for (let link of data) {
      expect(getByText(link.result.short_link)).toBeInTheDocument();
    }
  });
});
