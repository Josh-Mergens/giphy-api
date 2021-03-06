$(function() {

  // creat variables for topics array and DOM elements intended for manipulation
  // famous punk band front people for jumping off point
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

      for (var i = 0; i < response.data.length; i++) {
        response.data[i]

        // generate div for holding of gifs
        var gifDiv = $("<div class='gifs'>");

        // variable for holding of ratings
        var ratings = response.data[i].rating;

        // generate element for ratings display
        var ratingP = $("<p>").text("Rating: " + ratings.toUpperCase());

        // for to display rating
        gifDiv.append(ratingP);

        // retrieve url for gifs
        var gifURL = response.data[i].images.fixed_height_still.url;
        var animaURL = response.data[i].images.fixed_height.url;

        // element for holding of gif images
        var image = $("<img>").attr("src", gifURL);

        //for to display images
        gifDiv.append(image);

        $("#gif-view").prepend(gifDiv);

      };

    });
  };


  // function to add #input-field submissions to topics array
  $("#add-topic").on("click", function(event) {
    event.preventDefault();
    // store user input and trim
    var addTopic = uInput.val().trim();

    // add user input to array
    topics.push(addTopic);

    // call generateButts to process array
    generateButts();
  });

    // function to change static image to animated gif when image clicked
    // animated gif should revert to still image when clicked again, etc.

  // click event listener for topic buttons
  $(document).on("click", ".topic", gifAjacked);

  generateButts();
});
