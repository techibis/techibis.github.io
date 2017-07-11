



function jsTime() {
    var months = 50;
    var user = "Ms. Fonte";

    document.write(user + " has been writing JavaScript for " + months + "months");


}

jsTime();



//CONDITIONALS
//The if statement
//Use if statements to decide which lines of code to execute,
//based on a condition.
var age = 30;

if (age > 18) {
  console.log('You are an adult');
}

//OPERATORS
//greater than, less than, equal to, exactly equal to



var age = 30;

if (age >= 16) {
  console.log('Yay, you can drive!');
} else {
  console.log('Sorry, you have ' + (16 - age) +
  ' years until you can drive.');
}





var age = 30;

if (age >= 35) {
  console.log('You can vote AND run for President!');
} else if (age >= 30) {
  console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can\'t vote, but you can write your representatives.');
}




//LOOPS


//While LOOPS
//while will repeat the same code over and over until some condition is met.
var bottlesOfBeer = 99;

while (bottlesOfBeer > 0) {
  console.log(bottlesOfBeer + ' bottles of beer on the wall');
  bottlesOfBeer = bottlesOfBeer - 1;
}





//FOR LOOPS
//for loops are very similar, but you declare a counter in the statement.
// will count 1 to 10
for (var i = 1; i <= 10; i++) {
  console.log(i);
}



//BREAK
// Count from 100 to 200
for (var i = 100; i <= 200; i++) {
  console.log('Testing ' + i);

  //Stop at the first multiple of 7
  if (i % 7 == 0) {
    console.log('Found it! ' + i);
    break;
  }
}



//ARRAY
var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
  'Blue', 'Indigo', 'Violet'];

var lotteryNumbers = [33, 72, 64, 18, 17, 85];

var myFavoriteThings = ['Broccoli', 1024, 'Sherlock'];

myFavoriteThings[0] = 'Asparagus';

myFavoriteThings.push('Dancing');

//LENGTH
var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
'Blue', 'Indigo', 'Violet'];

console.log(rainbowColors.length);

//FOR WITH ARRAYS
var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
  'Blue', 'Indigo', 'Violet'];

for (var i = 0; i < rainbowColors.length; i++) {
  console.log(rainbowColors[i]);
}
