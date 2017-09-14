$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height >= 46) {
    console.log("made it into if");
    $('#ride1').addClass("tallEnough");
    $('#ride2').addClass("tallEnough");
    $('#ride3').addClass("tallEnough");
    $('#ride4').addClass("tallEnough");
    $('#ride5').addClass("tooTall");
  }
  else if (height >= 40 && height < 46) {
     $('#ride1').addClass("tooShort");
     $('#ride2').addClass("tooShort");
     $('#ride3').addClass("tallEnough");
     $('#ride4').addClass("tallEnough");
     $('#ride5').addClass("tooTall");
  }
  else if (height >= 36 && height < 40) {
     $('#ride1').addClass("tooShort");
     $('#ride2').addClass("tooShort");
     $('#ride3').addClass("tallEnough");
     $('#ride4').addClass("tallEnough");
     $('#ride5').addClass("tallEnough");
  }
  else if (height >= 20 && height < 36) {
     $('#ride1').addClass("tooShort");
     $('#ride2').addClass("tooShort");
     $('#ride3').addClass("tooShort");
     $('#ride4').addClass("tooShort");
     $('#ride5').addClass("tallEnough");
  }
  else {
    $('#ride1').addClass("tooShort");
    $('#ride2').addClass("tooShort");
    $('#ride3').addClass("tooShort");
    $('#ride4').addClass("tooShort");
    $('#ride5').addClass("tooShort");
  }
});
