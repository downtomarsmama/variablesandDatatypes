//Variables and DataTypes

// this is a comment.
// alert("Hello, world")

var myName = "Dwayne The Rock Johnson";

// We declare the variable just like we did before
var myName = "Dwayne Johnson";

// Except this time we reassign it to hold a different value. Notice we don't have to use the var keyword for reassignments.
myName = "The Rock";

// This should log "The Rock" to the console
console.log(myName);

var age = 46;

var totalCost;
var totalWithTax;

var costPerItem = 3.50;
var numberOfItems = 4;
var taxRate = 0.06;
 
totalCost = costPerItem * numberOfItems;
totalWithTax = totalCost + (taxRate * totalCost);

console.log(totalWithTax);

// examples of booleans
var likesDogs = true;

var allergicToDogs = false;


var firstName = "Dwayne";
var lastName = "Johnson";

// There are a couple different ways to combine strings. These two examples produce the same result:

// Option A: String Concatenation with the + symbol
var fullName = firstName + " " + lastName;

console.log(fullName);

// Option B: String template literals (probably easier once you get used to them)
fullName = `${firstName} ${lastName}`;

console.log(fullName);

var firstName = "Kayla";
var lastName = "Oliver";


var age = 26;

var likestravel = true;

console.log(firstName, lastName, age, likestravel)


var gradesArray = [97, 55, 62, 82, 79, 91, 74, 86];
var firstItem = gradesArray[0] // 97
var secondItem = gradesArray[1] // 55
var thirdItem = gradesArray[2] // 62

var movieArray =["Fright Night", "Lone Star State of Mind", "Nightmare on Elm Street"]
var firstItem = movieArray[0]
var secondItem = movieArray[1]
var thirdItem = movieArray[2]
console.log(movieArray[2]);

var kaylaObject = {
    firstName: "Kayla",
    lastName: "Oliver",
    age: 26,
    hobbies: ["Painting","Reading"]
  }

  console.log(kaylaObject.firstName); // "Kayla"
console.log(kaylaObject.hobbies[1]);

var kaylaObject ={
    firstName: "Kayla",
    lastName: "Oliver",
    age: 26,
    likestotravel: "true",
    favoriteMovies: ["Nightmare on Elm Street","Legend","Fight Club"]
}
console.log(kaylaObject.firstName);
console.log(kaylaObject.lastName);
console.log(kaylaObject.age);
console.log(kaylaObject.likestotravel);
console.log(kaylaObject.favoriteMovies[2]);

var temp = 46;
var conditions ="sunny";
var sunriseTime ="7:30";
var sunsetTime ="5:10";

console.log(temp);
console.log(conditions);
console.log(sunriseTime);
console.log(sunsetTime);
console.log(`It's currently ${conditions} and ${temp} degrees. The sun rose this morning at ${sunriseTime} AM and will set at ${sunsetTime} PM`);


var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 
console.log(55);
console.log(33);


var currentWeather={
    temperature: {
        high: 55,
        low: 32
    },
    conditions:"sunny",
    astronomy: {
        sunrise: "7:43 AM",
        sunset: "5:09 PM"
    }
}
console.log(currentWeather.temperature);
console.log(currentWeather.conditions);
console.log(currentWeather.astronomy)
console.log(`Today will be high ${currentWeather.temperature.high} and low ${currentWeather.temperature.low} and ${currentWeather.conditions} the sunrise will be at ${currentWeather.astronomy.sunrise}.`);

var weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]
   console.log(weatherForecast.conditions);
   console.log(weatherForecast.temperature);
   console.log(weatherForecast.astronomy);
  