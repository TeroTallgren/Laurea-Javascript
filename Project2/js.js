function haeCity() { //haetaan säätiedot hakukentän syötön perusteella

    let haku = document.getElementById("haku").value;
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
            document.getElementById("tulos").innerHTML = "<h3>" + obj.name + "</h3>";
            document.getElementById("tulos").innerHTML += "<p>" + obj.weather[0].description +", "+temp+"C, kosteus: "+kosteus+"%</p><img src="+linkki+"><br>";
        }
    }
}
function haeSaa() { //haetaan säätiedot dropdown-valinnan perusteella

    let val = document.getElementById("kaupunki").value;
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
            document.getElementById("tulos").innerHTML = "<h3>" + obj.name + "</h3>";
            document.getElementById("tulos").innerHTML += "<p>" + obj.weather[0].description +", "+temp+"C, kosteus: "+kosteus+"%</p><img src="+linkki+"><br>";
        }
    }
}