const botAnswers = [
    'Привет от самого умного бота!',
    'Ты хочешь узнать что такое REACT?',
    'Стоит спросить это у Алисы!',
    'Хватит меня донимать, иди учись!',
    'Я не понял ни слова!',
    'Может быть лучше поговорим о Python?',
    'Откуда ты это знаешь?',
];
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default () => botAnswers[Math.floor(botAnswers.length * Math.random())];