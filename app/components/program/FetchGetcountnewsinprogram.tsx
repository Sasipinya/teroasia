export default async function getCountNewsInProgram(program_id: number) {
    const url = `https://backend.teroasia.com/apis2/index_test.php?a=count_news_in_program&pid=${program_id}`;
    const response = await fetch(url);
    return response.json();
  }