$('.storyBtn').click(function(e){
  e.preventDefault();
  $("#story").fadeToggle();
  $("#photo").hide();
  $("#info").hide();
  $("#sched").hide();
  $("#reg").hide();
});
$('.photoBtn').click(function(e){
  e.preventDefault();
  $("#photo").fadeToggle();
  $("#story").hide();
  $("#info").hide();
  $("#sched").hide();
  $("#reg").hide();
});
$('.infoBtn').click(function(e){
  e.preventDefault();
  $("#info").fadeToggle();
  $("#story").hide();
  $("#photo").hide();
  $("#sched").hide();
  $("#reg").hide();
});
$('.schedBtn').click(function(e){
  e.preventDefault();
  $("#sched").fadeToggle();
  $("#story").hide();
  $("#photo").hide();
  $("#info").hide();
  $("#reg").hide();
});
$('.regBtn').click(function(e){
  e.preventDefault();
  $("#reg").fadeToggle();
  $("#story").hide();
  $("#photo").hide();
  $("#info").hide();
  $("#sched").hide();
});

// Closes hamburger menu when a link is clicked
$(".navbar-nav li a").click(function (event) {
  var toggle = $(".navbar-collapse").hasClass("show");
  if (toggle) {
    $(".navbar-toggler").click();
  }
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
