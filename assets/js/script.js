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

      // button will show text from array item
      butts.text(topics[i]);

      // add button to topic-div
      topicDiv.append(butts);

    };

  };

  // when topic button clicked, generate 10 static gifs using Giphy API and add to page

  // when static gif is clicked, it should animate, if clicked again gif should revert to static

  // function to add #input-field submissions to topics array
generateButts();
});
