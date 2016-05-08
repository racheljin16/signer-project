$(function(){

    $("#signup-submit").click(function() {
      var myemail = $("#username").val();
      var mypassword = $("#password").val();
      // console.log(email, password);

      var ref = new Firebase("https://blinding-fire-5487.firebaseio.com/?page=Auth");
      ref.createUser({
       email    :  myemail,
       password : mypassword
    }, function( error, userData ) {
        if (error) {
          // console.log("Error creating user:", error);
          alert("You did not enter your information correctly. Please try again.");
        } else {
          // console.log("Successfully created user account with uid:", userData.uid);
          localStorage.setItem("Greeting",  myemail);
          localStorage.setItem("Quiz1", "NA");
          localStorage.setItem("Quiz2", "NA");
          localStorage.setItem("Quiz3", "NA");
          localStorage.setItem("Quiz4", "NA");
          localStorage.setItem("Q1Moves", 0);
          localStorage.setItem("Q1Results", 0);
          
          window.location.href="index.html";
      }
    }); 
    return false;
  });

      // log in
  $("#login-submit").click(function() {
      var myemail = $("#username").val();
      var mypassword = $("#password").val();
      // console.log(myemail, mypassword);

      var ref = new Firebase("https://blinding-fire-5487.firebaseio.com/?page=Auth");
      ref.authWithPassword({
         email    :  myemail,
         password : mypassword
       }, function( error, result ) {
        if (error) {
          alert("You did not enter your information correctly. Please try again.");
          // console.log("Authentication Failed!", error);
        } else {
          // console.log("Authenticated successfully with payload:", result.auth);
          // console.log("Auth expires at:", new Date(result.expires * 1000));
          // alert(myemail);
          localStorage.setItem("Greeting", " back, " + myemail);
          window.location.href="index.html";
        }
      })
    return false;
    });

  // Log out
  
   

    $("#signup-submit").click(function() {
      var myemail = $("#username").val();
      var mypassword = $("#password").val();
      console.log(email, password);

      var ref = new Firebase("https://blinding-fire-5487.firebaseio.com/?page=Auth");
      ref.createUser({
       email    :  myemail,
       password : mypassword
    }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          localStorage.setItem("Greeting"," back," + myemail);
          localStorage.setItem("Quiz1", "NA");
          localStorage.setItem("Quiz2", "NA");
          localStorage.setItem("Quiz3", "NA");
          localStorage.setItem("Quiz4", "NA");
          localStorage.setItem("Q1Moves", 0);
          localStorage.setItem("Q1Results", 0);
          
          window.location.href="index.html";
      }
    }); 
    return false;
  });

  $("#logout").click(function() {
    var ref = new Firebase("https://blinding-fire-5487.firebaseio.com/?page=Auth");
    ref.unauth();
    localStorage.setItem("Greeting", "");
    console.log(localStorage.Greeting);
    window.location.href="index.html";
  });


    
});