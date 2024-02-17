function validation() {
    let film = document.getElementById("slecetFilm").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let email = document.getElementById("email").value;

    console.log(film, antall, fornavn, etternavn, telefonnr, email)

    if (antall === "" || fornavn === "" || etternavn === "" || telefonnr === "" || email === "") {
        document.getElementById("feilMeldingAntall").innerText = " Må skrive noe inn i antall";
        document.getElementById("feilMeldingFornavn").innerText = " Må skrive noe inn i fornavn";
        document.getElementById("feilMeldingEtternavn").innerText = " Må skrive noe inn i etternavn";
        document.getElementById("feilMeldingTlfnr").innerText = " Må skrive noe inn i telefonnr";
        document.getElementById("feilMeldingEmail").innerText = " Må skrive noe inn i email";
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

    // kontrol av email formatt
    const emailRgl = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRgl.test(email)) {
        alert("Skriv inn et gyldig epost adresse.");
        return;
    }

    filmInfo = [];
    filmInfo.push({
        filn: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        email: email
    });
    console.log(filmInfo)

    let ut = "<tr>";
    for (f of filmInfo) {
        ut += "<th>" + f.filn + "</th>" +
            "<th>" + f.antall + "</th>" +
            "<th>" + f.fornavn + "</th>" +
            "<th>" + f.etternavn + "</th>" +
            "<th>" + f.telefonnr + "</th>" +
            "<th>" + f.email + "</th>";

    }
    ut += "</tr>";
    document.getElementById("table").innerHTML = ut;

    // For å tilbakestille skjemafelt
    document.getElementById("bestillingForm").reset();
}
