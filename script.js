// Requisito 1: Cambiar la imagen del mapa al hacer clic en "Nuevos Eventos"
function cambiarMapa() {
    let mapaImg = document.getElementById("mapa");
    mapaImg.src = "img/mapa2.png"; // Asegúrate de tener esta segunda imagen en tu carpeta img
    mapaImg.alt = "Mapa de nuevos eventos";
}

// Requisito 2: Sumar asistentes usando una función reutilizable con parámetros
function sumarAsistentes(idContador) {
    let spanAsistentes = document.getElementById(idContador);
    
    // Obtenemos el texto actual, lo convertimos a número con Number() y sumamos 1
    let asistentesActuales = Number(spanAsistentes.innerText);
    let nuevosAsistentes = asistentesActuales + 1;
    
    // Asignamos el nuevo valor de vuelta al span
    spanAsistentes.innerText = nuevosAsistentes;
}

// Requisito 3: Mostrar alerta al hacer clic en "Crear Evento"
function crearEvento() {
    alert("Evento creado!");
}

// Extra: Buscador con validación de campo vacío
function buscarEvento() {
    let textoBusqueda = document.getElementById("busqueda").value;
    
    if (textoBusqueda === "") {
        alert("Por favor, escribe algo para buscar.");
    } else {
        alert("Buscando: " + textoBusqueda);
    }
}