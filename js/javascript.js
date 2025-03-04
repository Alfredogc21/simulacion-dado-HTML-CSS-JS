document.addEventListener("DOMContentLoaded", () => {
    const caraDado = document.getElementById("caraDado");
    const botonLanzar = document.getElementById("botonLanzar");
    const botonTema = document.getElementById("botonTema");
    const body = document.body;

    // Caras del dado con emojis
    const carasDado = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    // Comprobar el tema guardado en localStorage
    if (localStorage.getItem("modoOscuro") === "true") {
        body.classList.add("modo-oscuro");
        botonTema.textContent = "☀️";
    }

    botonLanzar.addEventListener("click", () => {
        caraDado.style.transform = "rotate(360deg)";
        
        setTimeout(() => {
            caraDado.style.transform = "rotate(0deg)";
            const indiceAleatorio = Math.floor(Math.random() * 6);
            caraDado.textContent = carasDado[indiceAleatorio];
        }, 300);
    });

    // Evento para cambiar el tema
    botonTema.addEventListener("click", () => {
        const esModoOscuro = body.classList.toggle("modo-oscuro");

        // Guardar en localStorage
        localStorage.setItem("modoOscuro", esModoOscuro);

        // Cambia el ícono de luna a sol y viceversa
        botonTema.textContent = esModoOscuro ? "☀️" : "🌙";

        // Rotar el icono
        botonTema.style.transform = "rotate(180deg)";
        setTimeout(() => {
            botonTema.style.transform = "rotate(0deg)";
        }, 300);
    });
});
