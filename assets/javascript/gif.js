$(document).ready(function () {

  //Array of The Office characters 
  var topics = ["Michael Scott", "Pam Beesly", "Jim Halpert", "Dwight Schrute", "Kevin Malone",
    "Angela Martin", "Creed Bratton", "Kelly Kapoor", "Oscar Martinez", "Darryl Philbin",
  ];

  for (var i = 0; i < topics.length; i++) {
    var button = $("<button>").text(topics[i]);
    button.attr("data-character", topics[i]);
    button.addClass("character-button");
    $("#button-group").append(button);
  }

  // function displayGifs() {
  $(".character-button").on("click", function (event) {
    // Find out which button was clicked
    var character = $(this).attr("data-character");
    var queryURL = "http://api.giphy.com/v1/gifs/search?&q=" + encodeURI(character) + "&api_key=WRk4IbEQ1U0sBvm8f28l4WGuAeIAjjo7&limit=10";

    //Setting up the ajax call with parameter {queryURL, method} and making the ajax call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var results = response.data
      for (var i = 0; i < results.length; i++) {
        console.log(results[i].images.fixed_height.url);
        
        var gifDiv = $("<div>");
        var charImage = $("<img>");
       
      charImage.attr('src', results[i].images.fixed_height.url);
      

              gifDiv.prepend();
              gifDiv.prepend(charImage);

              $("#gifDiv").prepend(gifDiv);
      }
    });
  });
});