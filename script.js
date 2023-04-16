"use strict";
async function fetchJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    manipularDados(data);
}
fetchJSON('https://api.origamid.dev/json/cursos.json');
function manipularDados(data) {
    console.log(data);
}
