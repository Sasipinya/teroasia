// Server Component for data fetching
export default async function getNewsInSearch(
  keyword:string
) {
  const url = "https://backend.teroasia.com/apis2/index.php?a=search&k=" + encodeURI(keyword);
  const response = await fetch(url);
  return response.json();
}