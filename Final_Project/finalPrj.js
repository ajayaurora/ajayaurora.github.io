$('.storyBtn').click(function(e){
  e.preventDefault();
  $("#story").fadeToggle();
  $("#photo").hide();
});
$('.photoBtn').click(function(e){
  e.preventDefault();
  $("#photo").fadeToggle();
  $("#story").hide();
});

// $('.storyBtn').on('click',
//   function(e){
//   e.preventDefault();
//   $("#story").fadeToggle();
// });

// $('.photoBtn').on('click',
//   function(e){
//   e.preventDefault();
//   $("#photo").fadeToggle();
// });

// $('#story').hide();
// $('.photoBtn').on('click',
//   function(e) {
//     e.preventDefault();
//     $('#story, #photo').toggle(200);
//   }
// );


// $("#story").hide();
// $("#photo").hide();
//
//
// $(".storyBtn").click(function(){
//     $("#story").toggle();
//     $("#photo").hide();
// });
// $(".photoBtn").click(function(){
//     $("#photo").toggle();
//     $("#story").hide();
// });
