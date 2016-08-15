// alert("halo");
var speed = 1;
var delay = 2500; //Your delay in milliseconds
var mouseX = 0;
var mouseY = 0;

$(document).ready(function(){
    /* affix the navbar after scroll below header */
    $(".navbar").affix({offset: {top: $("header").outerHeight(true)} 
    
    });

  $("#project1, #project2, #project3, #project4, #project5").hide();

    $("#projectsChapter").click( function() {
        $('#project1, #project2, #project3, #project4, #project5').slideToggle();
        $(this).html($(this).html() == 'Hide Projects' ? 'Show Projects' : 'Hide Projects'); 
        console.log("working");                   
    });

    $("#skillsbtn").click(function(){
     $("#skills").animate({
    color: "#F44336"
  });
     $("#skills").effect("shake");
});

    $(document).ready(function(){
    $("div[name=animate]").each(function(){
        animateDiv($(this));
    });
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(c){
    var newq = makeNewPosition();
    $(c).animate({ top: newq[0], left: newq[1], right: newq[2], bottom: newq[3] }, 3000 / speed, function(){
      animateDiv(c);        
    });
    
};

$('.circle1').click(function(){
   $(this).effect('explode');
   console.log("explode HTML5");
   setTimeout(function(){ window.location = "http://www.html5.com/"; }, delay);
   
   });

$('.circle2').click(function(){
   $(this).effect('explode');
   console.log("explode CSS3");
   setTimeout(function(){ window.location = "http://www.css3.com/"; }, delay);
   
   });

$('.circle3').click(function(){
   $(this).effect('explode');
   console.log("explode");
   setTimeout(function(){ window.location = "http://rubyonrails.org/"; }, delay);
   
   });

$('.circle4').click(function(){
   $(this).effect('explode');
   console.log("explode");
   setTimeout(function(){ window.location = "https://nodejs.org/en/"; }, delay);
   
   });

$('.circle5').click(function(){
   $(this).effect('explode');
   console.log("explode");
   setTimeout(function(){ window.location = "https://angularjs.org/"; }, delay);
   
   });

$('.circle6').click(function(){
   $(this).effect('explode');
   console.log("explode");
   setTimeout(function(){ window.location = "https://www.javascript.com/"; }, delay);
   
   });

$('.circle7').click(function(){
   $(this).effect('explode');
   console.log("explode");
   setTimeout(function(){ window.location = "https://jquery.com/"; }, delay);
   
   });

$(document).mousemove(function(e){
   mouseX = e.pageX;
   mouseY = e.pageY; 
});

// cache the selector
var follower = $("#movingDiv");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    yp += (mouseY - yp) / 12;
    follower.css({left:xp, top:yp}); 

}, 30);


});


