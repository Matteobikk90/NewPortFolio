// alert("halo");

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
    color: "green",
    backgroundColor: "rgb( 20, 20, 20 )"
  });
     $(this).animate({
    color: "red",
    backgroundColor: "white"
  });
});

});