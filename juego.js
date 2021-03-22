var botones = document.querySelectorAll(".juego__boton");
var boton;
var jugadas = 0;
var partida = [
  undefined, undefined, undefined,
  undefined, undefined, undefined,
  undefined, undefined, undefined
];
var ganador = 0;
var puntajeJugador1 = 0;
var puntajeJugador2 = 0;
var btnFinRonda = document.querySelector(".boton-siguiente-ronda");
var btnFinal = document.querySelector(".boton-finalizar")
var nombreJugador1 = document.querySelector(".juego__jugador1");
var nombreJugador2 = document.querySelector(".juego__jugador2");
var jugador1Puntaje = document.querySelector(".jugador__puntos1");
var jugador2Puntaje = document.querySelector(".jugador__puntos2");
var sms = document.querySelector(".juego__sms")


let btninico = document.querySelector(".boton-incio");
let btnlen = botones.length;
let juego = document.querySelector(".juego__contenedor");
let puntajeTexto1 = document.querySelector(".juego__puntaje-jugador1");
let puntajeTexto2 = document.querySelector(".juego__puntaje-jugador2");




btninico.addEventListener('click', ()=> {
  juego.classList.remove("none");
  puntajeTexto1.classList.remove("none");
  puntajeTexto2.classList.remove("none");
  btninico.classList.add("none");
  nombreJugador1.innerHTML = prompt("Nombre del jugador 1");
  nombreJugador2.innerHTML = prompt("Nombre del jugador 2");
  jugador1Puntaje.innerHTML = puntajeJugador1;
  jugador2Puntaje.innerHTML = puntajeJugador2;
})


for(let i = 0; i < btnlen; i++) {
  boton = botones[i];

  boton.addEventListener('click', (e)=>{    
    if(partida[i] === undefined) {
      
      if ( //Si ocurre un empate
        jugadas >= 5 && partida[0] == 2 && partida[4] == 2 && partida[8] == 2 && jugadas || 
        jugadas >= 4 && partida[2] == 2 && partida[4] == 2 && partida[6] == 2 && jugadas ||
        jugadas >= 4 && partida[0] == 2 && partida[3] == 2 && partida[6] == 2 && jugadas ||
        jugadas >= 4 && partida[1] == 2 && partida[4] == 2 && partida[7] == 2 && jugadas ||
        jugadas >= 4 && partida[2] == 2 && partida[5] == 2 && partida[8] == 2 && jugadas ||
        jugadas >= 4 && partida[0] == 2 && partida[1] == 2 && partida[2] == 2 && jugadas ||
        jugadas >= 4 && partida[3] == 2 && partida[4] == 2 && partida[5] == 2 && jugadas ||
        jugadas >= 4 && partida[6] == 2 && partida[7] == 2 && partida[8] == 2 && jugadas 
      ) {  
        btnFinRonda.classList.remove("none");
        btnFinal.classList.remove("none"); 
        sms.innerHTML = "Ocurrio un empate";       
      } else if (jugadas%2 === 0) { //si es el jugador 1
        partida[i] = 1;

        botones[i].classList.add("juego__o");
        if (
          jugadas >= 4 && partida[0] == 1 && partida[4] == 1 && partida[8] == 1 && jugadas || 
          jugadas >= 4 && partida[2] == 1 && partida[4] == 1 && partida[6] == 1 && jugadas ||
          jugadas >= 4 && partida[0] == 1 && partida[3] == 1 && partida[6] == 1 && jugadas ||
          jugadas >= 4 && partida[1] == 1 && partida[4] == 1 && partida[7] == 1 && jugadas ||
          jugadas >= 4 && partida[2] == 1 && partida[5] == 1 && partida[8] == 1 && jugadas ||
          jugadas >= 4 && partida[0] == 1 && partida[1] == 1 && partida[2] == 1 && jugadas ||
          jugadas >= 4 && partida[3] == 1 && partida[4] == 1 && partida[5] == 1 && jugadas ||
          jugadas >= 4 && partida[6] == 1 && partida[7] == 1 && partida[8] == 1 && jugadas) {
            //bloqueo de botones despues de ganas


            botones[0].disabled = true;
            botones[1].disabled = true;
            botones[2].disabled = true;
            botones[3].disabled = true;
            botones[4].disabled = true;
            botones[5].disabled = true;
            botones[6].disabled = true;
            botones[7].disabled = true;
            botones[8].disabled = true;

          puntajeJugador1++;
          jugador1Puntaje.innerHTML = puntajeJugador1;
          ganador = 1;
          sms.innerHTML= nombreJugador1.textContent + " ganó la ronda."
          btnFinRonda.classList.remove("none");
          btnFinal.classList.remove("none");
        }
        jugadas++
      }else if (jugadas%2 !== 0) { //si es el jugador2
        partida[i] = 2;

        botones[i].classList.add("juego__x");
        if (
          jugadas >= 5 && partida[0] == 2 && partida[4] == 2 && partida[8] == 2 && jugadas || 
          jugadas >= 4 && partida[2] == 2 && partida[4] == 2 && partida[6] == 2 && jugadas ||
          jugadas >= 4 && partida[0] == 2 && partida[3] == 2 && partida[6] == 2 && jugadas ||
          jugadas >= 4 && partida[1] == 2 && partida[4] == 2 && partida[7] == 2 && jugadas ||
          jugadas >= 4 && partida[2] == 2 && partida[5] == 2 && partida[8] == 2 && jugadas ||
          jugadas >= 4 && partida[0] == 2 && partida[1] == 2 && partida[2] == 2 && jugadas ||
          jugadas >= 4 && partida[3] == 2 && partida[4] == 2 && partida[5] == 2 && jugadas ||
          jugadas >= 4 && partida[6] == 2 && partida[7] == 2 && partida[8] == 2 && jugadas ) {
            //bloqueo de botones despues de ganas


            botones[0].disabled = true;
            botones[1].disabled = true;
            botones[2].disabled = true;
            botones[3].disabled = true;
            botones[4].disabled = true;
            botones[5].disabled = true;
            botones[6].disabled = true;
            botones[7].disabled = true;
            botones[8].disabled = true;


            puntajeJugador2++;
            jugador2Puntaje.innerHTML = puntajeJugador2;
            ganador = 1;
            sms.innerHTML= nombreJugador2.textContent + " ganó la ronda."
            btnFinRonda.classList.remove("none");
            btnFinal.classList.remove("none");
        }

        jugadas++;
      }else {}

      if (
        partida[0] != undefined && 
        partida[1] != undefined && 
        partida[2] != undefined && 
        partida[3] != undefined && 
        partida[4] != undefined && 
        partida[5] != undefined && 
        partida[6] != undefined && 
        partida[7] != undefined && 
        partida[8] != undefined && ganador == 0) {
        console.log("empate"); 
        btnFinRonda.classList.remove("none");
        btnFinal.classList.remove("none");

      }
     } else {
      console.log("No puede jugar en un casilla que ya esta precionada")
    }
    
    console.log(jugadas)
  })
  
}


btnFinRonda.addEventListener('click', function () {
  
  partida = [
    undefined, undefined, undefined,
    undefined, undefined, undefined,
    undefined, undefined, undefined
  ];
  ganador = 0;

  botones[0].disabled = false;
  botones[1].disabled = false;
  botones[2].disabled = false;
  botones[3].disabled = false;
  botones[4].disabled = false;
  botones[5].disabled = false;
  botones[6].disabled = false;
  botones[7].disabled = false;
  botones[8].disabled = false;

  console.log("estos son los puntos de jugador 1: " + puntajeJugador1 + " estos son los puntos del jugador 2: " + puntajeJugador2)
  for(let i = 0; i < btnlen; i++) {
    boton = botones[i];
    boton.classList.remove("juego__x")
    boton.classList.remove("juego__o")
  }
  sms.innerHTML = "";
  btnFinRonda.classList.add("none");
  btnFinal.classList.add("none");
});

btnFinal.addEventListener('click', function () {
  partida = [
    undefined, undefined, undefined,
    undefined, undefined, undefined,
    undefined, undefined, undefined
  ];
  ganador = 0;

  botones[0].disabled = false;
  botones[1].disabled = false;
  botones[2].disabled = false;
  botones[3].disabled = false;
  botones[4].disabled = false;
  botones[5].disabled = false;
  botones[6].disabled = false;
  botones[7].disabled = false;
  botones[8].disabled = false;

  console.log("estos son los puntos de jugador 1: " + puntajeJugador1 + " estos son los puntos del jugador 2: " + puntajeJugador2)
  for(let i = 0; i < btnlen; i++) {
    boton = botones[i];
    boton.classList.remove("juego__x")
    boton.classList.remove("juego__o")
  }

  btnFinRonda.classList.add("none");
  btnFinal.classList.add("none");
  juego.classList.add("none");
  puntajeTexto1.classList.add("none");
  puntajeTexto2.classList.add("none");
  btninico.classList.remove("none")

  sms.innerHTML = "";
  puntajeJugador1= 0;
  puntajeJugador2= 0;
  jugadas = 0;
})