$(document).ready(function () {

//Array of The Office characters 
var topics = ["Michael Scott", "Pam Beesly", "Jim Halpert", "Dwight Schrute", "Kevin Malone",
 "Angela Martin", "Creed Bratton", "Kelly Kapoor", "Oscar Martinez", "Darryl Philbin",
];

for(var i = 0; i< topics.length; i++) {
  var button = $("<button>").text(topics[i]);
  button.attr("data-characters", topics[i]);
  button.addClass("character-button");
  $("#button-group").append(button);
}

function displayGifs() {
var characters = $(this).attr("data-characters");
    
var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + characters + "&api_key=WRk4IbEQ1U0sBvm8f28l4WGuAeIAjjo7&limit=10";


//Setting up the ajax call with parameter {queryURL, method} and making the ajax call
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.data
        for (var i = 0; i < results.length; i++) {
       

      }
  
    })

    }
})