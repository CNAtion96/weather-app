var city = "";
var urlNew = "";

$('#zip').submit(function(e){
    e.preventDefault();
    zip = $('#zipInput').val();
    urlNew = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + zip + '&cnt=7&units=imperial&APPID=5e1d2d6c29f2a45397ffabbd8886bab2';
    console.log(urlNew);
    $('#zipInput').val('');
    $('#info').html(``);
    $.ajax({
        url: urlNew,
        success: function(responce){
            console.log(responce);
            responce.list.forEach(function(i){
                $('#info').append(`
                    <div>
                        <p>Weather: ${i.weather[0].description} </p>
                        <p>Max Temp: ${i.temp.max} F</p>
                        <p>Min Temp: ${i.temp.min} F</p>
                        <img src="http://openweathermap.org/img/w/${i.weather[0].icon}.png">
                    </div>
                `);
            })
            if(responce.list[0].weather[0].main === "Rain"){
                $('#bg').css("background-image", "url('../rain.jpg')");
            } else if(responce.list[0].weather[0].main === "Clear"){
                $('#bg').css("background-image", "url('../clear_skies.jpg')");
            } else if(responce.list[0].weather[0].main === "Snow"){
                $('#bg').css("background-image", "url('../snow.jpg')");
            } else if(responce.list[0].weather[0].main === "Clouds"){
                $('#bg').css("background-image", "url('../clouds.jpeg')");
            } else {
                $('#bg').css("background","url('../main.jpg')");
            }
    }});
})


