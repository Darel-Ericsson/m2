
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
        
        document.getElementById("botonCarrito").style.display='';
        document.getElementById("botonCarrito").classList.remove('blur-out')
        document.getElementById("botonCarrito").classList.add('blur-in')
        
    } else {
        document.getElementById("botonCarrito").classList.remove('blur-in')
        document.getElementById("botonCarrito").classList.add('blur-out')
        

    }
}

function resetList() {
    document.querySelector('#listaProd').innerHTML = '';
}

function desplegarProuctos() {
    const productCards = document.querySelectorAll('.card-producto');
    const cardContainer = document.createElement('div');
    var cantidadesProds = document.getElementsByName("qty");
    var indicesCard = [];
    var precioTotal = 0;

    var addToCartBtn = document.getElementsByName('addToCartBtn');
    for(var i=0;i<addToCartBtn.length;i++){
        if(addToCartBtn[i].classList.contains('btn-danger'))
            indicesCard.push(i);
    }

    indicesCard.forEach(i=>{
        if (i<productCards.length) {
            const clone = productCards[i].cloneNode(true);
            cardTitle = clone.querySelector('.card-title').textContent;
            clone.querySelector('.card-title').remove();
            qtyLabel = "".concat("<p class='mb-0'><span>Cantidad: </span>", cantidadesProds[i].value, "</p>")
            priceLabel = clone.querySelector('.precio').textContent;
            console.log(priceLabel)
            if (priceLabel) {
                subtotal = (parseInt(priceLabel.replace('$','').replace(/\./g, ""))) * parseInt(cantidadesProds[i].value);
                console.log(subtotal)
                precioTotal += subtotal;
                clpSubtotal = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(subtotal)
                subtotalLabel = "".concat("<p class='mb-5'><span>Subtotal: </span>", clpSubtotal, "</p>");
            }

            const detailsElement = document.createElement('details');
            const summaryElement = document.createElement('summary');
            
            summaryElement.textContent = cardTitle;
            detailsElement.appendChild(summaryElement);

            clone.querySelectorAll('a').forEach(link => {link.removeAttribute('href');})

            detailsElement.appendChild(clone);
            cardContainer.appendChild(detailsElement);

            cardContainer.insertAdjacentHTML('beforeend', qtyLabel);
            cardContainer.insertAdjacentHTML('beforeend', subtotalLabel);

            
        }


        
    })
    clpTotal = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(precioTotal)
    document.querySelector('#listaProd').appendChild(cardContainer);
    document.querySelector('#precioTotal').textContent = clpTotal;

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
      window.location.href = "index.html";
    } else {
      document.getElementById("login_usuario").value = "";
      document.getElementById("login_pass").value = "";
    }
  }

  const myModal = document.getElementById('myModal')
  const myInput = document.getElementById('myInput')
  

  
/********************************************** */
const cartInfo = document.querySelector('.cart-product')



document.getElementById("purchase-button").addEventListener("click", function() {
    setTimeout(function() {
      window.location.href = "../../index.html"; // Cambia "nueva_pagina.html" por la URL de la página a la que deseas redirigir
    }, 5000); // 5000 milisegundos = 5 segundos
  });

