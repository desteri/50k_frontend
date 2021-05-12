"use strict";

// console.log(document.head);
// console.log(document.body);
// console.log(document.body.style.background = "red");

// console.log(document.body.childNodes);

// console.log(document.querySelector('#btn1').previousSibling);

// console.log(document.body.childNodes);

for (let list of document.body.childNodes) {

    if(list.nodeName == "#text") {
       continue;
    }

    console.log(list.nodeName);
}