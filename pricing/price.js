 $(document).ready(function(){

    $.validator.addMethod('strongPassword', function(value, element) {
        return this.optional(element) 
          || value.length >= 6
          && /\d/.test(value)
          && /[a-z]/i.test(value);
      }, 'Your password must be at least 6 characters long and contain at least one number and one char\'.')
      $("#registry").validate({
        rules: {

            username: {
                required: true,
                digits:false,
                lettersonly: true
              },
              fname: {
                required: true,
                lettersonly: true
              },
              email: {
                required: true,
                email: true,
              },
              pwd: {
                required: true,
                strongPassword: true
              },

              remember: {
                required: true
              }



        }




      });

    window.onbeforeunload = function () {
        var fathername = document.getElementById('fathername');
        var email = document.getElementById('email');
        var password = document.getElementById('pwd');
        var username = document.getElementById('username');
        var remember = document.getElementsByName('remember')[0];
        if (username.value != "" || email.value != "" || password.value != "" || fathername.value != "" || remember.checked) {
            return "You Cannot Saved your work  ! ";
        }
    }





    document.addEventListener('contextmenu', event => event.preventDefault());



















 });
 
 
 