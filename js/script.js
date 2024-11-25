
const userInput = document.getElementById("userInput");
const countdown = document.getElementById("countdown");
const result = document.getElementById("result");
const restart = document.getElementById("restart"); 1 
let eleccionUsuario = 0;
let eleccionOrdenador;
let intervalo;
let juegoTerminado = false;

userInput.addEventListener("change", function() {
  eleccionUsuario = userInput.value;
});

function cuentaAtras(tiempo) {
  let contador = tiempo;
  intervalo = setInterval(() => {
    countdown.textContent = contador;
    contador--;
    if (contador < 0) {
      clearInterval(intervalo); // Limpia el intervalo
      juegoTerminado = true;
      inicioJuego(); // Inicia el juego y muestra los resultados
    }
  }, 1000);
}

function inicioJuego() {
  if (juegoTerminado) {
    // Mostrar los resultados finales
    if (eleccionUsuario === eleccionOrdenador) {
      result.textContent = "¡Has ganado! Tu elección coincide con la del ordenador.";
    } else {
      result.textContent = "¡Has perdido! Tu elección no coincide con la del ordenador.";
    }
  } else {
    // Generar un número aleatorio para el ordenador y comparar
    eleccionOrdenador = Math.floor(Math.random() * 3) + 1;
    if (eleccionUsuario === eleccionOrdenador) {
      result.textContent = "¡Has ganado! Tu elección coincide con la del ordenador.";
    } else {
      result.textContent = "¡Has perdido! Tu elección no coincide con la del ordenador.";
    }
  }
}

// Iniciar la cuenta atrás
cuentaAtras(5);

restart.addEventListener("click", function() {
  // Reiniciar el juego
  clearInterval(intervalo);
  juegoTerminado = false;
  countdown.textContent = 5;
  inicioJuego();
});