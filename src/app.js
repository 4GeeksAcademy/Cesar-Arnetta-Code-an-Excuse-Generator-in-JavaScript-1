/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["My brother", "I", "My dog", "My computer"];
let action = ["accidentally deleted", "was sick", "chewed", "crashed"];
let what = [
  "my homework file",
  "and couldn’t finish my assignment",
  "the paper where I wrote my homework",
  "while I was working on the task"
];
let when = ["last night.", "yesterday.", "this morning.", "two hours ago."];

function getRandomNumer(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumer(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here

  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
