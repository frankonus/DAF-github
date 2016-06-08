//Responsive menu open
$('#hamburger').click(function(){ 
    $("#fullPageMenu").fadeIn(500);
    $('#video').get(0).pause();
});

//Responsive menu close
$('#hamburgerClose').click(function(){ 
    $("#fullPageMenu").fadeOut(500);
    $('#video').get(0).play();
});


//Open page after finished video
//$("#video").on("ended", function() {
//    window.location.replace("http://stackoverflow.com");
//});

//Pauze Play button
$('#playpauze').click(function(){     
    if ($('#playpauze').hasClass('paused')){
        $('#video').get(0).play();
        $('#playpauze').removeClass('paused');
    } else {
        $('#video').get(0).pause();
        $('#playpauze').addClass('paused');
    }
});

//Sound button
$('#sound').click(function(){     
    if ($('#sound').hasClass('muted')){
        $("video").prop('muted', false);
        $('#sound').removeClass('muted');
    } else {
        $("#video").prop('muted', true);
        $('#sound').addClass('muted');
    }
});

//Show full map button
$('#fullMapBtn').click(function(){     
    $("#darkOverlay").fadeOut(1000);
    $("#mapText").animate({marginLeft: "-200px",opacity: "0"}, 400);
    $("#mapText").css({"pointerEvents":"none"});
    $("#returnInfoBtn").fadeIn(400);
});

//Hide full map button
$('#returnInfoBtn').click(function(){     
    $("#darkOverlay").fadeIn(1000);
    $("#mapText").animate({marginLeft: "30px",opacity: "1"}, 400);
    $("#mapText").fadeIn();
    $("#mapText").css({"pointerEvents":"visible"});
    $("#returnInfoBtn").fadeOut(400);
});


$('.progress').slider({
	value: 0,
	orientation: "horizontal",
	range: "min",
	animate: true,
	slide: function(event, ui) {
		videoPlayer.seek(ui.value);
	}
});

$('#video').bind('ready', function(event){
	_duration = event.data.duration;
	$(".progress").slider("option", "max", _duration);
});