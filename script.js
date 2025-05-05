function agendarCita() {
    const input = document.getElementById("datetime");
    const mensaje = document.getElementById("mensaje");
    const fecha = new Date(input.value);
    const dia = fecha.getDay(); // 3 = miércoles, 5 = viernes
    const hora = fecha.getHours();

    if (!input.value) {
        mensaje.textContent = "Por favor selecciona una fecha.";
        return;
    }

    if ((dia === 3 || dia === 5) && hora >= 9 && hora < 15) {
        mensaje.textContent = "¡Cita agendada correctamente!";
        // Aquí puedes agregar el envío de notificación por correo con integración real
    } else {
        mensaje.textContent = "Por favor selecciona un miércoles o viernes entre 9:00 a.m. y 3:00 p.m.";
    }
}