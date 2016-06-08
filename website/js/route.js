var x=new google.maps.LatLng(51.433243, 5.504680);
var eindhoven=new google.maps.LatLng(51.433243, 5.504680);
var amsterdam=new google.maps.LatLng(52.371594, 4.895861);
var groningen=new google.maps.LatLng(53.218395, 6.564750);
var maastricht=new google.maps.LatLng(50.851274, 5.695066);
var barca=new google.maps.LatLng(41.385754, 2.182754);
var madrid=new google.maps.LatLng(40.416962, -3.700832);
var porto=new google.maps.LatLng(41.156063, -8.628377);
var frank=new google.maps.LatLng(43.546632, 3.000659);
var milaan=new google.maps.LatLng(45.591943, 9.165064);
var berg=new google.maps.LatLng(43.028884, -1.319693);
var bern=new google.maps.LatLng(46.961991, 7.426386);
var wenen=new google.maps.LatLng(48.346262, 16.381491);
var praag=new google.maps.LatLng(50.037878, 14.483043);
var berlijn=new google.maps.LatLng(52.639961, 13.496835);
var hamburg=new google.maps.LatLng(53.557756, 10.020455);
var warschau=new google.maps.LatLng(52.249235, 21.065976);

function initialize()
{

var marker = new google.maps.Marker({
    position: groningen,
    map: map,
    title: 'Hello World!'
});
    
var mapProp = {
  center:x,
  zoom:8,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: true,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":100}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"0ff"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#303030"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":20},{"weight":0}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
                
  };

	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var myTrip=[eindhoven,amsterdam,groningen,maastricht];
	var flightPath=new google.maps.Polyline({
	  path:myTrip,
	  strokeColor:"#ff6543",
	  strokeOpacity:0.7,
	  strokeWeight:2
	  });

	flightPath.setMap(map);

	var marker = new google.maps.Marker({
    position: myTrip[10],
    icon: '/../images/delivery-truck.png' // null = default icon
	});

	var marker1 = new google.maps.Marker({
    position: myTrip[1],
    icon: '/../images/location-pin.png' // null = default icon
	});
	var marker2 = new google.maps.Marker({
    position: myTrip[2],
    icon: '/../images/location-pin.png' // null = default icon
	});
	var marker3 = new google.maps.Marker({
    position: myTrip[3],
    icon: '/../images/location-pin.png' // null = default icon
	});	
    
    marker.setMap(map);marker1.setMap(map);marker2.setMap(map);marker3.setMap(map);
	

//    $(marker).click(function(){
//        alert('test');
//    }
    
 marker1.addListener('mouseover', function() { $("#amsterdam").fadeIn(100); });
 marker1.addListener('mouseout', function() { $("#amsterdam").fadeOut(100); });

 marker2.addListener('mouseover', function() { $("#groningen").fadeIn(100); });
 marker2.addListener('mouseout', function() { $("#groningen").fadeOut(100); });
    
 marker3.addListener('mouseover', function() { $("#paris").fadeIn(100); });
 marker3.addListener('mouseout', function() { $("#paris").fadeOut(100); });

 marker.addListener('mouseover', function() { $("#bern").fadeIn(100); });
 marker.addListener('mouseout', function() { $("#bern").fadeOut(100); });
    
var tooltips = document.querySelectorAll('.googleHover');

window.onmousemove = function (e) {
    var x = (e.clientX + 40) + 'px',
        y = (e.clientY - 200) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};
}

google.maps.event.addDomListener(window, 'load', initialize);