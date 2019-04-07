function register()
{

    var result=1;

    {
    var name=document.getElementById('name');
    var error=document.getElementsByClassName('error');
    if(name.value.length==""||name.value.length==null)
    {
        error[0].style.display="block";
        error[0].innerHTML="Please Enter Applicant's Name";
        var result=0;
    }
    else
    {
        if(name.value.length<3&&name.value.length>0)
        {
            error[0].style.display="block";
            error[0].innerHTML="Please Enter Full Applicant's Name";
            var result=0;
        }
        else
        {
            error[0].style.display="none";
        }
    }













    var birth=document.getElementById('birth')
    if(birth.value.length==""||birth.value==""||birth.value.length==null)
    {
        error[1].style.display="block";
        error[1].innerHTML="Please Enter Your Date Of birth";
        var result=0;
    }
    else
    {
        error[1].style.display="none";
    }




    var optradio=document.getElementsByName('optradio');
    var flag=1;
    for(var i in optradio)
    {
        if(optradio[i].checked)
        {
            flag=0;
        }
        
    }

    if(flag==1)
    {
        error[2].style.display="block";
        error[2].innerHTML="Please Select Gender Field";
        var result=0;
    }
    else
    {
        error[2].style.display="none";
    }



    var countries=document.getElementById('countries');
    if(countries.value=="default")
    {
        error[3].style.display="block";
        error[3].innerHTML="Please Select Country Field";
        var result=0;
    }
    else{
        error[3].style.display="none";
    }


    var pass=document.getElementById('pass');
    var style=window.getComputedStyle(pass).getPropertyValue('display');
    var passport=document.getElementById('passport');
    if(style=="block")
    {
        if(passport.value.length==""||passport.value.length==null)
        {
            error[4].style.display="block";
            error[4].innerHTML="Please Enter Your Country Passport";
            var result=0;
        }
        else
        {
            if(passport.value.length>0&&passport.value.length<8)
            {
                error[4].style.display="block";
                error[4].innerHTML="Please Enter Full Country Passport";
                var result=0;
            }
            else
            {
                error[4].style.display="none";
            }
        }
    }




    var cell=document.getElementById('cell');
    if(cell.value.length==null||cell.value.length=="")
    {
        error[5].style.display="block";
        error[5].innerHTML="Please Enter Applicant's Cell Phone";
        var result=0;
    }
    else
    {
        if(cell.value.length<11)
        {
            error[5].style.display="block";
            error[5].innerHTML="Please Enter Full Cell Phone";
            var result=0;
        }
        else
        {
            error[5].style.display="none";
        }
    }



    var religion=document.getElementById('religion');
    if(religion.value.length==""||religion.value.length==null)
    {
        error[6].style.display="block";
        error[6].innerHTML="Please Enter Your Religion";
        var result=0;
    }
    else
    {
        error[6].style.display="none";
    }




    var email=document.getElementById("email");
    var user_value=email.value;
    var atindex=user_value.indexOf('@');
    var dotindex=user_value.lastIndexOf('.');
    var mindex=user_value.lastIndexOf('m');
   var gindex;

   if(email.value.length==""||email.value.length==null)
   {
    error[7].style.display="block";
    error[7].innerHTML="Please Enter Email-Address";
    var result=0;
   }
   else
   {
    
    if(dotindex-atindex!=6|| mindex-dotindex!=3 || atindex<5)
        {
            
            error[7].style.display="block";
            error[7].innerHTML="Please Enter Valid Email-Address";
            var result=0;
        }
    else
        {
            error[7].style.display="none";
        }
    }




    var cemail=document.getElementById("cemail");
    var user_value1=cemail.value;
    var atindex1=user_value1.indexOf('@');
    var dotindex1=user_value1.lastIndexOf('.');
    var mindex1=user_value1.lastIndexOf('m');
   var gindex1;

   if(cemail.value.length==""||cemail.value.length==null)
   {
    error[8].style.display="block";
    error[8].innerHTML="Please Enter Confirm Email-Address";
    var result=0;
   }
   else
   {
    
    if(dotindex1-atindex1!=6|| mindex1-dotindex1!=3 || atindex1<5)
        {
            
            error[8].style.display="block";
            error[8].innerHTML="Please Enter Valid Confirm Email_Adress";
            var result=0;
        }
    else
        {
            error[8].style.display="none";
        }
    }

    if(email.value===cemail.value)
    {
        error[9].style.display="none";
        
    }
    else
    {
        error[9].style.display="block";
        error[9].innerHTML="Please Confirm Email Address";
        var result=0;
    }




    var password1=document.getElementById('password1');
    if(password1.value.length==null||password1.value.length=="")
    {
        error[10].style.display="block";
        error[10].innerHTML="Please Enter Email Password ";
        var result=0;
    }
    else
    {
        if(password1.value.length<8&&password1.value.length>0)
        {
            error[10].style.display="block";
            error[10].innerHTML="Password Atleast 8 Characters ";
            var result=0;
        }
        else
        {
            error[10].style.display="none";
            
        }



    }














        var password2=document.getElementById('password2');
        if(password2.value.length==null||password2.value.length=="")
        {
            error[11].style.display="block";
            error[11].innerHTML="Please Enter Confirm  Password ";
            var result=0;
        }
        else
        {
            if(password2.value.length<8&&password2.value.length>0)
            {
                error[11].style.display="block";
                error[11].innerHTML="Password Atleast 8 Characters ";
                var result=0;
            }
            else
            {
                error[11].style.display="none";
                
            }
    }





    if(password1.value===password2.value)
    {
        error[12].style.display="none";
    }
    else
    {
         error[12].style.display="block";
         error[12].innerHTML="Confirm Password Must Be Same ";
         var result=0;
         
    }




    var fname=document.getElementById('fname');
    if(fname.value.length==""||fname.value.length==null)
    {
        error[13].style.display="block";
        error[13].innerHTML="Please Enter Father's Name ";
        var result=0;
    }
    else
    {
        if(fname.value.length>0&&fname.value.length<3)
        {
            error[13].style.display="block";
            error[13].innerHTML="Please Enter Full Father's Name ";
            var result=0;
        }
        else
        {
            error[13].style.display="none";
        }
    }


    var fcnic=document.getElementById('fcnic');

    if(fcnic.value.length==null||fcnic.value.length=="")
    {
        error[14].style.display="block";
        error[14].innerHTML="Please Enter Father's Cnic Number ";
        var result=0;
    }
    else
    {
        if(fcnic.value.length>0&&fcnic.value.length<13)
        {
            error[14].style.display="block";
            error[14].innerHTML="Please Enter Full Father's Cnic Number ";
            var result=0;
        }
        else
        {
            error[14].style.display="none";
        }
    }




    var fcell=document.getElementById('fcell');
    if(fcell.value.length==null||fcell.value.length=="")
    {
        error[15].style.display="block";
        error[15].innerHTML="Please Enter Father's Cell Number ";
        var result=0;
    }
    else
    {
        if(fcell.value.length>0&& fcell.value.length<11)
        {
            error[15].style.display="block";
            error[15].innerHTML="Please Enter Full Father's Cell Number ";
            var result=0;
        }
        else
        {
            error[15].style.display="none";
        } 
    }





    var above = document.getElementsByClassName('above');
     
        if (above[0].disabled == true && above[1].disabled == true && above[2].disabled == true && above[3].disabled == true) {
            error[16].style.display="none";
            error[17].style.display="none";
            error[18].style.display="none";
            error[19].style.display="none";
        }
        else {
            if(above[0].value.length==null||above[0].value.length=="")
            {
                error[16].style.display="block";
                error[16].innerHTML="Please Enter Guardian's Name";
                var result=0;

            }
            else
            {
                if(above[0].value.length>0&& above[0].value.length<3)
                {
                    error[16].style.display="block";
                    error[16].innerHTML="Please Enter Full Guardian's Name";
                    var result=0;
                }
                else
                {
                    error[16].style.display="none";  
                }
            }



            if(above[1].value.length==null||above[1].value.length=="")
            {
                error[17].style.display="block";
                error[17].innerHTML="Please Enter Guardian's Cnic";
                var result=0;
            }
            else
            {
                if(above[1].value.length>0&& above[1].value.length<13)
                {
                    error[17].style.display="block";
                    error[17].innerHTML="Please Enter Full Guardian's Cnic";
                    var result=0;
                }
                else
                {
                    error[17].style.display="none"; 
                }
            }


            if(above[2].value.length==null||above[2].value.length=="")
            {
                error[18].style.display="block";
                error[18].innerHTML="Please Enter Guardian's CellPhone Number";
                var result=0;
            }
            else
            {
                if(above[2].value.length>0&&above[2].value.length<11)
                {
                    error[18].style.display="block";
                    error[18].innerHTML="Please Enter Full Guardian's CellPhone Number"; 
                    var result=0;
                }
                else
                {
                    error[18].style.display="none";
                }
            }



            if(above[3].value.length==null||above[3].value.length=="")
            {
                error[19].style.display="block";
                error[19].innerHTML="Please Enter Relation With Guardian's"; 
                var result=0;
            }
            else
            {
                error[19].style.display="none";
            }


        }

    

        var address=document.getElementById('address');
        if(address.value.length==null||address.value.length=="")
        {
            error[20].style.display="block";
            error[20].innerHTML="Please Enter Your Address"; 
            var result=0;
        }
        else
        {
            error[20].style.display="none";
        }


        var city=document.getElementById('city');
        if(city.value=="default")
        {
            error[21].style.display="block";
            error[21].innerHTML="Please Select Your City";
            var result=0;
        }
        else
        {
            error[21].style.display="none";
        }



        var university=document.getElementById('university');

        if(university.value=="default")
        {
            error[22].style.display="block";
            error[22].innerHTML="Please Select Your University";
            var result=0;
        }
        else
        {
            error[22].style.display="none";
        }


        var flag1=1;
        var master=document.getElementById('master');
        var course=document.getElementsByClassName('course');
        for(var i in course)
        {
            if(course[i].checked)
            {
                flag1=0;
            }
        }

        if(flag1==1)
        {
            error[23].style.display="block";
            error[23].innerHTML="Please Choose Your Course";
            var result=0;
        }
        else
        {
            error[23].style.display="none";
        }

    }


if(result==1)
{

    $('#dialog').dialogBox({
        hasClose: true,
        hasMask: true,
        title: '<br>Request Submitted !',
        content: 'Your Registration Has Been SuccessFully Submitted !'
    })
   
    setTimeout(function()
    {

        setTimeout(function() {
            window.location.href="https://miandevelopers.000webhostapp.com/";
        },1000);
    },3000)
}
else
{
    $('#dialog').dialogBox({
        hasClose: true,
        hasMask: true,
        title: '<br>Attention !',
        content: 'Please Validate And Complete Your Form First !'
    })
    
}


}












































function toggle(master, course) {
    var master1 = document.getElementById(master);
    var course1 = document.getElementsByClassName(course);

    for (i = 0; i <= course1.length; i++) {
        course1[i].checked = master1.checked;
        master1.checked = course1[i].checked;
    }
}

function toggleall() {
    var master1 = document.getElementById('master');
    var course1 = document.getElementsByClassName('course');
    for (i = 0; i <= course1.length; i++) {
        if (course1[0].checked && course1[1].checked && course1[2].checked && course1[3].checked && course1[4].checked && course1[5].checked) {
            master1.checked = course1[i].checked;
        }

    }
}

function fetch(city, university) {
    var city1 = document.getElementById(city);
    var university1 = document.getElementById(university);
    university1.innerHTML = "";
    if (city1.value == "default") {
        var option_array = ["default|---Select University---"];
    }
    else if (city1.value == "sheikhupura") {
        var option_array = ["default|---Select University---", "gcus|Government College University"];
    }

    else if (city1.value == "lahore") {
        var option_array = ["default|---Select University---", "gcul|Government College University", "pu|Punjab University (New Campus)", "pucit|PU Information Technology", "uet|University Of Engeenering And Technology"];
    }
    else if (city1.value == "islamabad") {
        var option_array = ["default|---Select University---", "qau|Quaid-Azam University"];

    }
    else if (city1.value == "karachi") {
        var option_array = ["default|---Select University---", "uok|University Of Karachi"];
    }
    else if (city1.value == "rawalpindi") {
        var option_array = ["default|---Select University---", "arid|Arid Agricultural University"];
    }
    else if (city1.value == "multan") {
        var option_array = ["default|---Select University---", "bzu|Bahuddin Zakireya University"];
    }
    else if (city1.value == "gujrat") {
        var option_array = ["default|---Select University---", "uog|University Of Gujrat"];
    }

    for (var i in option_array) {
        var splitt = option_array[i].split('|');
        var option_create = document.createElement('option');
        option_create.value = splitt[0];
        option_create.innerHTML = splitt[1];
        university1.options.add(option_create);
    }
}


function input1(event) {
    var char = event.which;
    if (char >= 65 && char <= 90 || char >= 97 && char <= 122 || char <= 32) {
        return true;
    }
    else {
        return false;
    }
}


function input2(event) {
    var char = event.which;
    if (char >= 47 && char <= 57) {
        return true;
    }
    else {
        return false;
    }
}


function checking() {
    var above = document.getElementsByClassName('above');
    for (i = 0; i <= above.length; i++) {
        if (above[0].disabled == true && above[1].disabled == true && above[2].disabled == true && above[3].disabled == true) {
            above[0].disabled = false; above[1].disabled = false; above[2].disabled = false; above[3].disabled = false;
        }
        else {
            above[0].disabled = true; above[1].disabled = true; above[2].disabled = true; above[3].disabled = true;
        }

    }
}

function pass() {
    var country = document.getElementById('countries');
    var pass = document.getElementById('pass');
    console.log(passport);
    if (country.value == "pakistan") {

        pass.style.display = "none";
    }
    else {

        pass.style.display = "block";
    }
}

function uneye() {
    var password1 = document.getElementById('password1');
    var eye1 = document.getElementById('eye1');



    if (password1.type == 'text') {
        password1.type = "password";

        eye1.setAttribute('class', 'fa fa-eye-slash');
    }
    else if (password1.type == 'password') {
        password1.type = "text";
        eye1.setAttribute('class', 'fa fa-eye');
    }
}


function try1() {
    
    var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    var password1 = document.getElementById('password1');
    if (password1.value.length == "" || password1.value.length == null) {
        document.getElementById('strength').style.display = "none";
        document.getElementById('strength1').style.display = "none";
        document.getElementById('strength3').style.display = "none";
    }
    else if (password1.value.length < 8) {
        document.getElementById('strength').style.display = "block";
        document.getElementById('strength1').style.display = "none";
        document.getElementById('strength3').style.display = "none";
    }
    else if (password1.value.match(passw) && password1.value.length >= 8) {
        document.getElementById('strength').style.display = "none";
        document.getElementById('strength1').style.display = "block";
        document.getElementById('strength3').style.display = "none";
    }
    else if (password1.value.match(paswd) && password1.value.length >= 9) {
        document.getElementById('strength').style.display = "none";
        document.getElementById('strength1').style.display = "none";
        document.getElementById('strength3').style.display = "block";
    }

}

function try1() {

    var letterNumber = /^[0-9a-zA-Z]+$/;
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    var password1 = document.getElementById('password1');
    if (password1.value.length == "" || password1.value.length == null) {
        document.getElementById('strength').style.display = "none";
        document.getElementById('strength1').style.display = "none";
        document.getElementById('strength3').style.display = "none";
    }
    else if (password1.value.length < 8 && password1.value.length>0) {
        document.getElementById('strength').style.display = "block";
        document.getElementById('strength1').style.display = "none";
        document.getElementById('strength3').style.display = "none";
    }
    else if (password1.value.match(letterNumber) && (password1.value.length >= 8)) {
        document.getElementById('strength').style.display = "none";
        document.getElementById('strength1').style.display = "block";
        document.getElementById('strength3').style.display = "none";
    }
    else if (password1.value.match(decimal) && password1.value.length >= 9) {
        document.getElementById('strength').style.display = "none";
        document.getElementById('strength1').style.display = "none";
        document.getElementById('strength3').style.display = "block";
    }

}


function uneye1() {
    var password2 = document.getElementById('password2');
    var eye1 = document.getElementById('eye2');

    if (password2.type == 'text') {
        password2.type = "password";

        eye2.setAttribute('class', 'fa fa-eye-slash');
    }
    else if (password2.type == 'password') {
        password2.type = "text";
        eye2.setAttribute('class', 'fa fa-eye');
    }
}





document.addEventListener('contextmenu', event => event.preventDefault());
