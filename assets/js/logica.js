
// document.getElementById("mobile-menu").addEventListener("click", function () {
//     var navList = document.getElementById("nav-list");
//     if (navList.classList.contains("active")) {
//         navList.classList.remove("active");
//     } else {
//         navList.classList.add("active");
//     }
// });

// document.addEventListener("DOMContentLoaded", function() {
//     var menuToggle = document.getElementById("mobile-menu");
//     var navListContainer = document.getElementById("nav-list-container");

//     menuToggle.addEventListener("click", function() {
//         if (navListContainer.classList.contains("active")) {
//             navListContainer.classList.remove("active");
//             navListContainer.style.display = "none";
//         } else {
//             navListContainer.classList.add("active");
//             navListContainer.style.display = "block";
//         }
//     });
// });

function cambioValor(idCant, idBtn) {
    elemento = document.getElementById(idCant);
    elementoBoton = document.getElementById(idBtn);
    if (parseInt(elemento.value) > 0) {
        elementoBoton.disabled = false;
    } else {
        elementoBoton.disabled = true;
        elementoBoton.classList.remove('btn-danger');
        elementoBoton.classList.add('btn-primary');
        elementoBoton.textContent = "Añadir al carro";
        contarProductos();
        
    }
}

function colorBoton(idBoton, idCant) {
    btnPresionado = document.getElementById(idBoton)
    elementoCantidad = document.getElementById(idCant);
    if (btnPresionado.classList.contains('btn-primary') && parseInt(elementoCantidad.value) > 0) {
        btnPresionado.classList.remove('btn-primary');
        btnPresionado.classList.add('btn-danger');
        btnPresionado.textContent = "Quitar del carro";
    } else {
        
        elementoCantidad.value = 0;
        
        btnPresionado.classList.remove('btn-danger');
        btnPresionado.classList.add('btn-primary');
        btnPresionado.textContent = "Añadir al carro";
    }
}

function contarProductos() {
    var addToCartBtn = document.getElementsByName('addToCartBtn');
    var icono = document.getElementById('contador');
    var cont=0;
    for(var i=0;i<addToCartBtn.length;i++){
        if(addToCartBtn[i].classList.contains('btn-danger'))
            cont += 1;
    }
    icono.textContent = cont
    if (cont > 0){
        contador.style.display = "block";
    } else {
        contador.style.display = "none";
    }
}

function agregarBtn(idBoton, idCant){
    colorBoton(idBoton, idCant);
    cambioValor(idCant, idBoton);
    contarProductos();
}


function modificarCantidad(elemento, valor, elementoBoton) {
    var elementoCantidad = document.getElementById(elemento);
    inputValue = parseInt(elementoCantidad.value)
    max = elementoCantidad.max
    min = elementoCantidad.min
    if ((inputValue + valor) >= min && (inputValue + valor) <= max) {
        elementoCantidad.value = inputValue + valor;
    }
    cambioValor(elemento, elementoBoton);
    
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