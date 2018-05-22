$('.submitBtn').click(function(){
  var cardHolder = $('#cardholder-name').val();

  if(!cardHolder){
    alert('Please enter your credit card information.');
  } else{
    alert('Thank you ' + cardHolder + ' for your donation.');
  }
});
