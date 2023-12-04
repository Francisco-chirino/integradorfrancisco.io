// Función para abrir el modal
function abrirModal() {
    document.getElementById('miModal').style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

// Evento de clic en el botón para abrir el modal
document.getElementById('miBoton').addEventListener('click', abrirModal);