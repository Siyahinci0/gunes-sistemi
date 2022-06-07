function getData() {

    const urlParams = new URLSearchParams(window.location.search);
    const gezegenId = urlParams.get('id');

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/gezegen/" + gezegenId, false);
    xhttp.send();

    const gezegenBilgisi = JSON.parse(xhttp.responseText);

    console.log("yasi =" + gezegenBilgisi.yasi);


    let table = "<table>"
    + "<tr>"
    + "<th>Gezegen Id///</th>"
    + "<th>Gezegen Adi///</th>"
    + "<th>Ne Zaman Kesfedildi/// </th>"
    + "<th>Sicakligi/// </th>"
    + "<th>Gunese Olan Uzakligi/// </th>"
    + "<th>Dunyaya OLan Uzakligi/// </th>"
    + "<th>Hacmi/// </th>"
    + "<th>Yasi/// </th>"
    + "</tr>";

    table += "<tr>"
    + "<td>" + gezegenBilgisi.id + "</td>"
    + "<td>" + gezegenBilgisi.gezegenAdi + "</td>"
    + "<td>" + gezegenBilgisi.neZamanKesfedildigi + "</td>"
    + "<td>" + gezegenBilgisi.sicakligi + "</td>"
    + "<td>" + gezegenBilgisi.guneseOlanUzakligi + "</td>"
    + "<td>" + gezegenBilgisi.dunyayaOlanUzakligi + "</td>"
    + "<td>" + gezegenBilgisi.hacmi + "</td>"
    + "<td>" + gezegenBilgisi.yasi + "</td>"
    + "</tr>";

    table += "</table";

    const gezegenDetayi = document.getElementById("content");
    gezegenDetayi.innerHTML = table;


    const gezegenBaslik = document.getElementById("gezegen");
    gezegenBaslik.innerText = "Merhaba ben " + gezegenBilgisi.gezegenAdi;

}