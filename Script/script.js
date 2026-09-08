/* =================================================
   WILD RIFT
================================================= */

function seleccionarWR(boton) {

    const botones =
        document.querySelectorAll(
            ".wildrift-btn"
        );

    botones.forEach(function(btn) {

        btn.classList.remove("activo");

    });

    boton.classList.add("activo");

    console.log(
        "Sección seleccionada:",
        boton.textContent
    );

}


/* =================================================
   SELECCIÓN DE JUEGO
================================================= */

function seleccionarJuego(nombre) {

    alert(
        "Seleccionaste: " + nombre
    );

}


/* =================================================
   COMUNIDAD
================================================= */

function entrarComunidad() {

    alert(
        "Bienvenido a la comunidad Nexo Gaming."
    );

}
