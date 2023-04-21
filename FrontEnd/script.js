fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    debugger;
    // Traitez les données et créez les éléments <figue> / <img> / <figcaption>
    data.forEach((works) => {
      const figure = document.createElement("figure");
      figure.classList.add("active");
      const img = document.createElement("img");
      img.src = works.imageUrl;
      const figcaption = document.createElement("figcaption");
      figcaption.textContent = works.title;
      // Ajout des enfants <img> & <ficaption> au parent <figure>
      figure.appendChild(img);
      figure.appendChild(figcaption);
      // Ajoutez les éléments figue à gallery
      const gallery = document.getElementsByClassName("gallery")[0];
      gallery.appendChild(figure);
    });
  });
