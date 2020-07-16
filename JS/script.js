mapboxgl.accessToken = 'pk.eyJ1IjoiZ2dhc3BhciIsImEiOiJja2Ntampua3MwMXdkMnFtdDc5cm94dWR1In0.SXYsziPK8eBEcXk6CZGobg';

let lat;
let long;


if('geolocation' in navigator){


if(lat == undefined && long == undefined){

    var map = new mapboxgl.Map({
        container: 'mapContainer',
        center:[ -51.2266652, -30.0330268],
        zoom:15,
        style: 'mapbox://styles/mapbox/streets-v11'
        
        
        });


}

    var el = document.getElementById('square');
    el.onclick = () =>{

    navigator.geolocation.getCurrentPosition((position)=>{

         lat = position.coords.latitude;
         long = position.coords.longitude;
    
        var map = new mapboxgl.Map({
        container: 'mapContainer',
        center:[long, lat],
        zoom:15,
        style: 'mapbox://styles/mapbox/streets-v11'
        
        
        });

        let element = document.createElement('div');
        element.className = 'marker'

        let marker = new mapboxgl.Marker(element)
        .setLngLat({

            lng:long,
            lat:lat

        })
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Local da Ocorrência</h1>"))
        .addTo(map);
        marker.togglePopup();

        var urlStr = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ long+","+lat+".json?access_token=pk.eyJ1IjoiZ2dhc3BhciIsImEiOiJja2Ntampua3MwMXdkMnFtdDc5cm94dWR1In0.SXYsziPK8eBEcXk6CZGobg";

        $.ajax({
            url: urlStr,
            method:"get",
            dataType: "json",
            success: function(data){
                 var address = data.features[0].place_name.split(", Porto Alegre - Rio Grande do Sul, 90889, Brazil");
                
                 $("#bus").val(address[0])
                 
            }
          });

    }, (error)=>{

        console.log(error);


    })

     


    }

}






