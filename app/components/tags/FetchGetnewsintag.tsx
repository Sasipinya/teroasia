// Server Component for data fetching
export default async function getNewsInTags(
  tag_id: number,
  pageLimit: number,
  offset: number,
) {
  const url = "https://backend.teroasia.com/apis2/index_test.php?a=get_tag&tag_id=" + tag_id + "&limit=" + pageLimit + "&o=" + offset
  const response = await fetch(url);
  return response.json();
}