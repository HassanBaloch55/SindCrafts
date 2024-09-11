 // login icons code
 $(document).ready(function () {
    $('.toggle-password').click(function () {
      // Toggle password visibility
      var passwordField = $('#password');
      var passwordFieldType = passwordField.attr('type');

      if (passwordFieldType === 'password') {
        passwordField.attr('type', 'text');
        $('.toggle-password i').removeClass('fa-solid fa-lock').addClass('fa-solid fa-unlock'); // Change to 'hide' icon
      } else {
        passwordField.attr('type', 'password');
        $('.toggle-password i').removeClass('fa-solid fa-unlock').addClass('fa-solid fa-lock'); // Change to 'show' icon
      }
    });
  });

  $(document).ready(function () {
    $('.toggle-password2').click(function () {
      // Toggle password visibility
      var passwordField = $('#pass2');
      var passwordFieldType = passwordField.attr('type');

      if (passwordFieldType === 'password') {
        passwordField.attr('type', 'text');
        $('.toggle-password2 i').removeClass('fa-solid fa-lock').addClass('fa-solid fa-unlock'); // Change to 'hide' icon
      } else {
        passwordField.attr('type', 'password');
        $('.toggle-password2 i').removeClass('fa-solid fa-unlock').addClass('fa-solid fa-lock'); // Change to 'show' icon
      }
    });
  });

  
//    end script code login page