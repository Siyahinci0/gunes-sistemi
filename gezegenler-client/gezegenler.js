function getData() {

    let table = "<table>"
            + "<tr>"
            
            + "<th>Gezegen Adi</th>"
            
            + "</tr>";


    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/gezegenler", false);
    xhttp.send();

    const gezegenler = JSON.parse(xhttp.responseText);


    for(let x=0; x< gezegenler.length; x++){
                                        
        let gezegen = gezegenler[x];

        console.log("gezegen ismi: " + gezegen.gezegenAdi);
        console.log("gezegen ismi: " + gezegen.id);

        const link = "gezegen.html?id=" + gezegen.id;

        table += "<tr>"

        + "<td><a href=" + link + ">" + gezegen.gezegenAdi +"</a></td>"
        
        + "</tr>"

    }

    table += "</table>";
    let content = document.getElementById("content");
    content.innerHTML = table;
            
}