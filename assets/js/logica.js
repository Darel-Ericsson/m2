
document.getElementById("mobile-menu").addEventListener("click", function () {
    var navList = document.getElementById("nav-list");
    if (navList.classList.contains("active")) {
        navList.classList.remove("active");
    } else {
        navList.classList.add("active");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("mobile-menu");
    var navListContainer = document.getElementById("nav-list-container");

    menuToggle.addEventListener("click", function() {
        if (navListContainer.classList.contains("active")) {
            navListContainer.classList.remove("active");
            navListContainer.style.display = "none";
        } else {
            navListContainer.classList.add("active");
            navListContainer.style.display = "block";
        }
    });
});

function sumaNumero(elemento, valor) {
    inputValue = parseInt(document.getElementById(elemento).value)
    document.getElementById(elemento).value = inputValue + valor;
}

function login_usuario() {
    var usuario = document.getElementById("login_usuario").value;
    var pass = document.getElementById("login_pass").value;
  
    if (usuario === pass && usuario.length > 0) {
      window.open("index.html");
    } else {
      document.getElementById("login_usuario").value = "";
      document.getElementById("login_pass").value = "";
    }
  }

/********************************************** */
const cartInfo = document.querySelector('.cart-product')