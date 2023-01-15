var APIKey = "15404f18b3dbebed7c99306dd880766d";
var city = "Los Angeles";

// api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}

href="https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}";

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// fetch(queryURL).then((response) => {
//     return response.json()
// }) .then((data) => {
//     console.log(data)
// })




// var weatherDetails = document.querySelector("#weather-details")

 $(document).ready(function () {
    // add listner for click events
    var searchButton = $("#search-button")
    searchButton.on("click", getWeather)

function getWeather(event) {
    event.preventDefault();
    console.log("Button Works!!");
//   console.log($(this).prev().val());
// save to local storage
city = $("#city-name").val();
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL).then((response) => {
   return response.json()
}) .then((data) => {
   console.log(data)
   var cityDate = $("#city-date");
   cityDate.text(data.name);
})
}
 });
  // get user input that was saved in localStorage
//   var textAreas = $(".description");
//   console.log(textAreas);
//   for (let i = 0; i < 9; i++) {
//     console.log("message");
//     var description = $(".description")[i];
//     console.log(description);
//     description.value = localStorage.getItem(i + 9);
//   }


// event.preventDefault();
// console.log("Button Works!!");
// //   console.log($(this).prev().val());
// // save to local storage
// city = $("#city-name").val();
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// fetch(queryURL).then((response) => {
//    return response.json()
// }) .then((data) => {
//    console.log(data)
// })
// //   localStorage.setItem(weatherDetails, $(this).prev().val());
// });