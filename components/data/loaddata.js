import Card from '../card/card.js';
import PrepareDate from './prepare-date.js';

export default async function LoadData() {
  try {
    const respone = await fetch('https://opentdb.com/api.php?amount=20');
    const data = await respone.json();
    const rawQuestionArray = data.results;

    const questionArray = PrepareDate(rawQuestionArray);

    const maindiv = document.querySelector('[data-js="home-page"]');

    Card(questionArray, maindiv);
  } catch (error) {
    console.error(error.message);
  }
}
