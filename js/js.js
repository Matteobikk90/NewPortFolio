// alert("halo");
var speed = 1;
var delay = 1000; //Your delay in milliseconds

$(document).ready(function(){
    /* affix the navbar after scroll below header */
    $(".navbar").affix({offset: {top: $("header").outerHeight(true)} 
    
    });

  $("#project1, #project2, #project3, #project4, #project5").hide();

    $("#projectsChapter").click( function() {
        $('#project1, #project2, #project3, #project4, #project5').slideToggle();
        $(this).html($(this).html() == 'Hide Projects' ? 'Show Projects' : 'Hide Projects'); 
        // console.log("working");                   
    });

    $("#skills").click(function(){
     $(this).animate({
    color: "#19273d",
    backgroundColor: "#F44336"
  });
     $(this).animate({
    color: "#F44336",
    backgroundColor: "#19273d"
  });
     $(this).effect( "shake" );
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
    $(c).animate({ top: newq[0], left: newq[1] }, 3000 / speed, function(){
      animateDiv(c);        
    });
    
};

$('div[name=animate]').click(function(){
   $(this).effect('explode');
   console.log("explode HTML5");
   setTimeout(function(){ window.location = "http://www.html5.com/"; }, delay);
   
   });

$('div[name=animate]').click(function(){
   $(this).effect('explode');
   console.log("explode CSS3");
   setTimeout(function(){ window.location = "http://www.css3.com/"; }, delay);
   
   });

$('div[name=animate]').click(function(){
   $(this).effect('explode');
   console.log("explode");
   setTimeout(function(){ window.location = "http://rubyonrails.org/"; }, delay);
   
   });

$('div[name=animate]').click(function(){
   $(this).effect('explode');
   console.log("explode");
   setTimeout(function(){ window.location = "https://nodejs.org/en/"; }, delay);
   
   });

$('div[name=animate]').click(function(){
   $(this).effect('explode');
   console.log("explode");
   setTimeout(function(){ window.location = "https://angularjs.org/"; }, delay);
   
   });

$('div[name=animate]').click(function(){
   $(this).effect('explode');
   console.log("explode");
   setTimeout(function(){ window.location = "https://www.javascript.com/"; }, delay);
   
   });

$('div[name=animate]').click(function(){
   $(this).effect('explode');
   console.log("explode");
   setTimeout(function(){ window.location = "https://jquery.com/"; }, delay);
   
   });

});


