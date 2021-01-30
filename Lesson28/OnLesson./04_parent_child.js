let active = document.querySelector('.active');

console.log(active.parentNode);

let list = active.parentNode;

console.log(list.childNodes);

active.nextElementSibling.style.color = "red";