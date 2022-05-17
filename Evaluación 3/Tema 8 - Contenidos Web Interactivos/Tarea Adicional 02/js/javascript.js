let menuActivo = 0;

function abrirMenu() {
  let menu = document.getElementById("ulMenuPrincipal");
  let cerrar = document.getElementById("cerrarMenu");

  //Si la variable menuActivo está a 0 aparece el menú
  if (menuActivo == 0) {
      menu.classList.add("transicionUl");
      cerrar.style.display = "inline-block";
      
      menuActivo = 1;
  }
}

/*Si hacemos clic en la X del menú, este desaparece*/
function cerrarMenu() {
  let menu = document.getElementById("ulMenuPrincipal");
  let cerrar = document.getElementById("cerrarMenu");

  // Si la variable menuActivo está a 1 oculta el menú
  if (menuActivo == 1) {
      menu.classList.remove("transicionUl");
      cerrar.style.display = "none";
      
      menuActivo = 0;
  }
}
