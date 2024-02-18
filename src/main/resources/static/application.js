let ut="";

function validation() {
    let film = document.getElementById("selectFilm").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    console.log(film, antall, fornavn, etternavn, telefonnr, epost)

    if (antall === "" || fornavn === "" || etternavn === "" || telefonnr === "" || epost=== "") {
        document.getElementById("feilMeldingAntall").innerText = " Må skrive noe inn i antall";
        document.getElementById("feilMeldingFornavn").innerText = " Må skrive noe inn i fornavn";
        document.getElementById("feilMeldingEtternavn").innerText = " Må skrive noe inn i etternavn";
        document.getElementById("feilMeldingTelefonnr").innerText = " Må skrive noe inn i telefonnr";
        document.getElementById("feilMeldingEpost").innerText = " Må skrive noe inn i epost";
    }

    // kontrol av fornavn formatt
    const fornavnregexp = /^[a-z ,.'-]+$/i;
    if (!fornavnregexp.test(fornavn)) {
        alert("Skriv inn et gyldig fornavn.");
        return;
    }

    // kontrol av etternavn formatt
    const etternavnregexp = /^[a-z ,.'-]+$/i;
    if (!etternavnregexp.test(etternavn)) {
        alert("Skriv inn et gyldig etternavn.");
        return;
    }

    // kontrol av telefonnummer formatt
    const tlfnRgl = /^[0-9]{8}$/;
    if (!tlfnRgl.test(telefonnr)) {
        alert("Skriv inn et gyldig telefonnummer.");
        return;
    }

    // kontrol av epost formatt
    const emailRgl = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRgl.test(epost)) {
        alert("Skriv inn et gyldig epost adresse.");
        return;
    }

    filmInfo = [];
    filmInfo.push({
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    });
    console.log(filmInfo)

    ut += "<tr>";
    for (f of filmInfo) {
        ut += "<th>" + f.film + "</th>" +
            "<th>" + f.antall + "</th>" +
            "<th>" + f.fornavn + "</th>" +
            "<th>" + f.etternavn + "</th>" +
            "<th>" + f.telefonnr + "</th>" +
            "<th>" + f.epost + "</th>";

    }
    ut += "</tr>";
    document.getElementById("bestillingTable").innerHTML = ut;

    // For å tilbakestille skjemafelt
    document.getElementById("bestillingForm").reset();

}
//slett function
function slett(){
    document.getElementById("bestillingTable").innerHTML=ut;
    ut="";
}

