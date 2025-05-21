document.getElementById("btnAbrirMapa").addEventListener("click", () => {
    document.getElementById("mapaMesas").style.display = "block";
});

  // Generar mapa de mesas
const mesasGrid = document.getElementById("mesasGrid");
for (let i = 1; i <= 15; i++) {
    const mesa = document.createElement("div");
    mesa.classList.add("mesa");
    mesa.textContent = i;
    mesa.onclick = () => seleccionarMesa(i);
    if (localStorage.getItem(`reserva_${i}`)) {
    mesa.classList.add("ocupada");
    mesa.onclick = null;
    }
    mesasGrid.appendChild(mesa);
}

function seleccionarMesa(id) {
    if (localStorage.getItem(`reserva_${id}`)) {
    alert("Mesa ya reservada");
    return;
    }
    document.getElementById("mesaSeleccionada").textContent = id;
    document.getElementById("mesa").value = id;
    document.getElementById("formularioReserva").style.display = "flex";
}

function cerrarFormularioReserva() {
    document.getElementById("formularioReserva").style.display = "none";
}

function enviarReserva(e) {
    e.preventDefault();
    const id = document.getElementById("mesa").value;
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const personas = document.getElementById("personas").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    const datos = { nombre, telefono, personas, fecha, hora };
    localStorage.setItem(`reserva_${id}`, JSON.stringify(datos));

    alert(`Reserva completada para la mesa ${id}`);
    cerrarFormularioReserva();

    const mesa = [...document.querySelectorAll(".mesa")].find(m => m.textContent == id);
    mesa.classList.add("ocupada");
    mesa.onclick = null;
    function cerrarMapaMesas() {
        document.getElementById("mapaMesas").style.display = "none";
    }
}

