// Question 1
// Scott Gordon
// alert("I love this JavaScript class");

// Question 2
myName = "Scott";

console.log(myName);

// Question 3
function calculateArea(length, width) {
  area = length * width;
  document.write("This total area is " + area + "<br><br>");
}

calculateArea(100, 15);
calculateArea(25, 15);

// Question 4
// I made a button with a function because it made more sense to me that way

function changeTitle() {
  document.getElementById("practice").innerHTML = "Game of Thrones";
}

// Question 5
var favSeason = "spring";

switch(favSeason) {
  case "summer":
    document.write("In the summer I like to wear a tank top and flip flops");
    break;
  case "spring":
    document.write("In the spring I like to wear  a t-shirt and shorts");
    break;
  case "winter":
    document.write("In the winter I like to wear a beanie and jeans");
    break;
  case "fall":
    document.write("In the fall I better bring a jacket!");
    break;
  default:
      document.write("You haven't told me your favorite season!");
}

favSeason = "winter";
console.log(favSeason);