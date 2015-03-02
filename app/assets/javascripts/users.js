function initialize(){
  var myLatLng = new google.maps.LatLng(51.5361, -0.1751)
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: myLatLng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: "location set using html5"
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'error: geolocation server failed';
  } else {
    var content = 'error: your browser does not support geolocation';
  }


  }
  }
}
google.maps.event.addDomListener(window, 'load', initialize);