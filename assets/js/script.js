// Arreglos de propiedades
const propiedades_venta = [
    { nombre: 'Casa en el centro', src: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg', descripcion: 'Casa amplia en el centro de la ciudad.', ubicacion: 'Centro', habitaciones: 4, costo: 250000, smoke: false, pets: true },
    { nombre: 'Apartamento moderno', src: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descripcion: 'Apartamento con diseño moderno.', ubicacion: 'Norte', habitaciones: 2, costo: 150000, smoke: true, pets: false },
    { nombre: 'Casa en la playa', src: 'https://images.pexels.com/photos/2459/stairs-home-loft-lifestyle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descripcion: 'Hermosa casa frente al mar.', ubicacion: 'Playa', habitaciones: 3, costo: 300000, smoke: false, pets: true },
    { nombre: 'Penthouse lujoso', src: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descripcion: 'Penthouse con vistas panorámicas.', ubicacion: 'Centro', habitaciones: 5, costo: 500000, smoke: true, pets: false }
  ];
  
  const propiedades_alquiler = [
    { nombre: 'Departamento céntrico', src: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descripcion: 'Departamento en el corazón de la ciudad.', ubicacion: 'Centro', habitaciones: 3, costo: 1200, smoke: true, pets: true },
    { nombre: 'Casa suburbana', src: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descripcion: 'Casa ideal para familias.', ubicacion: 'Suburbios', habitaciones: 4, costo: 1800, smoke: false, pets: true },
    { nombre: 'Apartamento económico', src: 'https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descripcion: 'Apartamento económico en buena zona.', ubicacion: 'Sur', habitaciones: 2, costo: 800, smoke: true, pets: false },
    { nombre: 'Loft moderno', src: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descripcion: 'Loft con diseño moderno y minimalista.', ubicacion: 'Centro', habitaciones: 1, costo: 1000, smoke: false, pets: false }
  ];
  
  // Función para renderizar propiedades
  function renderizarPropiedades(tipo, max = 3) {
    const propiedades = tipo === 'venta' ? propiedades_venta : propiedades_alquiler;
    const contenedor = document.getElementById(`propiedades-${tipo}`);
    contenedor.innerHTML = '';
    for (let i = 0; i < Math.min(propiedades.length, max); i++) {
      const propiedad = propiedades[i];
      contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
              <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
              <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo}</p>
              <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Se permite fumar' : 'No se permite fumar'}
              </p>
              <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i> ${propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}
              </p>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  // Función para redirigir a la página correspondiente
  function verMas(tipo) {
    window.location.href = `propiedades_${tipo}.html`;
  }
  
  // Renderizar propiedades al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    renderizarPropiedades('venta');
    renderizarPropiedades('alquiler');
  });
  