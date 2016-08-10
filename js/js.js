// alert("halo");

$(document).ready(function(){
    /* affix the navbar after scroll below header */
    $(".navbar").affix({offset: {top: $("header").outerHeight(true)} 
    
    });

  $("div#panel").hide();

    $("#projectsChapter").click( function() {
        $('#panel').slideToggle();
        $(this).html($(this).html() == 'Close Projects' ? 'Open Projects' : 'Close Projects');                    
    });


});