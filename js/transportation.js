function initMap() {
        var uluru = {lat: 22.6235014, lng: 120.28377669999998
};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }