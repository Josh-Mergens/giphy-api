$(function() {

  // creat variables for topics array and DOM elements intended for manipulation
  var topics = ["danzig", "jello biafra", "henry rollins"];
  var topicDiv = $("#topic-butts");
  var uInput = $("#input-field");

  // function to take topics array and turn each item into buttons on page
  function generateButts() {
    topicDiv.empty();

    // loop through topics array
    for (var i = 0; i < topics.length; i++) {

      // assign variable to generate button
      var butts = $("<button>");

      // add class to button
      butts.addClass("topic");

      //add data attribute
      butts.attr("data-name", topics[i])

      // button will show text from array item
      butts.text(topics[i]);

      // add button to topic-div
      topicDiv.append(butts);

    };

  };

  //set up variables and function for GIPHY ajax calls on button click


  function gifAjacked() {

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=SYfiTu3IpJc80rWFNj6exVSIGc7aggo0&limit=10"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // generate div for holding of gifs
      var gifDiv = $("<div class='gifs'>");

      // variable for holding of ratings
      var rating = response.rating

      // generate element for ratings display
      var ratingP = $("<p>").text("Rating: " + rating);

      // for to display rating
      gifDiv.append(ratingP);

      // element for holding of gif images
      var image = $("<img>").attr("src", gif);

      //for to display images
      gifDiv.append(image)

      // when topic button clicked, generate 10 static gifs using Giphy API and add to page

    });
  };
  // when static gif is clicked, it should animate, if clicked again gif should revert to static

  // function to add #input-field submissions to topics array
  $("#add-topic").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var addTopic = $("#input-field").val().trim();

    // Adding movie from the textbox to our array
    topics.push(addTopic);

    // Calling renderButtons which handles the processing of our movie array
    generateButts();
  });

generateButts();
});
