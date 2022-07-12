export default async function LoadData() {
  try {
    const respone = await fetch("https://opentdb.com/api.php?amount=20");
    const data = await respone.json();
    const rawQuestionArray = data.results;
    console.log(questionArray);
  } catch (error) {
    console.error(error.message);
  }
}
