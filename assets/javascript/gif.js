$(document).ready(function () {

//Array of The Office characters 
var topics = ["Michael Scott", "Pam Beesly", "Jim Halpert", "Dwight Schrute", "Kevin Malone",
  "Angela Martin", "Creed Bratton", "Kelly Kapoor", "Oscar Martinez", "Darryl Philbin",
];

function renderButtons() {
  $('#button-group').empty('')
  for (var i = 0; i < topics.length; i++) {
    var button = $("<button>").text(topics[i]);
    button.attr("data-character", topics[i]);
    button.addClass("character-button");
    $("#button-group").append(button);
  }
}

$('#add-character-button').on('click', function (event) {
  event.preventDefault();
  console.log('this works')
  var newCharacter = $('#new-character-input').val().trim()
  topics.push(newCharacter)
  
})
renderButtons();
$(".character-button").on("click", function () {
  // Find out which button was clicked
  var character = $(this).attr("data-character");
  var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + encodeURI(character) + "&api_key=WRk4IbEQ1U0sBvm8f28l4WGuAeIAjjo7&limit=10";

  //Setting up the ajax call with parameter {queryURL, method} and making the ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var results = response.data
    for (var i = 0; i < results.length; i++) {

      var gifDiv = $("<div>");
      var ratingDiv = $("<p>");
      ratingDiv.text(results[i].rating);
      var charImage = $("<img>");

      charImage.attr("data-state", "still")
      charImage.attr('src', results[i].images.original_still.url)
      charImage.addClass('gifImg')
      charImage.attr("data-still", results[i].images.original_still.url)
      //charImage.attr("data-animate", results[i].images.original.url)​
      $("#gifDiv").append(charImage)
      $("#gifDiv").append(gifDiv);

    }
    
  });
  
});

$(document).on("click", ".gifImg", function () {
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } 
  else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
  console.log(state)

});

});
