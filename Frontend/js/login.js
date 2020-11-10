$(document).ready(function(){
  $("#login-form").submit(function(e){
    var email = $("#login-email").val();
    var password = $("#login-password").val();
    var valid = (email != "") && (password != "");

    $("#login-email").css("border-color", "");
    $("#login-password").css("border-color", "");

    if (email == ""){
      $("#login-email").css("border-color", "red");
    }
    if (password ==""){
      $("#login-password").css("border-color", "red");
    }
    return valid;
  });

  $("#register-form").submit(function(e){
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var email = $("#register-email").val();
    var password = $("#register-password").val();
    var valid = (firstName!="") && (lastName!="") && (email!="") && (password!="");

    $("#first-name").css("border-color", "");
    $("#last-name").css("border-color", "");
    $("#register-email").css("border-color", "");
    $("#register-password").css("border-color", "");

    if (firstName == ""){
      $("#first-name").css("border-color", "red");
    }
    if (lastName == ""){
      $("#last-name").css("border-color", "red");
    }
    if (email == ""){
      $("#register-email").css("border-color", "red");
    }
    if (password ==""){
      $("#register-password").css("border-color", "red");
    }
    return valid;
  });
});
