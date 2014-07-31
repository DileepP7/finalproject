var directionsDisplay;
var directionsService = new google.maps.DirectionsService(); 
var map; 
function initialize() 
	{
		directionsDisplay = new google.maps.DirectionsRenderer(); 
		var starter = new google.maps.LatLng(27.63609041135169,85.34172117659182); 
		var mapOptions = 
		{ 
			zoom:15, 
			center: starter 
		} 
		
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		
		google.maps.event.addListener(map,'click', function(e) 
							{
							
							});
		directionsDisplay.setMap(map); 
		loadMarker(map);
	} 

window.onload=function()
	{
        document.getElementById("changemap").onchange = function () 
		{
			var lat=this.options[this.selectedIndex].getAttribute("lat");
			var lang=this.options[this.selectedIndex].getAttribute("lang");
			var starter = new google.maps.LatLng(lat, lang); 
			var mapOptions = 
				{ 
					zoom:15, center: starter 
				} 
		
			map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		
			google.maps.event.addListener(map,'click', function(e) 
						{
							
						});
			
			loadMarker(map);
		
			directionsDisplay.setMap(map); 
		};
	}

	
	
	
google.maps.event.addDomListener(window, 'load', initialize);

function loadMarker(map)
	{
		var locations = 
		[
			['Satdobato', 27.63609041135169,85.34172117659182, 100,
				"<div id='marker-container'><span id='marker-title'>Satdobato Apartments</span>\
				<p id='marker-text'>This is a apartment with full facilities from single family\
				home to community houses.</p><span id='marker-link'>More Info..</span></div>"
			],
			['Basantapur', 27.703439685773176, 85.30944883837947, 100,
				"<div id='marker-container'><span id='marker-title'>Basantapur Apartments</span>\
				<p id='marker-text'>This is a apartment with full facilities from single family \
				home to community houses.</p><span id='marker-link'>More Info..</span></div>"
			],
			['Dhapasi', 27.748417405792473, 85.32815992846736, 100,
				"<div id='marker-container'><span id='marker-title'>Dhapasi Apartments</span>\
				<p id='marker-text'>This is a apartment with full facilities from single family\
				home to community houses.</p><span id='marker-link'>More Info..</span></div>"
			],
			['Thamel', 27.714229956775284, 85.31288206460886, 100,
				"<div id='marker-container'><span id='marker-title'>Thamel Apartments</span>\
				<p id='marker-text'>This is a apartment with full facilities from single family\
				home to community houses.</p><span id='marker-link'>More Info..</span></div>"
			],
		];

        var image=
        {
			url: 'images/building1.png',
			// This marker is 36 pixels wide by 49 pixels tall.
			size: new google.maps.Size(36, 49),
			// The origin for this image is 0,0.
			origin: new google.maps.Point(0,0),
			// The anchor for this image is the base of the flagpole at 0,32.
			anchor: new google.maps.Point(0, 10)
		};

	
        var shape = 
		{
			coords: [1, 1, 1, 20, 18, 20, 18 , 1],
			type: 'poly'
		};
  
  
  for(var i = 0; i < locations.length; i++)
    {
        var beach = locations[i];
        var myLatLng = new google.maps.LatLng(beach[1], beach[2]);

		var marker = new google.maps.Marker
		({
			position: myLatLng,
			map: map,
			icon: image,
			shape: shape,
			title: beach[0],
			content: beach[4],
			zIndex:beach[3]
        });


		google.maps.event.addListener(marker,'click',function() 
                {
               
                    var infowindow = new google.maps.InfoWindow
								({
                                    content: this.content,
                                    position:this.position
                                });
                                  
                                infowindow.setPosition(this.position); 
                                infowindow.open(map,this);
                });
    }
	
}