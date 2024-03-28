"use strict";

const ul = document.getElementById("ul_pr");
const li = document.querySelectorAll("li");

function add(id){
    // var del_new = document.createElement("button");
    const li_new = document.createElement("li");
    const li_inp = document.createTextNode(id);
    li_new.appendChild(li_inp);
    // li_new.appendChild(document.createTextNode( '\u00A0\u00A0' ) );
    ul.appendChild(li_new);
    // var del_inp = document.createTextNode("Del");
    // del_new.appendChild(del_inp);
    // li_new.appendChild(del_new);
    ul.appendChild(document.createElement("br"));
}

window.emptyList = function () {
  const ul = document.querySelector('#ul_pr');
  const listLength = ul.children.length;
  
    for (i = 0; i < listLength; i++) {
      ul.removeChild(ul.children[0]);
    }
  }