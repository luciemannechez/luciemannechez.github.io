      google.maps.event.addDomListener(window, 'load', init);
      var map;
      function init() {
          var mapOptions = {
              center: new google.maps.LatLng(46.043244,-1.0445),
              zoom: 16,
              zoomControl: true,
              zoomControlOptions: {
                  style: google.maps.ZoomControlStyle.DEFAULT,
              },
              disableDoubleClickZoom: true,
              mapTypeControl: true,
              mapTypeControlOptions: {
                  style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              },
              scaleControl: true,
              scrollwheel: true,
              panControl: true,
              streetViewControl: true,
              draggable : true,
              overviewMapControl: true,
              overviewMapControlOptions: {
                  opened: false,
              },
              mapTypeId: google.maps.MapTypeId.ROADMAP,
          }
          var mapElement = document.getElementById('map');
          var map = new google.maps.Map(mapElement, mapOptions);
          var locations = [
  ['ESAT Equestre', 
  '<div class=\"address\"><p>Château du Passage - Le Marouillet - 17 340 Yves</p>     </div><div class=\"phones\"> <p><strong>Tel :</strong> 05 46 56 30 04</p><p><strong>Mobile :</strong> 06 70 32 87 09</p><p><strong>Fax :</strong> 05 46 56 33 36</p></div>', '', 'undefined', 'undefined', 46.041963, -1.0429940000000215, 'https://mapbuildr.com/assets/img/markers/solid-pin-purple.png']
          ];
          for (i = 0; i < locations.length; i++) {
        if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
        if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
        if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
             if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
             if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
              marker = new google.maps.Marker({
                  icon: markericon,
                  position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                  map: map,
                  title: locations[i][0],
                  desc: description,
                  tel: telephone,
                  email: email,
                  web: web
              });
  link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
       }
   function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
        var infoWindowVisible = (function () {
                var currentlyVisible = false;
                return function (visible) {
                    if (visible !== undefined) {
                        currentlyVisible = visible;
                    }
                    return currentlyVisible;
                 };
             }());
             iw = new google.maps.InfoWindow();
             google.maps.event.addListener(marker, 'click', function() {
                 if (infoWindowVisible()) {
                     iw.close();
                     infoWindowVisible(false);
                 } else {
                     var html= "<div><h4>"+title+"</h4><p>"+desc+"<p></div>";
                     iw = new google.maps.InfoWindow({content:html});
                     iw.open(map,marker);
                     infoWindowVisible(true);
                 }
          });
          google.maps.event.addListener(iw, 'closeclick', function () {
              infoWindowVisible(false);
          });

          var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p></div>";
          iw = new google.maps.InfoWindow({content:html});
          iw.open(map,marker);
          infoWindowVisible(true);

   }
  }