$(document).ready(() => {

// Array of favorite foods
var foods = ["ice cream", "peanut  butter", "cookies", "pizza", "pie", "donuts", "pasta"]

// Function for creating buttons for the different foods when the page loads
var createButtons = function() {

    $("#gif-buttons").empty();

    for (var i = 0; i < foods.length; i++) {
        var create = $("<button>");
        create.addClass("btn btn-success");
        create.attr("id", "category");
        create.attr("data-item", foods[i]);
        create.text(foods[i]);
        $("#gif-buttons").append(create);
    }
};

// Click event to add a users favorite food to the array
$("#add-food").on("click", function() {

    event.preventDefault();

    var newFood = $("#new-food").val().trim();
    foods.push(newFood);
    createButtons();
})

// Creating a click event for the category buttons
$("#category").on("click", function() {

var item = $(this).attr("data-item");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + item + "&api_key=JxsL9Labq5Ixvtcc2cdoaKZC5Y9i3Dxf&limit=10";

$.ajax({
    url: queryURL,
    method: "GET",
})
    .then(function(response) {
        var results = response.data;
        
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='gif'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var itemImage = $("<img>");
            itemImage.attr("src", results[i].images.fixed_height_still.url);
            itemImage.attr("data-still", results[i].images.fixed_height_still.url);
            itemImage.attr("data-animate", results[i].images.fixed_height.url);
            itemImage.attr("data-state", "still");
            itemImage.addClass("gif");
            gifDiv.prepend(p);
            gifDiv.prepend(itemImage);
            $("#gifs-show-here").prepend(gifDiv);
        }
    });
});

// A click event to play the gifs
$(".gif").on("click", function() {
    
    var gifState = $(this).attr("data-state");

    if (gifState === "still") {
        $(this).attr("scr", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("scr", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

// Calling functions
createButtons();

});