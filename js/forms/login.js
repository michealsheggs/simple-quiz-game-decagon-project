// check if user is login
$(document).ready(function() {
    //Check if there is any user data stored in the local storage
    //because user data is stored in localstorage at login
    let user = window.localStorage.getItem('email');
      //If no user data, redirect to signup/login page, anyone you like
      $('.loginbtn').on('click',function(e){
        e.stopPropagation();
        if (!user) {
        $('.checkLogin').html('Kindly Log in');
        // window.location = '../forms/signup.html';
        }
      });
    
    if(user){
      $(".loginbtn").hide();
        $('.checkLogin').html('You are logged in');

          // window.location = "../index.html";
  
    }   
  });




//Login Function
$('#login-btn').click(function(e) {
    e.preventDefault();
    const loginPassword = $('#loginpassword').val();
    const loginEmail = $('#loginemail').val();
    if (!loginPassword || !loginEmail) {
      $('.#display_alert').html('Kindly fill in all fields');
      return;
    }
    //Check if the user is in the database
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/users?email=${loginEmail}&password=${loginPassword}`,
      data: {
        email: loginEmail,
        password: loginPassword,
      },
      success: function(response) {
        if (response.length) {
          $('#display_alert').html('Login sucessful');
          $('.checkLogin').html('You are logged in');
          localStorage.setItem('email', loginEmail);
          //redirect to home page if the login is successfull
          window.location.assign('../index.html');
          $('.loginbtn, signupbtn').set('display:none');;
        } else {
          $('#display_alert').html('Username or password Incorrect');
        }
      },
    });
  });