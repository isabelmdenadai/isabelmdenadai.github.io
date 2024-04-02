function loadGoogleMapsAPI() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC9HByX0ww4_3IdORKxu3HAT6rH_FDpq1Q&callback=initMap';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    }

function initMap() {
            // The location of Clinica de Nadai
            var clinica = {lat: -23.531475, lng: -46.576439};
            // The map, centered at Clinica de Nadai
            var map = new google.maps.Map(
                document.getElementsByClassName('localizacaomap-container')[0], {zoom: 15, center: clinica});
            // The marker, positioned at Clinica de Nadai
            var marker = new google.maps.Marker({position: clinica, map: map});
            script.async = true;
        }

        window.onload = loadGoogleMapsAPI;