let phrases = [
    { text: 'счатья!', image: 'пожелания/счастья сис.jpeg' },
    { text: 'любви!', image: 'пожелания/любви сис.jpeg' },
    { text: 'здоровья!', image: 'пожелания/здоровья сис.jpeg' },
    { text: 'денег!', image: 'пожелания/денег сис.jpeg' },
    { text: 'дожить до конца универа!', image: 'пожелания/дожить сис.jpeg' },
    { text: 'кв в москве!', image: 'пожелания/кв сис.jpeg' },
    { text: 'виллу!', image: 'пожелания/вилла си.jpeg' }
    
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src',  randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});




  