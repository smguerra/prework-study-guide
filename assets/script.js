// var topic = "HTML";

// if (topic === 'HTML') {
//   console.log("Let's study HTML!");
// } else if (topic === 'CSS') {
//   console.log("Let's study CSS!");
// } else if (topic === 'Git') {
//   console.log("Let's study Git!");
// } else if (topic === 'JavaScript') {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log('Please try again!');
// }
// We are checking to see if the topic variable exactly equals a certain value. It will then run whatever code block corresponds with the condition that the computer evaluates as truthy. If none of the conditions evaluate as truthy, 'Please try again!' will be logged to the console.

// var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
// for (var x = 0; x < topics.length; x++) {
//     console.log(topics[x]);
// }

// Functions:
// 1. wrapping for loop in a function.
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {

for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
     }
}

// 2. wrapping conditional statement in a function.

function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }
//   Now this function will check if the randomTopic from the topics array matches the conditional statements.
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();

