let APIKey = "15404f18b3dbebed7c99306dd880766d";
let forecastAPIKey = "87840c16880ca059b6cec989a297f47b";
var city = "Los Angeles";
var buttonDiv = $("#button-div");
var cities = JSON.parse(localStorage.getItem("cities"))||[];

var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";

// var weatherDetails = document.querySelector("#weather-details")

 $(document).ready(function() {

   for (let i = 0; i < cities.length; i++) {
      var button = $("<button>");
   button.text(cities[i]);
   buttonDiv.append(button);
   buttonDiv.on("click", getWeather)
   };

    // add listner for click events
    var searchButton = $("#search-button")
    searchButton.on("click", getWeather)

function getWeather(event) {
    event.preventDefault();
    console.log("Button Works!!");
    console.log(event);
    if (event.target.innerText != "Search") {
      city = event.target.innerText;
    }
    else {
      city = $("#city-name").val();
    }
    console.log(city);
//   console.log($(this).prev().val());
// save to local storage
if (cities.includes(city)==false || city == ""){
   var button = $("<button>");
   button.text(city);
   buttonDiv.append(button);
   cities.push(city);
   localStorage.setItem("cities", JSON.stringify(cities))
}

// $("#city-name").val("");
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
// console.log(queryURL)

$("#city-name").val("");
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";
console.log(queryURL)

fetch(queryURL).then((response) => {
   return response.json();
 })
 .then((data) => {
   console.log(data);
   var cityDate = $("#city-date");
   var date = new Date();
   cityDate.text(data.city.name + ": " + date.toLocaleDateString());
 });



fetch(queryURL).then((response) => {
   return response.json()
}) .then((data) => {
   console.log(data.list[0].weather[0].icon)
   var weatherIcon = $("#weather-icon");
   var iconURL = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
   weatherIcon.html("<img src='" + iconURL + "' alt='weather icon'>");
})

fetch(queryURL).then((response) => {
   return response.json()
}) .then((data) => {
   console.log(data.list[0].main.temp)
   var cityTemp = $("#city-temp");
   cityTemp.text("Temp: " + data.list[0].main.temp);
})

fetch(queryURL).then((response) => {
   return response.json()
}) .then((data) => {
   console.log(data.list[0].wind)
   var cityWind = $("#city-wind");
   cityWind.text("Wind: " + data.list[0].wind.speed);
})

fetch(queryURL).then((response) => {
   return response.json()
}) .then((data) => {
   console.log(data.list[0].main.humidity)
   var cityHumidity = $("#city-humidity");
   cityHumidity.text("Humidity: " + data.list[0].main.humidity);
})

// 5-day forecast
var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";
// console.log(forecastUrl);
 
fetch(forecastUrl).then((response) => {
   return response.json()
 }).then((data) => {
 //   console.log(data)
   var fiveDayData = data.list.slice(0, 5);
   var weatherDivs = $(".weather-div");
   
   if (!fiveDayData) {
     console.error('forecast is undefined');
     return;
   }
 
   fiveDayData.forEach((_day, index) => {
    //  var date = new Date(data.list[0].dt * 1000);
    //  var temperature = data.list[0].main.temp;
    //  var wind = data.list[0].wind.speed;
    //  var humidity = data.list[0].main.humidity;
     var forecastDate = new Date(data.list[0].dt * 1000);
     var iconURL = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
     var temperature = _day.main.temp;
     var wind = _day.wind.speed;
     var humidity = _day.main.humidity;
     var weatherDiv = $(weatherDivs[index]);
 
     weatherDiv.find("#forecast-date").text(`${forecastDate}`);
     weatherDiv.find("#forecast-icon").attr("src", iconURL);
     weatherDiv.find("#forecast-temp").text(`Temp: ${temperature}`);
     weatherDiv.find("#forecast-wind").text(`Wind: ${wind}`);
     weatherDiv.find("#forecast-humidity").text(`Humidity: ${humidity}`);
   });
 });


// // Create an array to store the cards for each day
// var cards = [];

// fetch(queryURL).then((response) => {
//    return response.json()
// }) .then((data) => {
//    console.log(data.list);

//    // Extract the relevant data from the data.list object
//    var date = new Date();
//    for (var i = 0; i < data.list.length; i++) {
//       var day = new Date(data.list[i].dt * 1000).getUTCDate();
//       // Check if we have reached a new day
//       if (day !== date.getUTCDate()) {
//          // Store the data for this day
//          var card = {
//             day: new Date(data.list[i].dt * 1000).toLocaleDateString(),
//             temp: data.list[i].main.temp,
//             icon: data.list[i].weather[0].icon,
//          };
//          cards.push(card);
//          date = new Date(data.list[i].dt * 1000);
//       }
//    }

//    // Display the cards for each day
//    for (var i = 0; i < cards.length; i++) {
//       // Create the HTML for the card
//       var cardHTML = "<div class='card'>";
//       cardHTML += "<h5 class='card-title'>" + cards[i].day + "</h5>";
//       cardHTML += "<img src='https://openweathermap.org/img/wn/" + cards[i].icon + "@2x.png' alt='weather icon'>";
//       cardHTML += "<p class='card-text'>Temp: " + cards[i].temp + "</p>";
//       cardHTML += "</div>";

//       // Append the HTML to the page
//       $("#forecast-div").append(cardHTML);
//    }
// });


// fetch(queryURL).then((response) => {
//    return response.json()
// }) .then((data) => {
//    console.log(data.list[0].weather[0].icon)
//    var weatherIcon = $("#weather-icon");
//    var iconURL = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
//    weatherIcon.html("<img src='" + iconURL + "' alt='weather icon'>");
// })


}

});
 
