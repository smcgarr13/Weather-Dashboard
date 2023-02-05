let APIKey = "15404f18b3dbebed7c99306dd880766d";
var city = "Los Angeles";
var buttonDiv = $("#button-div");
var cities = JSON.parse(localStorage.getItem("cities")) || [];

var forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  city +
  "&appid=" +
  APIKey +
  "&units=imperial";

$(document).ready(function () {
  // create dynamic buttons for previously searched cities
  for (let i = 0; i < cities.length; i++) {
    var button = $("<button>");
    button.text(cities[i]);
    buttonDiv.append(button);
    buttonDiv.on("click", getWeather);
  }

  // search for a city
  var searchButton = $("#search-button");
  searchButton.on("click", getWeather);

  function getWeather(event) {
    event.preventDefault();
    console.log("Button Works!!");
    console.log(event);
    if (event.target.innerText != "Search") {
      city = event.target.innerText;
    } else {
      city = $("#city-name").val();
    }
    console.log(city);

    // save to local storage
    if (cities.includes(city) == false || city == "") {
      var button = $("<button>");
      button.text(city);
      buttonDiv.append(button);
      cities.push(city);
      localStorage.setItem("cities", JSON.stringify(cities));
    }

    // Today's forecast
    $("#city-name").val("");
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      APIKey +
      "&units=imperial";
    console.log(queryURL);

    fetch(queryURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        var cityDate = $("#city-date");
        var date = new Date();
        cityDate.text(data.city.name + ": " + date.toLocaleDateString());
      });

    fetch(queryURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.list[0].weather[0].icon);
        var weatherIcon = $("#weather-icon");
        var iconURL =
          "https://openweathermap.org/img/wn/" +
          data.list[0].weather[0].icon +
          "@2x.png";
        weatherIcon.html("<img src='" + iconURL + "' alt='weather icon'>");
      });

    fetch(queryURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.list[0].main.temp);
        var cityTemp = $("#city-temp");
        cityTemp.text("Temp: " + data.list[0].main.temp);
      });

    fetch(queryURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.list[0].wind);
        var cityWind = $("#city-wind");
        cityWind.text("Wind: " + data.list[0].wind.speed);
      });

    fetch(queryURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.list[0].main.humidity);
        var cityHumidity = $("#city-humidity");
        cityHumidity.text("Humidity: " + data.list[0].main.humidity);
      });

    // 5-day forecast
    var forecastUrl =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      APIKey +
      "&units=imperial";
    // console.log(forecastUrl);

    fetch(forecastUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //   console.log(data)
        var fiveDayData = data.list.slice(0, 5);
        var weatherDivs = $(".weather-div");

        if (!fiveDayData) {
          console.error("forecast is undefined");
          return;
        }

        fiveDayData.forEach((_day, index) => {
          var forecastDate = new Date(data.list[8 * index].dt * 1000);
          var iconURL =
            "https://openweathermap.org/img/wn/" +
            data.list[8 * index].weather[0].icon +
            "@2x.png";
          var temperature = _day.main.temp;
          var wind = _day.wind.speed;
          var humidity = _day.main.humidity;
          var weatherDiv = $(weatherDivs[index]);

          weatherDiv
            .find("#forecast-date")
            .text(`${forecastDate.toLocaleDateString()}`);
          weatherDiv.find("#forecast-icon").attr("src", iconURL);
          weatherDiv.find("#forecast-temp").text(`Temp: ${temperature}`);
          weatherDiv.find("#forecast-wind").text(`Wind: ${wind}`);
          weatherDiv.find("#forecast-humidity").text(`Humidity: ${humidity}`);
        });
      });
  }
});
