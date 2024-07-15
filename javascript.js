function promena() {
    document.getElementById("promena1").innerText = "Vlasnik"
    document.getElementById("promena2").innerText = "Marketing menadžer"
    document.getElementById("promena3").innerText = "Prodavac"
    document.getElementById("promena4").innerText = "Dostavljač"

}

function vracanje() {
    document.getElementById("promena1").innerText = "Rajko Rajkić, Završio srednju elektrotehničku školu Nikola Teslau Beogradu kao djak generacije!";
    document.getElementById("promena2").innerText = "Danilo Danilović, Diplomirani marketing menadžer";
    document.getElementById("promena3").innerText = "Marko Marković, Završio srednju ekonomsku školu u Kruševcu";
    document.getElementById("promena4").innerText = "Bane Banić, Završio srednju saobraćajnu školu u BeograduDiplomirao na saobraćajnom fakultetu u Beogradukao jedan od vodećih studenata";
}

function validateIme() {
    let x = document.forms["forma"]["ime"].value;
    if (x == "") {
      alert("Ime je obavezno!");
      return false;
    }
    let y = document.forms["forma"]["prezime"].value;
    if (y == "") {
      alert("Prezime je obavezno!");
      return false;
    }
}

function validacija() {
    let z = document.forms["forma"]["ime"].value;
    if (z == "") {
      alert("Ime je obavezno!");
      return false;
    }
    let q = document.forms["forma"]["prezime"].value;
    if (q == "") {
      alert("Prezime je obavezno!");
      return false;
    }
    let a = document.forms["forma"]["broj"].value;
    if (a=="") {
        alert("Broj telefona je obavezan!");
        return false;
    }
    if(isNaN(a)) {
        alert("Morate upisati brojeve u polju za broj telefona!");
        return false;
    }
    let d = document.forms["forma"]["naslov"].value;
    if (d == "") {
      alert("Naziv poruke je obavezan!");
      return false;
    }
    let s = document.forms["forma"]["poruka"].value;
    if (s == "") {
      alert("Poruka je obavezna!");
      return false;
    }
}

const satKazaljka = document.querySelector('[data-sat-kazaljka]')
const minutKazaljka = document.querySelector('[data-minut-kazaljka]')
const sekundaKazaljka = document.querySelector('[data-sekunda-kazaljka]')

function podesavanje() {
    const sadasnjiDatum = new Date();
    const sekunde = sadasnjiDatum.getSeconds() / 60
    const minuti = (sekunde + sadasnjiDatum.getMinutes()) / 60
    const sati = (sadasnjiDatum.getHours()) / 12

    rotacija(satKazaljka, sati)
    rotacija(minutKazaljka, minuti)
    rotacija(sekundaKazaljka, sekunde)
}

function rotacija() {
    element.style.setProperty('--rotation', 360)
}

setInterval(podesavanje, 1000);