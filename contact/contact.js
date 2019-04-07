
function counter1()
{
    var msg=$('#msg');
    var counter=$('#counter');
    var total=100;
    var remain=total-msg.val().length;
    if(msg.val().length>1)
    {
counter.css('display','block');
counter.html("You Have "+remain+" Remaining Character");
    }
    if(msg.val().length<1)
    {
counter.css('display','none');
    }
}



    
    
  
 
    
    document.addEventListener('contextmenu', event => event.preventDefault());
    var myVar;
    function myFunction() {
    myVar = setTimeout(showPage, 1300);
}

function showPage() {
    $('#loader').css('display','none');
    $('#myDiv').css('display','block');
}





function copied1()
{
    var clipboard = new Clipboard('.btn_a');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});



var tooltip=$('#tooltip');

    tooltip.css('opacity','1');
    setTimeout(function() {
        tooltip.css('opacity','0'); 
    },3000);




}


















    function input1(event)
    {
        var char=event.which;
        if(char>=65&&char<=90||char>=97&&char<=122||char<=32)
        {
            return true;
        }
        else{
            return false;
        }
    }
        
        
        
    
    



































        


function verify1()
{
    var result1=1;
    {
    var f11=document.getElementById('f11');
    var f33=document.getElementById('f33');
    var f22=document.getElementById('f22');
    
    var msg=document.getElementById('msg');
   
    var username1=document.getElementById('username1');
    var email1=document.getElementById('email1');
    var dotindex1=email1.value.indexOf('.');
    var atindex1=email1.value.indexOf('@');
    var mindex1=email1.value.lastIndexOf('m');
    if(username1.value.length==""||username1.value.length==null)
    {
       f11.style.display="block";
       f11.innerHTML="User Name Field Required";
       result1=0;
       
    }
    else{
        if(username1.value.length<3)
        {
            f11.style.display="block";
       f11.innerHTML="Please Enter Full User Name";
       result1=0;
        }
        else{
            f11.style.display="none";
        }
       
    }

    




    if(email1.value.length==""||email1.value.length==null)
    {
       f33.style.display="block";
       f33.innerHTML="Email Field Required";
       result1=0;
    }
    else{
        if(email1.value.length<17)
        {
            f33.style.display="block";
       f33.innerHTML="Please Enter Full Email";
  result1=0;
        }
        else{
            f33.style.display="none";
        }

        if(atindex1<5||mindex1-dotindex1!=3||dotindex1-atindex1!=6)
        {
            f33.style.display="block";
       f33.innerHTML="Please Enter Valid Email Address"; 
       result1=0;
        }

        else{
            f33.style.display="none";
        }
    }


if(msg.value.length==""||msg.value.length==null)
{
    f22.style.display="block";
       f22.innerHTML="Messege Field Empty ! "; 
       result1=0;
}
else{
    f22.style.display="none";  
}
   

       

    }

    
  if(result1==1)
  {
      return true;
  }
  else{
      return false;
  }
    

   

}
