$(document).ready(function () {

  $('form').on("submit", function(event) {
    var password = $("input[name=password]").val();
    var email = $("input[name=email]").val();

  if (!email.match(/@/)){
    event.preventDefault();
    $("#errors").append("Email must be valid<br>");
  }
    if (password.length < 8){
      event.preventDefault();
      $("#errors").append("Password must be at least 8 characters long<br>");
  }
    if (!password.match(/[A-Z]/)){
      event.preventDefault();
      $("#errors").append("Password must contain at least 1 capital letter<br>");
  }
    if (!password.match(/\d/)){
      event.preventDefault();
      $("#errors").append("Password must contain at least 1 numerical character(0-9)");
    }
  });
});
