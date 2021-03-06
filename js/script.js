var coordinate = new daum.maps.LatLng(37.5110644, 127.0432697);

function drawMap() {
  var container = document.getElementById('map');

  var options = {
    center: coordinate,
    level: 4
  };
  var map = new daum.maps.Map(container, options);
  map.setZoomable(false);

  var markerPosition = coordinate;
  var marker = new daum.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

  var zoomControl = new daum.maps.ZoomControl();
  map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

  var iwContent = $('#info-window-template').html();
  var iwPosition = coordinate;
  var infowindow = new daum.maps.InfoWindow({
      position: iwPosition, 
      content: iwContent 
  });
  infowindow.open(map, marker);
  return map;
}

function updateMapDraggable(map) {
  var width = $(window).width();
  var draggable = width > 768;
  map.setDraggable(draggable);
}

$(document).ready(function() {
  var map = drawMap();
  updateMapDraggable(map);

  $(window).resize(function() {
    updateMapDraggable(map);
    map.setCenter(coordinate);
  });
});
