async function importImages() {
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json(); /*Récupération des données*/

  const gallery = document.querySelector(".gallery"); /*Selection du parent*/

  for (const image of data) {
    /*Déclaration de ma boucle*/
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("p");
    title.textContent = image.title;
    img.src = image.imageUrl; /*la source de l'image est imageUrl*/
    img.alt = image.title; /*On récupère le titre des images*/
    img.crossOrigin = "anonymous"; /*Fix du bug d'affichage*/
    div.appendChild(img); /*importation des images au parent*/
    div.appendChild(title);
    gallery.appendChild(div);
  }
}

importImages();

const filterAll = document.querySelector("#all");
const filterObjet = document.querySelector("#objects");
const filterAppartements = document.querySelector("#appartements");
const filterHotels = document.querySelector("#hotels-restaurants");

filterAll.addEventListener("click", async function () {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
  importImages();
});

filterObjet.addEventListener("click", async function () {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();
  let result = data.filter(
    (item) => item.category.name === "Objets"
  ); /* Filtrage  des données sur le nom de la catégorie des travaux */

  for (const image of result) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("p");
    title.textContent = image.title;
    img.src = image.imageUrl;
    img.alt = image.title;
    img.crossOrigin = "anonymous";
    div.appendChild(img);
    div.appendChild(title);
    gallery.appendChild(div);
  }
});

filterAppartements.addEventListener("click", async function () {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();
  let result = data.filter((item) => item.category.name === "Appartements");

  for (const image of result) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("p");
    title.textContent = image.title;
    img.src = image.imageUrl;
    img.alt = image.title;
    div.appendChild(img);
    div.appendChild(title);
    gallery.appendChild(div);
  }
});

filterHotels.addEventListener("click", async function () {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();
  let result = data.filter(
    (item) => item.category.name === "Hotels & restaurants"
  );

  for (const image of result) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("p");
    title.textContent = image.title;
    img.src = image.imageUrl;
    img.alt = image.title;
    img.crossOrigin = "anonymous";
    div.appendChild(img);
    div.appendChild(title);
    gallery.appendChild(div);
  }
});
const buttons = document.querySelectorAll(".btn-projets");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("active");

    buttons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("active");
      }
    });
  });
});
