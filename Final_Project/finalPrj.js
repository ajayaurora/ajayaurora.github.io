$('.storyBtn').click(function(e){
  e.preventDefault();
  $("#story").fadeToggle();
  $("#photo").hide();
  $("#info").hide();
  $("#sched").hide();
});
$('.photoBtn').click(function(e){
  e.preventDefault();
  $("#photo").fadeToggle();
  $("#story").hide();
  $("#info").hide();
  $("#sched").hide();
});
$('.infoBtn').click(function(e){
  e.preventDefault();
  $("#info").fadeToggle();
  $("#story").hide();
  $("#photo").hide();
  $("#sched").hide();
});
$('.schedBtn').click(function(e){
  e.preventDefault();
  $("#sched").fadeToggle();
  $("#story").hide();
  $("#photo").hide();
  $("#info").hide();
});
$('.regBtn').click(function(e){
  e.preventDefault();
  $("#reg").fadeToggle();
  $("#story").hide();
  $("#photo").hide();
  $("#info").hide();
  $("#sched").hide();
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
