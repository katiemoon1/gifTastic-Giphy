$(document).ready(() => {

// Creating a click event for the category buttons
$("button").on("click", function() {
    var item = $(this).attr("data-item");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + item + "&api_key=JxsL9Labq5Ixvtcc2cdoaKZC5Y9i3Dxf&limit=10"
})










});