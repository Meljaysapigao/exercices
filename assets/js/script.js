console.log("script chargé");

let monPrenom = "Meljay"

let titre = document.querySelector("h1")
    titre.innerText = monPrenom

let main = document.querySelector("main");
let titreSecondaire = document.createElement("h2");
    main.appendChild(titreSecondaire)


let titre3 = document.createElement("h3");
    main.appendChild(titre3);
    let liste = document.createElement("ul");
     main.appendChild(liste);
    let li = document.createElement("li");
     liste.appendChild(li);
