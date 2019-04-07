
       
            
           var total = 5;
var count = 1;
function slide(x) {


    var image = document.getElementById('slide');
    count = count + x;
    if (count > total) {
        count = 1;
        document.getElementById('demo3').innerHTML = "WEB TEMPLETES";
    }
    if (count < 1) {
        count = total;

    }


    if (count == 2)
    {
        document.getElementById('demo3').innerHTML = "PSD TEMPLETES";
        document.getElementById('demo6').innerHTML = "PSD TEMPLETES";
    }
    if (count == 3)
    {
        document.getElementById('demo3').innerHTML = "WEB TEMPLETES";
       

    }
    if (count == 4) {
        document.getElementById('demo3').innerHTML = "WEB DEVELOPERS";
        

    }
    if (count == total)
    {
        document.getElementById('demo3').innerHTML = "WEB DESIGN COURSES";
       
    }


    image.setAttribute('style', 'opacity:1;transition:opacity 1s;opacity:0');
    setTimeout(function () {
        image.src = "pic/img" + count + ".jpg";
        image.setAttribute('style', 'opacity:0;transition:opacity 1s;opacity:1');
    }, 500);
    

}

setInterval(function () {
    slide(1);
}, 5000);



window.onresize=function()
{
    if (window.innerWidth < 400 && window.innerWidth > 365)
    {
        var demo4=document.getElementById('demo4');
        var demo5=document.getElementById('demo5');
        var demo6 = document.getElementById('demo6');
        demo4.style.fontSize = "15px";
        demo5.style.fontSize = "15px";
        demo6.style.fontSize = "15px";
    }
    
    else if (window.innerWidth < 365) {
        var demo4 = document.getElementById('demo4');
        var demo5 = document.getElementById('demo5');
        var demo6 = document.getElementById('demo6');
        demo4.style.fontSize = "15px";
        demo5.style.fontSize = "15px";
        demo6.style.fontSize = "15px";
        demo4.style.top = "80px";
        demo5.style.top = "110px";
        demo6.style.top = "140px";
    }
}

window.onload=function()
{
    if (window.innerWidth>365 && window.innerWidth < 400) {
        var demo4 = document.getElementById('demo4');
        var demo5 = document.getElementById('demo5');
        var demo6 = document.getElementById('demo6');
        demo4.style.fontSize = "15px";
        demo5.style.fontSize = "15px";
        demo6.style.fontSize = "15px";
    }
    else if(window.innerWidth<365)
    {
        var demo4 = document.getElementById('demo4');
        var demo5 = document.getElementById('demo5');
        var demo6 = document.getElementById('demo6');
        demo4.style.fontSize = "15px";
        demo5.style.fontSize = "15px";
        demo6.style.fontSize = "15px";
        demo4.style.top = "80px";
        demo5.style.top = "110px";
        demo6.style.top = "140px";
    }
}


function overlay(source)
{
    if (window.innerWidth > 660)
    {
        var overlay = document.getElementById('overlay');
        overlay.style.display = "block";
        var effect = document.getElementById('effect');
        effect.setAttribute('class', "animated zoomIn");
        effect.style.display = "block";
        effect.style.left = ((window.innerWidth) / 2) - (550 * 0.7) + "px";
        var images1 = document.getElementById('images1');
        images1.setAttribute('src', source);
        document.body.style.overflow = "hidden";
    }
   
}

window.onresize=function()
{
    var overlay = document.getElementById('overlay');
    overlay.style.display = "none";
    var effect = document.getElementById('effect');
    effect.style.display = "none";
    document.body.style.overflow = "auto";
}

function close1()
{
    var effect = document.getElementById('effect');
    var overlay = document.getElementById('overlay');
    effect.setAttribute('class', "animated zoomOut");
    setTimeout(function () {
        var effect = document.getElementById('effect');
        var overlay = document.getElementById('overlay');
        overlay.style.display = "none";
        effect.style.display = "none";
    }, 500);
    document.body.style.overflow = "auto";
   
   
}






$(document).ready(function () {
    $('.navbar ul li a').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                .animate({ scrollTop: targetOffset }, 1500);
                return false;
            }
        }
    });
});




       


   function custombox()
   {
     
   }
    
