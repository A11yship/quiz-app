export default function PrepareDate(dataArray) {
  return dataArray.map((item) => {
    const answerOptions = [];
    if (item.type == "multiple") {
      answerOptions.push(item.correct_answer);
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
      question: item.question,
      answer: item.correct_answer,
      answer_options: answerOptions.sort(),
      tags: tagList,
    };
  });
}
