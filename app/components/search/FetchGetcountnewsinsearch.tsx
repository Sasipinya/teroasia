export default async function getCountNewsInSearch(tag_id: number) {
    const url = "https://backend.teroasia.com/apis2/index_test.php?a=get_count_tag&tag_id=" + tag_id;
    const response = await fetch(url);
    return response.json();
    
}