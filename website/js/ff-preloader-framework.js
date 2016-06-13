//ffPreloader by Frank van Deursen
//Fontys University ICT Tilburg

//Style preloader
$("#ffPreloader").css({"height": "100vh", "width": "100%", "position": "fixed", "top": "0", "bottom": "0", "z-index": "9999" });

//Style round preloader icon
$("#ffPreloader img").css({"height": "30px", "width": "30px", "position": "absolute", "top": "50%", "margin-top": "-15px", "left": "50%", "margin-left": "-15px"});

//If page is loaded
$(window).load(function() {
    $( "#ffPreloader" ).delay(1000).fadeOut(800);
});


// Javascript test
// IMPORTANT: TURN OFF IF YOU SURE THIS FILE HAS FOUND
// alert('Javascript Found');