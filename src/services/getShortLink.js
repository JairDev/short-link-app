export async function getShortLink() {
  const url = "https://api.shrtco.de/v2/shorten?url=twitter.com/very/long/link.html"
  // const url = "https://pokeapi.co/api/v2/pokemon"
  const response = await fetch(url)
  const {result} = response.json()
  console.log(result)
  return result
}