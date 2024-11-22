document.addEventListener("DOMContentLoaded", async () => {
    const destinosContainer = document.getElementById("destinos-container");

    // Función para obtener los destinos desde la API
    async function fetchDestinos() {
        try {
            const response = await fetch("https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/destinos");
            if (!response.ok) throw new Error("Error al obtener destinos");

            const destinos = await response.json();
            mostrarDestinos(destinos);
        } catch (error) {
            console.error(error);
            destinosContainer.innerHTML = "<p>Error al cargar los destinos. Intenta nuevamente más tarde.</p>";
        }
    }

    // Función para mostrar los destinos en la página
    function mostrarDestinos(destinos) {
        destinosContainer.innerHTML = ""; // Limpiar contenedor
        if (destinos.length === 0) {
            destinosContainer.innerHTML = "<p>No hay destinos disponibles.</p>";
            return;
        }

        destinos.forEach(destino => {
            const destinoCard = document.createElement("div");
            destinoCard.classList.add("destino-card");

            destinoCard.innerHTML = `
                <img src="${destino.imagen}" alt="Imagen de ${destino.nombre}">
                <h3>${destino.nombre}</h3>
                <p>Valoración: ${"⭐".repeat(destino.estrellas)}</p>
                <button class="edit-btn" data-id="${destino.id}">Editar</button>
                <button class="delete-btn" data-id="${destino.id}">Eliminar</button>
            `;

            destinosContainer.appendChild(destinoCard);
        });

        // Agregar eventos a los botones
        const editButtons = document.querySelectorAll(".edit-btn");
        const deleteButtons = document.querySelectorAll(".delete-btn");

        editButtons.forEach(button => {
            button.addEventListener("click", () => editarDestino(button.dataset.id));
        });

        deleteButtons.forEach(button => {
            button.addEventListener("click", () => eliminarDestino(button.dataset.id));
        });
    }

    // Función para eliminar un destino
    async function eliminarDestino(id) {
        if (confirm("¿Estás seguro de que deseas eliminar este destino?")) {
            try {
                await fetch(`https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/destinos/${id}`, {
                    method: "DELETE",
                });
                alert("Destino eliminado exitosamente.");
                fetchDestinos(); // Actualizar la lista de destinos
            } catch (error) {
                console.error("Error al eliminar el destino:", error);
            }
        }
    }

    // Función para editar un destino
    function editarDestino(id) {
        // Redirigir a la página de edición o mostrar un formulario emergente (por implementar)
        alert(`Función para editar el destino con ID: ${id} (en desarrollo)`);
    }

    // Cargar los destinos por primera vez
    await fetchDestinos();

    // Actualizar los destinos cada 30 segundos
    setInterval(fetchDestinos, 30000); // 30 segundos
});
