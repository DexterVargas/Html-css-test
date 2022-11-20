'use strict';
/*       MEMEs Images
images/images1.png
images/images2.png
images/images3.png
images/images4.png
images/images5.png
images/images6.png
images/images7.png
images/images8.png
images/images9.png
images/images10.png
*/

/*       
['How many programmers does it take to change a light bulb? None – It’s a hardware problem',

'There are only 10 kinds of people in this world: those who know binary and those who don’t.',

'Why did the web designer storm out of the restaurant? She was offended by the table layout.',

'Why was the JavaScript reality show cancelled after only one episode?   People thought it seemed scripted.',

'How can you tell that a web developer is working?     You can hear him Grunting!',

'Why was the class upset that its parent died?    Because it wouldn’t be getting the inheritance!',

'How do you comfort a JavaScript bug?   You console it.
How does a web developer like his coffee?    #000000',

'What does a developer do at the end of a big project?     He gits committed.',

'Why did the developer quit his job?     He didn’t get arrays.',
'A few developers walk into a bar.      The bar tender asks “Should I join your table”.']
*/

/*     QUOTE

[`“If debugging is the process of removing software bugs, then programming must be the process of putting them in” – Edsger Dijkstra`,

`“Great web design without functionality is like a sports car with no engine.”– Paul Cookson`,

`“My code DOESN’T work, I have no idea why. My code WORKS, I have no idea why.”– Anonymous`,

`“Things aren’t always #000000 and #FFFFFF”– HTML Proverb`,

`“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.”– Martin Golding`,

`“Talk is cheap. Show me the code.”– Linus Torvalds`,

`“Websites should look good from the inside and out.”– Paul Cookson`,

`“Learning HTML and CSS is a lot more challenging than it used to be. Responsive web design adds more layers of complexity to design and develop websites.”– Jacob Lett`,

`“If at first you don’t succeed; call it version 1.0”– Unknown`,

`“Websites promote you 24/7: No employee will do that.”– Paul Cookson`]

 */

/*                 RIDDLE

`How many programmers does it take to change a light bulb? `,
	`None. Its a hardware problem.`,

`Why is it that programmers always confuse Halloween with Christmas?`,
	`Because 31 OCT = 25 DEC.`,

`What happened when the computer geeks met?`,
	`It was love at first site!`,

`What does a programmer use to write code?`,
	`He uses a keyboard.`,

`What’s the worst thing about programming? Nothing. `,
	`It’s just sitting around waiting for stuff to happen.`,

`What’s the fastest way to learn how to program? `,
	`Practice!`,

`What’s the first thing you should learn how to program? `,
	`To read and understand code.`,

`What’s the last thing you should learn how how to program? `,
	`How to debug.`

*/

const paraImg = document.getElementById('imgId');
const paraJoke = document.getElementById('paraJokeId');
const paraQuote = document.getElementById('paraQuoteId');
const paraRiddle = document.getElementById('paraRiddleId');
const paraRiddleAns = document.getElementById('paraRiddleAnsId');

function memeList(num) {
  const memeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //console.log(memeArr[num]);
  return memeArr[num];
}
function jokeList(num) {
  const jokeArr = [
    `How many programmers does it take to change a light bulb? None – It’s a hardware problem`,

    `There are only 10 kinds of people in this world: those who know binary and those who don’t.`,

    'Why did the web designer storm out of the restaurant? She was offended by the table layout.',

    'Why was the JavaScript reality show cancelled after only one episode?   People thought it seemed scripted.',

    'How can you tell that a web developer is working?     You can hear him Grunting!',

    'Why was the class upset that its parent died?    Because it wouldn’t be getting the inheritance!',

    `How do you comfort a JavaScript bug?   You console it.
  How does a web developer like his coffee?    #000000`,

    'What does a developer do at the end of a big project?     He gits committed.',

    'Why did the developer quit his job?     He didn’t get arrays.',
    'A few developers walk into a bar.      The bar tender asks “Should I join your table”.',
  ];
  //console.log(memeArr[num]);
  return jokeArr[num];
}

function quoteList(num) {
  const quoteArr = [
    `“If debugging is the process of removing software bugs, then programming must be the process of putting them in” – Edsger Dijkstra`,

    `“Great web design without functionality is like a sports car with no engine.”– Paul Cookson`,

    `“My code DOESN’T work, I have no idea why. My code WORKS, I have no idea why.”– Anonymous`,

    `“Things aren’t always #000000 and #FFFFFF”– HTML Proverb`,

    `“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.”– Martin Golding`,

    `“Talk is cheap. Show me the code.”– Linus Torvalds`,

    `“Websites should look good from the inside and out.”– Paul Cookson`,

    `“Learning HTML and CSS is a lot more challenging than it used to be. Responsive web design adds more layers of complexity to design and develop websites.”– Jacob Lett`,

    `“If at first you don’t succeed; call it version 1.0”– Unknown`,

    `“Websites promote you 24/7: No employee will do that.”– Paul Cookson`,
  ];
  //console.log(memeArr[num]);
  return quoteArr[num];
}

function riddleList(num) {
  const riddleArr = [
    `How many programmers does it take to change a light bulb? `,
    `None. Its a hardware problem.`,

    `Why is it that programmers always confuse Halloween with Christmas?`,
    `Because 31 OCT = 25 DEC.`,

    `What happened when the computer geeks met?`,
    `It was love at first site!`,

    `What does a programmer use to write code?`,
    `He uses a keyboard.`,

    `What’s the worst thing about programming?`,
    ` Nothing. It’s just sitting around waiting for stuff to happen.`,

    `What’s the fastest way to learn how to program? `,
    `Practice!`,

    `What’s the first thing you should learn how to program? `,
    `To read and understand code.`,

    `What’s the last thing you should learn how how to program? `,
    `How to debug.`,
  ];
  //console.log(memeArr[num]);
  return riddleArr[num];
}
function imgDel() {
  const imgDelete = document.getElementById('img');
  if (imgDelete) {
    imgDelete.remove();
  }
}
/*
document.querySelector('.btnmeme').addEventListener('click', function () {
  paraJoke.textContent = '';
  paraQuote.textContent = '';
  paraRiddle.textContent = '';
  paraRiddleAns.textContent = '';

  const randomNum = Math.floor(Math.random() * 10);
  paraImg.src = `images/image${memeList(randomNum)}.jpg`;
});
*/
function clearAll() {
  const paraImg = document.querySelector('#imgId');
  const paraJoke = document.querySelector('#paraJokeId');
  const paraQuote = document.querySelector('#paraQuoteId');
  const paraRiddle = document.querySelector('#paraRiddleId');
  const paraRiddleAns = document.querySelector('#paraRiddleAnsId');

  paraImg.innerHTML = '';
  paraJoke.innerHTML = '';
  paraQuote.innerHTML = '';
  paraRiddle.innerHTML = '';
  paraRiddleAns.innerHTML = '';
}

document.querySelector('.btnjoke').addEventListener('click', function () {
  imgDel();
  //paraImg.src = '';
  paraQuote.textContent = '';
  paraRiddle.textContent = '';
  paraRiddleAns.textContent = '';
  const randomNum = Math.floor(Math.random() * 10);
  //console.log(randomNum);
  paraJoke.textContent = `${jokeList(randomNum)}`;
});

document.querySelector('.btnquote').addEventListener('click', function () {
  imgDel();
  //paraImg.src = '';
  paraJoke.textContent = '';
  paraRiddle.textContent = '';
  paraRiddleAns.textContent = '';
  const randomNum = Math.floor(Math.random() * 10);
  paraQuote.textContent = `${quoteList(randomNum)}`;
});

let riddleAns;
document.querySelector('.btnriddle').addEventListener('click', function () {
  imgDel();
  //paraImg.src = '';
  paraJoke.textContent = '';
  paraQuote.textContent = '';
  paraRiddleAns.textContent = '';
  const randomNum = Math.floor(Math.random() * 8);
  const ans = randomNum * 2;
  riddleAns = ans;
  paraRiddle.textContent = `${riddleList(ans)}`;

  //console.log(ans);
});

document.querySelector('.riddleAnswer').addEventListener('click', function () {
  if (paraRiddle.textContent === '') {
    alert('No Riddle');
  } else {
    paraRiddleAns.textContent = `${riddleList(riddleAns + 1)}`;
  }
});
/* try other method on button function*/
function showMeme() {
  paraJoke.textContent = '';
  paraQuote.textContent = '';
  paraRiddle.textContent = '';
  paraRiddleAns.textContent = '';
  const randomNum = Math.floor(Math.random() * 10);
  const imgLoader = document.createElement('IMG');
  imgLoader.src = `images/image${memeList(randomNum)}.jpg`;
  //console.log(imgLoader);
  imgLoader.style.width = '300px';
  imgLoader.id = 'img';
  if (imgLoader.src) {
    document
      .getElementById('meme')
      .replaceChild(
        document.getElementById('meme').appendChild(imgLoader),
        document.getElementById('meme').children[0]
      );
  } else {
    document.getElementById('meme').appendChild(imgLoader);
  }
}
