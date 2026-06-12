const liste = ["Am Strand entspannen", "Neue Städte entdecken", "Gutes Essen genießen", "Fotos machen"];
const ul = document.getElementById("urlaubsListe");

liste.forEach(eintrag => {
    const li = document.createElement("li");
    li.textContent = eintrag;
    ul.appendChild(li);
});

