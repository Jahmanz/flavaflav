
 var iceCreamFlavors = ["Cherry Garcia","Vanilla", "Spumoni", "Americone Dream", "tonight's Dough"];

var countIceCream = 0;

$(document).ready(function() {
  $("button#flavors").click(function(event) {
    $("ul#flavorList").append("<li> I love " + iceCreamFlavors[countIceCream] + "!</li>");
      countIceCream ++;
        if (countIceCream === 5) {
          countIceCream = 0;
        };
  event.preventDefault();






  // var iceFlav = iceCreamFlavors.forEach(function(flavor) {  $("#flavorList").append(" I love " + " " + flavor + "!");

});
  });



// // business logic
// var iceCreamFlavors = ["cherry-garcia","vanilla", "spumoni", "americone-dream", "tonight's-dough"];
//
// var iceFlav = iceCreamFlavors.forEach(function(flavor) {
//   $("ul#flavors").prepend(flavor);
// });
//
// //user interface logic
//
// $(document).ready(function(event) {
//   $("button#clickFlavors").click(iceFlav(flavor) {}
//
//
//  event.preventDefault();
//   });


// $(document).ready(function() {
//   $("#")
//   iceCreamFlavors.forEach(function(flavor){
//     $("#flavors").text("I love " + flavor);
//   });
//
//   });
