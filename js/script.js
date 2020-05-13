function aparatecontact() {
    document.getElementById("contact").style.width = "80px";
    document.getElementById('backgroundPC').style.display = "block"
    setTimeout(() => {
        document.getElementById('hcontact').style.display = "block"
    }, 1500)
    setTimeout(() => {
        document.getElementById('formContact').style.display = "flex"
        document.getElementById('vertical_lign').style.display = "block"
        document.getElementById('infoContact').style.display = "flex"
    }, 1800)

}

function closePC(e) {
    if (e.target.id === "backgroundPC" || e.target.id === "deletec") {
        document.getElementById('backgroundPC').style.display = "none"
        document.getElementById('hcontact').style.display = "none"
        document.getElementById('formContact').style.display = "none"
        document.getElementById('vertical_lign').style.display = "none"
        document.getElementById('infoContact').style.display = "none"
        document.getElementById("contact").style.width = "55px";

    }
}

let pvpopen = false;

function openpvp() {
    if(pvpopen){
        document.getElementById('backgroundVP').style.display = "none"
        document.getElementById('pvp').style.display = "none"
        document.getElementById('cpvp1').style.display = "none"
        document.getElementById('cpvp2').style.display = "none"
        pvpopen = false;
        return
    }
    document.getElementById('pvp').style.display = 'block'
    document.getElementById('backgroundVP').style.display = 'block'
    setTimeout(() => {
        document.getElementById('cpvp1').style.display = "block"
    }, 600)
    setTimeout(() => {
        document.getElementById('cpvp2').style.display = "block"
    }, 900)
    pvpopen = true;
}

function closepvp(e) {
    if (e.target.id === "backgroundVP" || e.target.id === "languetvp" || e.target.id === 'voirPlus') {
        document.getElementById('backgroundVP').style.display = "none"
        document.getElementById('pvp').style.display = "none"
        document.getElementById('cpvp1').style.display = "none"
        document.getElementById('cpvp2').style.display = "none"
        pvpopen = false;
    }
}