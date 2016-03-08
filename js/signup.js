$(function(){

	
	 

    $("#signup-submit").click(function() {
    	var myemail = $("#username").val();
    	var mypassword = $("#password").val();
    	console.log(email, password);

    	var ref = new Firebase("https://crackling-heat-8990.firebaseio.com");
    	ref.createUser({
 			 email    :  myemail,
 			 password : mypassword
		}, function(error, userData) {
  			if (error) {
    			console.log("Error creating user:", error);
  			} else {
    			console.log("Successfully created user account with uid:", userData.uid);
    			window.location.href="http://www.ruicongjin.com/AAU/signer";
  		}
		}); 
		return false;
	});

	$("#logout").click(function() {
		var ref = new Firebase("https://crackling-heat-8990.firebaseio.com");
		ref.unauth();
		window.location.href="http://www.google.com";
		// alert("already logged out!");
	});


    
});