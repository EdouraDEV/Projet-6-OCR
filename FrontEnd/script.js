const reponse = await fetch("http://localhost:5678/api/works");
let works;
works = await reponse.json();

const boutonFiltrer = document.querySelector(".btn-filtrer");
console.log(boutonFiltrer);
boutonFiltrer.addEventListener("click", function () {
  const worksFiltrees = works.filter(function (work) {
    return works.prix <= 35;
  });
});
