$('#sign-up-btn').on("click",function(e) {
    e.preventDefault();
    const first_name = $('#firstname').val();
    const last_name = $('#lastname').val();
    const password = $('#password').val();
    const email = $('#email').val();
    //Check if user did not fill all the field
    if (!first_name || !last_name || !password || !email) {
      $('#display_alert').html('please fill all the empty fields');
      return;
    }
    //ajax request to check if the user has already registered
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/users?email=${email}`,
      data: {
        email,
      },
      success: function(response) {
        if (response.length) {
          $('#display_alert').html('User already exist');
        } else {
          //Submit the user data if the user does not exist
          $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/users',
            data: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                first_name,
                last_name,
                email,
                password,
            },
            success: function() {
              $('#display_alert').html('your registration was Successfull');
            },
          });
        }
      },
    });
  });