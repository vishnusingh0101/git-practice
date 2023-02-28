// console.dir(document);
// console.log(document.domain);
// console.log(document.url);
// document.title = 'vishnu`sform';
// console.log(document.title);
// console.log(document.body);
// console.log(document.h1);
// console.log(document.head);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// getelementbyid

// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "world";
// console.log(headerTitle.textContent);
// headerTitle.innerHtml = '<h3>Vishnu<h3/>';
// headerTitle.style.borderBottom = '2px solid black';
header.style.bodrderBottom = ' solid 3px black';
var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent = "Hello";
items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';



