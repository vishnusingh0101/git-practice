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
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "world";
// console.log(headerTitle.textContent);
// headerTitle.innerHtml = '<h3>Vishnu<h3/>';
// headerTitle.style.borderBottom = '2px solid black';
// header.style.bodrderBottom = ' solid 3px black';
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = "Hello";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var a=0; a<items.length; a++) {
//     items[a].style.backgroundColor = '#f4f4f4';
//     items[a].style.fontWeight = 'bold';
// }
// items[2].style.backgroundColor = 'Green';

// var li = document.getElementsByTagName('li');
// console.log(li);
// for(var i=0; i<li.length; i++) {
//     li[i].style.backgroundColor = "lightgrey";
// }
// li[4].style.padding = '10px 20px';
// // li[li.length].style.pading = '10px';
// li[4].style.listStyleType = 'none';

// var liclass = document.getElementsByClassName('newli');
// liclass[0].style.backgroundColor = '#f5f5f5';

// QUERYSELECTOR //
var header = document.querySelector("#main-header");
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value =  'Hello';
var btn = document.querySelector('input[type="submit"]');
btn.value = 'send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var item1 = document.querySelector('.list-group-item:last-child');
// item1.style.color = 'corol';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// QUERYSELECTORALL //  

var item = document.querySelectorAll('.list-group-item');
item[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = 'lightgreen';
}









