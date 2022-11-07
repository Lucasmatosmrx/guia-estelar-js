// // function scope
// let subject = "create video";

// function createThink(subject) {
//   subject = "study";
//   return subject;
// }

// console.log(createThink(subject));
// console.log(subject);

//function scope
let subject;

function createThink() {
  subject = "study";
  console.log(subject);
}

console.log(subject);
createThink();
//console.log(subject);
