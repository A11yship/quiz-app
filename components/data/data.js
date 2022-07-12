import Card from "../card/card.js";

export default async function LoadData() {
  try {
    const respone = await fetch("https://opentdb.com/api.php?amount=20");
    const data = await respone.json();
    const rawQuestionArray = data.results;

    const questionArray = rawQuestionArray.map((item) => {
      const tagList = [];
      const categories = item.category
        .split(/:|&/)
        .map((category) => category.trim());

      categories.forEach((category) => tagList.push(category));
      tagList.push(item.difficulty);

      if (item.type == "multiple") {
        tagList.push("multiple choice");
      } else {
        tagList.push("True or false");
      }

      const answerOptions = [];
      if (item.type == "multiple") {
        answerOptions.push(item.correct_answer);
        item.incorrect_answers.forEach((answer) => answerOptions.push(answer));
      }

      return {
        question: item.question,
        answer: item.correct_answer,
        answer_options: answerOptions,
        tags: tagList,
      };
    });

    Card(questionArray);
  } catch (error) {
    console.error(error.message);
  }
}
