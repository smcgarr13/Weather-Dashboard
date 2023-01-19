var APIKey = "15404f18b3dbebed7c99306dd880766d";
var city = "Los Angeles";

// api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}

// href="https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}";

// href="https://api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={APIKey}";

href="https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid={APIKey}&units=imperial";





// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// fetch(queryURL).then((response) => {
//     return response.json()
// }) .then((data) => {
//     console.log(data)
// })
// cityData = ({
//    temp: data.results[0].data.temp,
//    wind: data.results[0].data.wind,
//    humidity: data.results[0].data.humidity,
//  })



// var weatherDetails = document.querySelector("#weather-details")

 $(document).ready(function() {
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
   cityDate.text(data.name + data.timezone);
})

// fetch(queryURL).then((response) => {
//    return response.json()
// }) .then((data) => {
//    console.log(data.weather)
//    var listGroup = $("#list-group");
//    listGroup.text(data.weather);
// })

fetch(queryURL).then((response) => {
   return response.json()
}) .then((data) => {
   console.log(data.main.temp)
   var cityTemp = $("#city-temp");
   cityTemp.text("Temp: " + data.main.temp);
})

fetch(queryURL).then((response) => {
   return response.json()
}) .then((data) => {
   console.log(data.wind)
   var cityWind = $("#city-wind");
   cityWind.text("Wind: " + data.wind.speed);
})

fetch(queryURL).then((response) => {
   return response.json()
}) .then((data) => {
   console.log(data.main.humidity)
   var cityHumidity = $("#city-humidity");
   cityHumidity.text("Humidity: " + data.main.humidity);
})

fetch(queryURL).then((response) => {
   return response.json()
}) .then((data) => {
   console.log(data.main.humidity)
   var fiveDayForecast = $("#5-Day-Forecast");
   fiveDayForecast.text("5-day Forecast: " + data.cnt);
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