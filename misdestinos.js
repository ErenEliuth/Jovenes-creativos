function eliminarDestino(index) {
    if (confirm('¿Estás seguro de que quieres eliminar este destino?')) {
        let destinos = JSON.parse(localStorage.getItem('destinos')) || [];
        destinos.splice(index, 1);
        localStorage.setItem('destinos', JSON.stringify(destinos));
        cargarDestinos();
        alert('Destino eliminado exitosamente');
    }
}

function cargarDestinos() {
    const destinos = JSON.parse(localStorage.getItem('destinos')) || [];
    const container = document.getElementById('destinosContainer');
    container.innerHTML = '';

    if (destinos.length === 0) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #666;">No hay destinos guardados aún.</p>';
        return;
    }

    destinos.forEach((destino, index) => {
        const destinoHtml = `
            <div class="destino-card">
                <button class="eliminar-btn" onclick="eliminarDestino(${index})">Eliminar</button>
                <img src="${destino.imagen}" alt="${destino.ciudad}" onerror="this.src='https://via.placeholder.com/300x200?text=Imagen+no+disponible'">
                <div class="destino-info">
                    <h3>${destino.ciudad}, ${destino.pais}</h3>
                    <p>${destino.descripcion}</p>
                    <p class="fecha">Creado el: ${destino.fecha}</p>
                </div>
            </div>
        `;
        container.innerHTML += destinoHtml;
    });
}

window.onload = cargarDestinos;