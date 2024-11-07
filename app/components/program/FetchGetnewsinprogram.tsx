// Server Component for data fetching
export default async function getNewsInProgram(
    program_id: number,
    pageLimit: number,
    offset: number,
  ) {
    const url =
      'https://backend.teroasia.com/apis2/index_test.php?a=news_in_program&pid=' +
      program_id +
      '&limit=' +
      pageLimit +
      '&offset=' +
      offset;
    const response = await fetch(url);
    return response.json();
  }