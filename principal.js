function cerrarSesion() {
    if (confirm("¿Estás seguro que deseas cerrar sesión?")) {
        alert("Sesión cerrada exitosamente");
        window.location.href = "index.html";
    }
}

