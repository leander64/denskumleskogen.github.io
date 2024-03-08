function venstre() {
    document.getElementById("story").innerHTML = `
        <h1>Tapt</h1>
        <p>Du gikk til venstre og ble fortapt i skogen.</p>
    `;
}

function hoyre() {
    document.getElementById("story").innerHTML = `
        <h1>Tapt</h1>
        <p>Du gikk til høyre og ble fortapt i skogen.</p>
    `;
}

function rettFram() {
    document.getElementById("story").innerHTML = 
        `
        <h1>Vidare</h1>
        <p>Du gikk rett fram og kommer fram til ei bru med troll.</p>
        <button onclick="spring()">Spring gjennom beina på trolla</button>
        <button onclick="rom()">Røm din veg</button>
    `;
}

function spring() {
    document.getElementById("story").innerHTML = `
        <h1>Ferdig</h1>
        <p>Du sprang gjennom beina på trolla og kom heim til hytta di.</p>
    `;
}

function rom() {
    document.getElementById("story").innerHTML = `
        <h1>Tapt</h1>
        <p>Du prøvde å rømme, men ble fanget av trolla.</p>
    `;
}