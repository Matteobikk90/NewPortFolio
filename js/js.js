// alert("halo");

$(document).ready(function(){
    /* affix the navbar after scroll below header */
    $(".navbar").affix({offset: {top: $("header").outerHeight(true)} 
    
    });

  $("#project1, #project2, #project3, #project4").hide();

    $("#projectsChapter").click( function() {
        $('#project1, #project2, #project3, #project4').slideToggle();
        $(this).html($(this).html() == 'Hide Projects' ? 'Show Projects' : 'Hide Projects');                    
    });


});