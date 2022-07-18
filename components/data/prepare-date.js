import DecodeEntities from "./decodeEntities.js";

export default function PrepareDate(dataArray) {
  return dataArray.map((item) => {
    const answerOptions = [];
    if (item.type == "multiple") {
      answerOptions.push(DecodeEntities(item.correct_answer));
      item.incorrect_answers.forEach((answer) => answerOptions.push(answer));
    }

    let tagList = [];
    tagList = item.category.split(/:|&/).map((category) => category.trim());
    tagList.push(item.difficulty);
    if (item.type == "multiple") {
      tagList.push("multiple choice");
    } else {
      tagList.push("True or false");
    }

    return {
      question: DecodeEntities(item.question),
      answer: DecodeEntities(item.correct_answer),
      answer_options: answerOptions.sort(),
      tags: tagList,
    };
  });
}
