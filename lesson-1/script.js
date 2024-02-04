'use strict';
let title = document.querySelector('.title');
title.textContent = "Hello Muhammadaziz";
title.setAttribute('style' , 'color: #FF0000')

let text = document.getElementsByTagName('p');
text[0].textContent = "Sizni o'z kurslrimizga takliy qilamiz :";
text[0].setAttribute('style' ,'color: #fff')
text[0].setAttribute('style' ,'padding: 15px')
text[0].setAttribute('style' ,'background-color: green;')

// let ul = document.querySelector('ul');
// let li = document.querySelector('li')
// console.log(ul);

// ul[0].forEach(element => {
//     ul.textContent += " kursimizga"
// });