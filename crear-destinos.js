document.getElementById('destinoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const destino = {
        pais: document.getElementById('pais').value,
        ciudad: document.getElementById('ciudad').value,
        descripcion: document.getElementById('descripcion').value,
        imagen: document.getElementById('imagen').value,
        fecha: new Date().toLocaleDateString()
    };

    let destinos = JSON.parse(localStorage.getItem('destinos')) || [];
    destinos.push(destino);
    localStorage.setItem('destinos', JSON.stringify(destinos));
    
    alert('Destino guardado exitosamente');
    this.reset();
});