

$( "#accordion" ).accordion({
    header:"div.accordionheader",
  });
$("video").each(function(){
    var player = videojs(this)

    $(this).parents(".accordionbody").find(".rewindknop").click(function(){
    event.preventDefault();
    var time = player.currentTime();
    player.currentTime(time-10);
    
});

var modal = document.getElementById("modal");

$(this).parents(".accordionbody").find(".done").click(function(){
    event.preventDefault();
    modal.style.display = "block";
    $(this).parents(".accordionbody").prev(".accordionheader").find(".done-tag").addClass("visible")
    
});


$(this).parents(".accordionbody").find(".big-play-button").click(function(){

    $(this).parents(".accordionbody").find(".big-play-button").addClass("none");
    $(this).parents(".accordionbody").find(".big-pause-button").addClass("block");
    if(!player.paused()){
        player.pause();
    } else {
        player.play();
    }

    if($(this).parents(".accordionbody").find(".big-play-button").hasClass("block")){
        $(this).parents(".accordionbody").find(".big-play-button").removeClass("block")
    }

})

$(this).parents(".accordionbody").find(".big-pause-button").click(function(){

    $(this).parents(".accordionbody").find(".big-play-button").toggleClass("block");
    $(this).parents(".accordionbody").find(".big-pause-button").toggleClass("none");
    if(!player.play()){
        player.play();
    } else {
        player.pause();
    }

})


$(this).parents().find(".close").click(function(){
    modal.style.display = "none";
});







})


$ ("#slider").click (function(){

    $( "body").toggleClass("dark");

    $("#slider").toggleClass("on");

});


$(".accordionheader").each(function(){
    
    if($(this).hasClass("ui-accordion-header-active")){
        $(this).children('div.arrow-container').addClass("arrow-rotate");
    }else{
        $(this).children('div.arrow-container').removeClass("arrow-rotate");
    }


})

$ (".accordionheader").click (function(){

    $(".accordionheader").each(function(){
    
        if($(this).hasClass("ui-accordion-header-active")){
            $(this).children('div.arrow-container').addClass("arrow-rotate");
        }else{
            $(this).children('div.arrow-container').removeClass("arrow-rotate");
        }
        
    })
});

$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
    
    });