//alert("Ibis Says, 'You can do anything!'");
console.log("Hi! You found me!");
document.write("<H1>JavaScript</H1>");
var name = "Ms. Fonte";
console.log(name);
var numberOfKittens = 5;
var cutenessRating = 9.6;
console.log(cutenessRating);

function countAnimals(numberOfKittens) {
  var numberOfPuppies = 4;
  var numberOfAnimals = numberOfKittens + numberOfPuppies;
  console.log("The number of Animals is " + numberOfAnimals);
}

var school1 = "Miami";
var school2 = "Dade";
var nameOfSchool = school1 + ' ' + school2;
console.log(nameOfSchool);




function parrotFacts() {
  console.log('Some parrot species can live for over 80 years');
  console.log('Kakapos are a critically endangered flightless parrot');
}

parrotFacts();
countAnimals(8);
countAnimals(1);


var age = "30";

if (age != 30) {
  console.log('Yay, you can drive!');
} else {
  console.log('Sorry, you have ' + (16 - age) +
  ' years until you can drive.');
}

function changePic() {
  var myimg = document.getElementById("big");
  alert(myimg.src);
  myimg.src = "gwc2017.jpg";
  // will set our src to a new src
  myimg.setAttribute('src', 'gwc2017.jpg');
  //myimg.style.opacity = 0.3;
}

function changeCaption() {
  var caption2 = document.getElementById("caption");
  caption2.innerHTML = "<p>Wow, we had a blast at Summer Camp!</p>";
}

var topText = document.getElementById("top");
topText.style.color = "blue";
//topText.style.fontSize = "120px";


var mycaption = document.getElementById("caption");
mycaption.innerHTML = "<p>This is Ms. Fonte, Samah and Hannah at Girls Who Code 2017</p>";
