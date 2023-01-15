var APIKey = "15404f18b3dbebed7c99306dd880766d";
var city;

// api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}

href="https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// fetch(queryURL)



var searchButton = document.querySelector("#search-button")
// var weatherDetails = document.querySelector("#weather-details")

 $(document).ready(function () {
    // add listner for click events
    $("searchButton").on("click", function () {
       console.log("Button Works!!");
    //   console.log($(this).prev().val());
      // save to local storage
      var weatherDetails = $(this).val();
      localStorage.setItem(weatherDetails, $(this).prev().val());
    });
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