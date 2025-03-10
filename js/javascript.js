document.addEventListener("DOMContentLoaded", () => {
    const caraDado = document.getElementById("caraDado");
    const botonLanzar = document.getElementById("botonLanzar");
    const botonTema = document.getElementById("botonTema");
    const iniciarPartida = document.getElementById("iniciarPartida");
    const numLanzamientos = document.getElementById("numLanzamientos");
    const numeroSeleccionado = document.getElementById("numeroSeleccionado");
    const body = document.body;

    const contadores = {
        "1": document.getElementById("contador1"),
        "2": document.getElementById("contador2"),
        "3": document.getElementById("contador3"),
        "4": document.getElementById("contador4"),
        "5": document.getElementById("contador5"),
        "6": document.getElementById("contador6"),
    };

    const carasDado = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    let lanzamientosRestantes = 0;

    // Comprobar el tema guardado
    if (localStorage.getItem("modoOscuro") === "true") {
        body.classList.add("modo-oscuro");
        botonTema.textContent = "☀️";
    }

    // Actualizar número de lanzamientos en tiempo real
    numLanzamientos.addEventListener("input", () => {
        numeroSeleccionado.textContent = numLanzamientos.value;
    });

    // Iniciar partida
    iniciarPartida.addEventListener("click", () => {
        let cantidad = parseInt(numLanzamientos.value);
        if (isNaN(cantidad) || cantidad < 1) {
            alert("Ingresa un número válido de lanzamientos.");
            return;
        }

        lanzamientosRestantes = cantidad;

        // Resetear contadores
        for (let i = 1; i <= 6; i++) {
            contadores[i.toString()].textContent = "0";
        }

        botonLanzar.disabled = false;
        mostrarConfeti(`Seleccionaste el número ${cantidad}`);
    });

    // Mostrar mensaje con confeti
    function mostrarConfeti(mensaje) {
        const mensajeDiv = document.createElement("div");
        mensajeDiv.classList.add("mensaje-confeti");
        mensajeDiv.innerHTML = `🎉 ${mensaje} 🎉`;

        document.body.appendChild(mensajeDiv);

        setTimeout(() => {
            mensajeDiv.remove();
        }, 3000);
    }

    // Lanzar dado con animación
    botonLanzar.addEventListener("click", () => {
        if (lanzamientosRestantes > 0) {
            caraDado.style.transition = "transform 0.5s ease-in-out";
            caraDado.style.transform = "rotate(720deg) scale(0.5)";

            setTimeout(() => {
                let resultado = Math.floor(Math.random() * 6) + 1;
                caraDado.textContent = carasDado[resultado - 1];

                // Resetear transformación
                caraDado.style.transform = "rotate(0deg) scale(1)";

                // Incrementar contador
                contadores[resultado.toString()].textContent =
                    parseInt(contadores[resultado.toString()].textContent) + 1;

                lanzamientosRestantes--;

                // Mostrar conteo en la consola
                console.log("Conteo de lanzamientos:", {
                    "1": contadores["1"].textContent,
                    "2": contadores["2"].textContent,
                    "3": contadores["3"].textContent,
                    "4": contadores["4"].textContent,
                    "5": contadores["5"].textContent,
                    "6": contadores["6"].textContent
                });

                // Asignamos el valor de los contadores a las variables
                carasN1 = contadores["1"].textContent;
                carasN2 = contadores["2"].textContent;
                carasN3 = contadores["3"].textContent;
                carasN4 = contadores["4"].textContent;
                carasN5 = contadores["5"].textContent;
                carasN6 = contadores["6"].textContent;                

                if (lanzamientosRestantes === 0) {
                    botonLanzar.disabled = true;
                    mostrarConfeti("¡Partida terminada!");
                }
            }, 500);
        }
    });

    // Cambiar tema
    botonTema.addEventListener("click", () => {
        body.classList.toggle("modo-oscuro");

        if (body.classList.contains("modo-oscuro")) {
            botonTema.textContent = "☀️";
            localStorage.setItem("modoOscuro", "true");
        } else {
            botonTema.textContent = "🌙";
            localStorage.setItem("modoOscuro", "false");
        }
    });
});
