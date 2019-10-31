const tavaraLista = []; // taulukko/lista ostoslistaan lisättäville tavaroille 
let montakoItemiaLisatty = 0; // "tavaralaskuri"
let objId = 0; // ID-numero tavaralistan objektille

function vari() { //värivalinta 
  let x = document.getElementById("MyColor").value;

  switch(x) {
    case "RED":
      alert("color of the day is red!");
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/05/08/10/13/red-757851_960_720.png')";
      break;
      case "YELLOW":
      alert("color of the day is yellow!");
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2012/03/01/01/33/yellow-20226_960_720.jpg')";   
      
      break;
      case "GREEN":
      alert("color of the day is green!");
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/07/05/16/53/leaf-1498985_960_720.jpg')";
      break;
      case "BLUE":
      alert("color of the day is blue!");
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/03/21/10/01/desktop-3246124_960_720.jpg')";
      break;  
      case "GRAY":
      alert("color of the day is gray!");
      document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/22/20/04/abstract-1850424_960_720.jpg')";
      break;                  
  }
}

function fadeOut() { //alku-formin häivytys ja poisto ja lisäys-formille siirtyminen fadeIn-funktiolla
    document.getElementById("sisaan").style.opacity = "0";
    setTimeout(function() {fadeIn();}, 2000);
    setTimeout(function() {poistaAlkuForm();}, 2000);

    return false;    
}

function poistaAlkuForm() { //poistetaan alkuformi kokonaan tieltä häiritsemästä
    let elementti = document.getElementById("sisaan");
    elementti.parentNode.removeChild(elementti);
}

function fadeIn() { //taiotaan esiin "seuraava sivu" alku-formin jälkeen
    document.getElementById("lisaa").style.opacity = "1";
    document.getElementById("lisaa").style.position = "static";
    document.getElementById("lisaa").style.margin = "20 auto";
}

function lisaaItem() { //lisätään lisäys-formilta uusi tavara taulukkoon
    let x = document.getElementById("newItem").value;
    let y = document.getElementById("itemAmount").value;
    let z = document.getElementById("itemPrice").value;

    let item = {item: x, amount: y, price: z, id: objId}; //lisätään tavarat taulukkoon
    tavaraLista.push(item);

    if (objId == 0) { //lisätään ostoskori-nappi kun ensimmäinen tavara viedään taulukkoon objektina 
        lisaaKori();        
    }

    objId++; 
    
    for (i=0; i<y; i++) {
        montakoItemiaLisatty++; //"tavaralaskurin" päivitys
    } 
    
    document.getElementById("tavaraluku").innerHTML = montakoItemiaLisatty + " item(s) in the shopping cart."

    return false;
}

function lisaaKori() { //lisää tekstiselite ja ostoskori-button

        let txt = document.createElement("P");
        txt.innerHTML = "<br/>Press the shopping cart button to update it's content."
        document.getElementById("lisaa").appendChild(txt);

        let kori = document.createElement("button");
        kori.innerHTML = "<i class='fa fa-shopping-cart fa-3x'></i>";
        kori.setAttribute("Id", "kori");
        kori.setAttribute("onclick", "paivitaKori(tavaraLista)");
        document.getElementById("lisaa").appendChild(kori);
}

function paivitaKori(x) { //näytä/päivitä ostoskorin sisältö, tyhjennä ensiksi taulu ja kirjoita sitten uudelleen

    let z = document.getElementById("taulu");
    tyhjennaRivit();

    let summa = 0;

    for (let i=0 ; i < x.length; ++i) {
        
        let yhteisHinta = x[i].price * x[i].amount;
        summa += yhteisHinta; 
        z.innerHTML += '<tr class="rivi"><td>' + x[i].item + '</td><td class = "keskita">' + x[i].amount + '</td><td class = "keskita">' + x[i].price + '</td><td class = "keskita">' + yhteisHinta + '</td><td><button class="delbutton" type="button" onclick="poistaRivi('+i+')">DELETE</button></td></tr>';
    }
    z.innerHTML += '<tr class="rivi" id="vikaRivi"><td>' + 'TOTAL SUM' + '</td><td class = "keskita">' + '' + '</td><td class = "keskita">' + '' + '</td><td class = "keskita">' + summa + '</td>';
    naytaLista();
}

function tyhjennaRivit() { //funktio taulun tyhjentämiseen

    let rivi = document.getElementsByClassName("rivi");

    while(rivi[0]) {
        rivi[0].parentNode.removeChild(rivi[0]);
    }
}

function naytaLista() {
    document.getElementById("ostoskori").style.display = "block";
}



function poistaRivi(i) { // funktio ostoskorin delete-napille
  let id=parseInt(i); 
  let montako = tavaraLista[i].amount;  
  tavaraLista.splice(id, 1); //poistaa valitun rivin taulukosta
  
  for (let i = 0; i < montako; ++i) { //päivittää "tavaralaskurin"
    montakoItemiaLisatty--;
  }
  document.getElementById("tavaraluku").innerHTML = montakoItemiaLisatty + " item(s) in the shopping cart."
  paivitaKori(tavaraLista);
}

