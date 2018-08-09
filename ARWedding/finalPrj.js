// var display = false;

$('.storyBtn').click(function(e){
  e.preventDefault();
  $("#story").fadeToggle(function(){
    // var img1 = document.getElementsByClassName('bhangra')[0];
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
    // if(display !== true){
    //   display = true;
    // } else {
    //   display = false;
    //   img.style.left = "0px";
    //   startBhangraWalk();
    //   alert('boo')
    // }
  });
  $("#photo").hide();
  $("#info").hide();
  $("#sched").hide();
  $("#reg").hide();
  $(".bhangra").hide();
  $()
});
$('.photoBtn').click(function(e){
  e.preventDefault();
  $("#photo").fadeToggle(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  $("#story").hide();
  $("#info").hide();
  $("#sched").hide();
  $("#reg").hide();
  $(".bhangra").hide();
});
$('.infoBtn').click(function(e){
  e.preventDefault();
  $("#info").fadeToggle(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  $("#story").hide();
  $("#photo").hide();
  $("#sched").hide();
  $("#reg").hide();
  $(".bhangra").hide();
});
$('.schedBtn').click(function(e){
  e.preventDefault();
  $("#sched").fadeToggle(function(){
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});
  $("#story").hide();
  $("#photo").hide();
  $("#info").hide();
  $("#reg").hide();
  $(".bhangra").hide();
});
$('.regBtn').click(function(e){
  e.preventDefault();
  $("#reg").fadeToggle(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  $("#story").hide();
  $("#photo").hide();
  $("#info").hide();
  $("#sched").hide();
  $(".bhangra").hide();
});


// Closes hamburger menu when a link is clicked
$(".navbar-nav li a").click(function (event) {
  var toggle = $(".navbar-collapse").hasClass("show");
  if (toggle) {
    $(".navbar-toggler").click();
  }
});

//Baguette box
baguetteBox.run('.tz-gallery', {
  captions: function(element) {
    return element.getElementsByTagName('img')[0].alt;
}
});

var movePixels = 5;
var delayMs = 75;
function bhangraWalk() {
  var img = document.getElementsByClassName('bhangra')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
function startBhangraWalk() {
  window.setInterval(bhangraWalk, delayMs);
}
startBhangraWalk();

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
