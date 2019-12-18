$(document).ready(function(){ //PIILOTETAAN FADE-NAPPULAT ENSIKSI
    $("#napit").slideUp(1);  
    
    $("#hae").click(function(){ //EI TOIMI, TULEE CORS-ERROR AINA, JOTEN JS FUNKTIO KÄYTÖSSÄ MYÖS KS. js.js
        let haku = $("#haku").val();
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+haku+"&units=metric&mode=JSON&lang=fi&APPID=ce8e0341a65e15d3c08671e91e863b99";
        
        $.get("url", function(data) {
          let ikoni = data.weather[0].icon;
          let linkki = "https://openweathermap.org/img/wn/"+ikoni+"@2x.png";
          let temp = parseInt(data.main.temp);
          let kosteus = data.main.humidity;
          $("#tulos").html("<h3>" + data.name + "</h3>");
          $("#tulos").append("<p>" + data.weather[0].description +", "+temp+"C, kosteus: "+kosteus+"%</p><img src="+linkki+"><br>");
        });
    });

    $("#kaupunki").change(function(){ //EI TOIMI, TULEE CORS-ERROR AINA, JOTEN VANHA JS FUNKTIO KÄYTÖSSÄ MYÖS KS. js.js

        let val = $("#kaupunki").val();
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+val+"&units=metric&mode=JSON&lang=fi&APPID=ce8e0341a65e15d3c08671e91e863b99";

        $.get("url", function(data) {
            let ikoni = data.weather[0].icon;
            let linkki = "https://openweathermap.org/img/wn/"+ikoni+"@2x.png";
            let temp = parseInt(data.main.temp);
            let kosteus = data.main.humidity;
            $("#tulos").html("<h3>" + data.name + "</h3>");
            $("#tulos").append("<p>" + data.weather[0].description +", "+temp+"C, kosteus: "+kosteus+"%</p><img src="+linkki+"><br>");
        });
      });

    let toggle = 0;

    $("#togglenappi").click(function(){ //TOGGLE-NAPPULA FADE-EFEKTINAPEILLE(TEMPPU1 JA TEMPPU2)
      $("#napit").slideToggle();
      toggle++;

      if (toggle %2 !== 0) {
        $("#togglenappi").text("PAINA UUDELLEEN JOS PELOTTAA");
      } else {
        $("#togglenappi").text("PAINA TÄSTÄ JOS USKALLAT");
      }
    });
    $( "#temppu" ).click(function() {
    $( "#saa" ).fadeOut(1000);
    });
    $( "#temppu2" ).click(function() {
        $( "#saa" ).fadeIn(1000);
    });
});


function haeCity() { //haetaan säätiedot hakukentän syötön perusteella, MUUTETTU JQUERYKSI PAITSI AJAX-TOIMINNALLISUUS KOSKA SE EI TOIMI JQUERYNÄ

    //let haku = document.getElementById("haku").value;
    let haku = $("#haku").val();
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+haku+"&units=metric&mode=JSON&lang=fi&APPID=ce8e0341a65e15d3c08671e91e863b99";
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
            
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let obj = JSON.parse(xmlhttp.responseText);
            let ikoni = obj.weather[0].icon;
            let linkki = "https://openweathermap.org/img/wn/"+ikoni+"@2x.png";
            let temp = parseInt(obj.main.temp);
            let kosteus = obj.main.humidity;
            //document.getElementById("tulos").innerHTML = "<h3>" + obj.name + "</h3>";
            $("#tulos").html("<h3>" + obj.name + "</h3>");
            //document.getElementById("tulos").innerHTML += "<p>" + obj.weather[0].description +", "+temp+"C, kosteus: "+kosteus+"%</p><img src="+linkki+"><br>";
            $("#tulos").append("<p>" + obj.weather[0].description +", "+temp+"C, kosteus: "+kosteus+"%</p><img src="+linkki+"><br>");
        }
    }
}
function haeSaa() { //haetaan säätiedot dropdown-valinnan perusteella, MUUTETTU JQUERYKSI PAITSI AJAX-TOIMINNALLISUUS KOSKA SE EI TOIMI JQUERYNÄ

    //let val = document.getElementById("kaupunki").value;
    let val = $("#kaupunki").val();
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+val+"&units=metric&mode=JSON&lang=fi&APPID=ce8e0341a65e15d3c08671e91e863b99";
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
            
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let obj = JSON.parse(xmlhttp.responseText);
            let ikoni = obj.weather[0].icon;
            let linkki = "https://openweathermap.org/img/wn/"+ikoni+"@2x.png";
            let temp = parseInt(obj.main.temp);
            let kosteus = obj.main.humidity;
            //document.getElementById("tulos").innerHTML = "<h3>" + obj.name + "</h3>";
            $("#tulos").html("<h3>" + obj.name + "</h3>");
            //document.getElementById("tulos").innerHTML += "<p>" + obj.weather[0].description +", "+temp+"C, kosteus: "+kosteus+"%</p><img src="+linkki+"><br>";
            $("#tulos").append("<p>" + obj.weather[0].description +", "+temp+"C, kosteus: "+kosteus+"%</p><img src="+linkki+"><br>");
        }
    }
}
