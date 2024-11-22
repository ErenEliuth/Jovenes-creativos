// Función para enviar un nuevo destino a la API
const crearDestino = async (nombre, imagen, estrellas) => {
    try {
        const response = await fetch("https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/destinos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                imagen,
                estrellas,
            }),
        });

        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error("Error al crear el destino");
        }

        const nuevoDestino = await response.json();
        console.log("Destino creado con éxito:", nuevoDestino);

        // Mensaje de confirmación
        alert("Destino creado con éxito");
    } catch (error) {
        console.error("Error al enviar el destino:", error);
        alert("Hubo un error al subir el destino. Inténtalo de nuevo.");
    }
};

// Evento del botón para crear destino
document.getElementById("btn-crear-destino").addEventListener("click", (e) => {
    e.preventDefault();

    // Obtener valores de los inputs
    const nombre = document.getElementById("nombre-lugar").value;
    const imagen = document.getElementById("imagen-lugar").value;
    const estrellas = parseInt(document.getElementById("estrellas-lugar").value);

    // Validación básica
    if (!nombre || !imagen || isNaN(estrellas) || estrellas < 1 || estrellas > 5) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    // Llamar a la función para crear el destino
    crearDestino(nombre, imagen, estrellas);
});
