const contenidoPrincipal = document.getElementById('contenedor-principal');
const botonStart = document.getElementById('play');
const overCardSound = new Audio('audios/oversoundcard.mp3');
const cardPut = new Audio('audios/cardmove.mp3');
const gameOver = new Audio('audios/gameover.mp3');
const selectCharacter = new Audio('audios/selectCharacter.mp3');
const rightAnswer = new Audio('audios/rightAnswer.mp3');
const youWin = new Audio('audios/youWin.mp3');
const gameOver1 = new Audio('audios/gameOver1.mp3');
const buttonPlay = new Audio('audios/buttonPlay.mp3');
const boardGame = new Audio('audios/boardGame.mp3');

async function cargarContenido() {
	let tableroCartas = [[9,16,1,8],
						 [8,18,7,24],
						 [1,24,7,10],
						 [16,18,10,9]];	

	contenidoPrincipal.innerHTML = `
		<div class = "contenedor-tablero-estadisticas">	
					<div class = "tablero-cartas" id = "tabla">

						<div class = "casilla" data-ejeX = "0" data-ejeY = "0" id = "0-0" data-coordenada = "0-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "1" id = "0-1" data-coordenada = "0-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "2" id = "0-2" data-coordenada = "0-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "3" id = "0-3" data-coordenada = "0-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>

						<div class = "casilla" data-ejeX = "1" data-ejeY = "0" id = "1-0" data-coordenada = "1-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>						
						<div class = "casilla" data-ejeX = "1" data-ejeY = "1" id = "1-1" data-coordenada = "1-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "2" id = "1-2" data-coordenada = "1-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "3" id = "1-3" data-coordenada = "1-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">						
						</div>

						<div class = "casilla" data-ejeX = "2" data-ejeY = "0" id = "2-0" data-coordenada = "2-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>						
						<div class = "casilla" data-ejeX = "2" data-ejeY = "1" id = "2-1" data-coordenada = "2-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "2" data-ejeY = "2" id = "2-2" data-coordenada = "2-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "2" data-ejeY = "3" id = "2-3" data-coordenada = "2-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">						
						</div>						

						<div class = "casilla" data-ejeX = "3" data-ejeY = "0" id = "3-0" data-coordenada = "3-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>						
						<div class = "casilla" data-ejeX = "3" data-ejeY = "1" id = "3-1" data-coordenada = "3-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "3" data-ejeY = "2" id = "3-2" data-coordenada = "3-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "3" data-ejeY = "3" id = "3-3" data-coordenada = "3-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">						
						</div>						

					</div>

						<div class = "ventana-modal">
								<div class = "contenido-modal">
								</div>
						</div>	

						<div class = ventanaModal" id = "ventana-continuar">
							<div class = "contenedor-opciones">
								<div class = "opcion" id = "reiniciar-partida">
									<button class = "boton" id = "boton-reiniciar-partida">
										Play again!	
									</button>
								</div>
								<div class = "opcion" id = "reiniciar-juego">
									<button class = "boton" id = "boton-reiniciar-juego">
										Restart game!
									</button>
								</div>
							</div>
						</div>

					<div class = "estadisticas-vidas" id = "est-vid">

						<div class = "display-vidas" id = "vidas">
							<div class = "display-vidas-img" id = "vidas">
								<label for="vidas" class="entrada-vidas">Vidas:</label>
   					  			<div class = "vidas-img" id = "vidas-img-contenedor">
									<img src = "images/vida1.png" class = "vida-img" id = "vida1">
									<img src = "images/vida1.png" class = "vida-img" id = "vida2">
									<img src = "images/vida1.png" class = "vida-img" id = "vida3">
									<img src = "images/vida1.png" class = "vida-img" id = "vida4">
									<img src = "images/vida1.png" class = "vida-img" id = "vida5">
								</div>
							</div>
						</div>

						<div class = "display-score" id = "score">
							<div class = "display-score-numbers">
								<label for="scores" class="entrada-scores">Score:</label>
								<input type="number" id="entrada-score" name="entrada-score" value = "0" readonly>
							</div>
						</div>

						<div class = "display-video" id = "video">

						</div>

					</div>
					
					<div class = "pausar-musica">
						<img src = "images/soundIco.png" class = "ico-sound">
					</div>
		</div>
	`;

	boardGame.play();
	boardGame.loop = true;

	const displayScore = document.getElementById('entrada-score');
	const casillas = document.querySelectorAll('.casilla');
	let cartaProcesada = 1;
	let valorCartaSeleccionadaA = "", valorCartaSeleccionadaB = "", FailA = "", FailB = "";
	const imgReversoCarta = `<img src = "images/reverso-carta.jpg" class = "carta-reverso">`;
	let contadorVidas = 5;
	const tabla = document.getElementById('tabla');
	let casillasBloqueadas = [];
	let casillasDesbloqueadas = [];
	let contadorAciertos = 0;
	const botonActivarDesactivarSonido = document.querySelector('.pausar-musica');
	let musicaPause = true;
	const icoSound = document.querySelector('.ico-sound');

	botonActivarDesactivarSonido.addEventListener('click', () => {
		if (musicaPause) {
			boardGame.pause();
			musicaPause = false;
			icoSound.style.opacity = "0.5";
		} else {
			boardGame.play();
			musicaPause = true;
			icoSound.style.opacity = "1"
		}
	});

	primerVistazoTablero = async () => {
		for (let casilla of casillas) {
			let valorEjeX = parseInt(casilla.getAttribute('data-ejeX'));
			let valorEjeY = parseInt(casilla.getAttribute('data-ejeY'));
			let cartaAColocar = casilla.getAttribute('data-coordenada');
			let idCartaAColocar = document.getElementById(cartaAColocar);
			let valorDeLaCarta = tableroCartas[valorEjeX][valorEjeY];

			if (valorDeLaCarta >= 1 && valorDeLaCarta <= 24) {
				let imagenNueva = `<img src="images/${valorDeLaCarta}.jpg" class="carta-reverso" id="${valorDeLaCarta}">`;
				idCartaAColocar.innerHTML = imagenNueva;
			}		   
		}

		const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

		for (let casilla of casillas) {
			let cartaAColocar = casilla.getAttribute('data-coordenada');
			let idCartaAColocar = document.getElementById(cartaAColocar);

			tabla.style.pointerEvents = "none";

			await delay(500);

			tabla.style.pointerEvents = "auto";
			idCartaAColocar.innerHTML = imgReversoCarta;
			cardPut.play();
		}
	};

	await primerVistazoTablero();

	for(casilla of casillas) {					
		let valorEjeX = parseInt(casilla.getAttribute('data-ejeX'));
		let valorEjeY = parseInt(casilla.getAttribute('data-ejeY'));				
		let cartaAColocar = casilla.getAttribute('data-coordenada');
		let idCartaAColocar = document.getElementById(cartaAColocar);

		casilla.addEventListener('click', async () => {
			cardPut.play();

			let valorDeLaCarta = tableroCartas[valorEjeX][valorEjeY];
				
			if (valorDeLaCarta >= 1 && valorDeLaCarta <= 24) {
				let imagenNueva = `<img src="images/${valorDeLaCarta}.jpg" class="carta-reverso" id="${valorDeLaCarta}">`;
				idCartaAColocar.innerHTML = imagenNueva;
			}	

			if (cartaProcesada === 1) { //CASO EN EL QUE EL PAR SI COINCIDE
				valorCartaSeleccionadaA = valorDeLaCarta;
				FailA = idCartaAColocar;
				cartaProcesada++;

				const idParentCasillaA = document.getElementById(cartaAColocar);
				idParentCasillaA.style.pointerEvents = "none";

			} else { // CASO EN EL QUE EL PAR NO COINCIDE

				valorCartaSeleccionadaB = valorDeLaCarta;
				FailB = idCartaAColocar;
				cartaProcesada = 1;

				const idParentCasillaB = document.getElementById(cartaAColocar);
				idParentCasillaB.style.pointerEvents = "none"; 

				const valorComparativaDeCartas = (valorA,valorB) => {
					return new Promise((resolve,reject) => {
						if (valorA === valorB) {
							console.log('Resuelto: true');
							resolve(true);
						} else {
							console.log('Rechazado: false');
							reject(false);
						} 
					});
				}

				async function comparar() {
					try {
								
						let resultadoComparativa = await valorComparativaDeCartas(valorCartaSeleccionadaA,valorCartaSeleccionadaB);

						if (resultadoComparativa) {
							const imagenNice = `<img src = "images/nice.jpg" class = "img-modal">`;
							let displayNroScore = parseInt(displayScore.value);
							const ventanaModal = document.querySelector('.ventana-modal');

							contadorAciertos++;
							displayScore.value = displayNroScore + 1000;

							async function activarVentanaModal(valorA,valorB){			
								const esperarVentana = (ms) => new Promise(resolve => setTimeout(resolve, ms));	
								const todasLasCasillas = document.querySelectorAll(".casilla");

								await esperarVentana(1000);

								todasLasCasillas.forEach(casilla => {
									casilla.style.pointerEvents = "none";
								});

								/*
								ventanaModal.innerHTML = imagenNice;
								ventanaModal.style.display = "flex";
								ventanaModal.style.pointerEvents = "none";
								rightAnswer.play();
										
								await esperarVentana(3000);

								ventanaModal.style.display = "none";

								*/

								todasLasCasillas.forEach(casilla => {								    	
									if (valorA === casilla || valorB === casilla) {
										casillasBloqueadas.push(casilla);
									} else if(!casillasBloqueadas.includes(casilla)){
										casilla.style.pointerEvents = "auto";
									}
								});

								async function irALaPantallaPrincipalWin(){
									const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));
									const todasLasCasillas = document.querySelectorAll('.casilla');

									if (contadorAciertos === 8) {
										let imagenWin = `<img src = "images/youWin.jpg" class = "img-modal">`;
										let ventanaModal = document.querySelector('.ventana-modal');

										ventanaModal.innerHTML = imagenWin;
										ventanaModal.style.display = "flex";
										ventanaModal.style.pointerEvents = "none";

										todasLasCasillas.forEach(casilla => {
											casilla.style.pointerEvents = "none";
										});

										youWin.play();
										await delay(3000);
												
										ventanaModal.style.display = "none";
										await delay(1000);

										let ventanaModalFinal = document.getElementById('ventana-continuar');
										ventanaModalFinal.style.display = "flex";

										let botonReiniciarPartida = document.getElementById('boton-reiniciar-partida');
										let botonReiniciarJuego = document.getElementById('boton-reiniciar-juego');													// Aqui tiene que ir el contenedor que mostrara las dos opciones

										botonReiniciarPartida.addEventListener('click', cargarContenido);

										botonReiniciarJuego.addEventListener('click',() => {
											contenidoPrincipal.innerHTML = `
											<div class="titulo">
												<img src="images/imgLogo.png" class="play-img">
												<button class="boton" id="play">Play!</button>
											</div>
											`;	
													
											let botonPlay = document.getElementById('play');
											botonPlay.addEventListener('click', cargarContenido);
										});
									} 									
								}

								irALaPantallaPrincipalWin();

							}

									activarVentanaModal(FailA,FailB);	
						} 

					} catch(error) {
						const activarVentanaModalFail = (valorA,valorB) => {
						const imagenFail = `<img src = "images/fail.jpg" class = "img-modal">`;
						const ventanaModal = document.querySelector('.ventana-modal');
						const contenedorVidas = document.getElementById('vidas-img-contenedor');

						async function activarVentanaModalFail(valorA,valorB) {
										
							const esperarVentana = (ms) => new Promise(resolve => setTimeout(resolve,ms));
							const todasLasCasillas = document.querySelectorAll(".casilla");

							contenedorVidas.removeChild(contenedorVidas.lastElementChild);
							contadorVidas--;

							await esperarVentana(1000);

							/*
							gameOver.play();
							ventanaModal.innerHTML = imagenFail;
							ventanaModal.style.display = "flex";
							ventanaModal.style.pointerEvents = "none";
										
							todasLasCasillas.forEach(casilla => {
								casilla.style.pointerEvents = "none";
							});
										
							await esperarVentana(5000);

							ventanaModal.style.display = "none";
							*/

							todasLasCasillas.forEach(casilla => {
								casilla.style.pointerEvents = "none";
							});

							cardPut.play();
							valorA.innerHTML = imgReversoCarta;
							valorB.innerHTML = imgReversoCarta;
										
							todasLasCasillas.forEach(casilla => {
								if ((valorA === casilla || valorB === casilla) && casilla.style.pointerEvents !== "none") {
									casillasDesbloqueadas.push(casilla);
								} else if(casillasDesbloqueadas.includes(casilla)){
									casilla.style.pointerEvents = "auto";
								} else if(!casillasDesbloqueadas.includes(casilla) && !casillasBloqueadas.includes(casilla)){
									casilla.style.pointerEvents = "auto";
								}

							});										

							async function irALaPantallaPrincipal() {			
								const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));
								const todasLasCasillas = document.querySelectorAll('.casilla');

								if (contadorVidas === 0) {
									const imagenFail = `<img src = "images/gameOver2.jpg" class = "img-modal">`;
									const ventanaModal = document.querySelector('.ventana-modal');

												ventanaModal.innerHTML = imagenFail;
												ventanaModal.style.display = "flex";
												ventanaModal.style.pointerEvents = "none";
												
												const todasLasCasillas = document.querySelectorAll('.casilla');

												todasLasCasillas.forEach(casilla => {
													casilla.style.pointerEvents = "none";
												});
												
												gameOver1.play();
												await delay(10000);
												ventanaModal.style.display = "none";
												await delay(1000);

												let ventanaModalFinal = document.getElementById('ventana-continuar');
												ventanaModalFinal.style.display = "flex";

												let botonReiniciarPartida = document.getElementById('boton-reiniciar-partida');
												let botonReiniciarJuego = document.getElementById('boton-reiniciar-juego');			// Aqui tiene que ir el contenedor que mostrara las dos opciones

												botonReiniciarPartida.addEventListener('click', cargarContenido);

												botonReiniciarJuego.addEventListener('click',() => {
													contenidoPrincipal.innerHTML = `
													<div class="titulo">
														<img src="images/imgLogo.png" class="play-img">
														<button class="boton" id="play">Play!</button>
													</div>
													`;	
													
													let botonPlay = document.getElementById('play');
													botonPlay.addEventListener('click', cargarContenido);
												});
											}
										}		

										irALaPantallaPrincipal();
									}								

									activarVentanaModalFail(FailA,FailB);
								}

								activarVentanaModalFail(FailA,FailB);			}
							}

							comparar();

						}

					});	}} 

/*async function cargarContenido(){
	
	let tableroCartas = [[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]];

	contenidoPrincipal.innerHTML = `
	<div class="contenedor-coordenadas-cartas">	
		<div class="fomulario-contenedor" id="ingreso-coordenadas">
			<img src = "images/gettingStarted2.jpg" class = "getting-started">
			<input type = "number" name = "display" id = "display" value = "0" readonly>
				<div class="formularios">
					<form class="formulario">
 				   		<label for="coordenadaX1" class="entrada">Seleccione la coordenada(EjeX1): </label>
   				  		<input type="number" min="0" max="3" id="coordenadaX1" name="coordenadaX1" placeholder="Ingresar numero" required>
    					<label for="coordenadaY1" class="entrada">Seleccione la coordenada(EjeY1):  </label>
   						<input type="number" min="0" max="3" id="coordenadaY1" name="coordenadaY1" placeholder="Ingresar numero" required>
					</form>
					<form class="formulario">
   						<label for="coordenadaX2" class="entrada">Seleccione la coordenada(EjeX2): </label>
   					    <input type="number" min="0" max="3" id="coordenadaX2" name="coordenadaX2" placeholder="Ingresar numero" required>
                        <label for="coordenadaY2" class="entrada">Seleccione la coordenada(EjeY2):</label>
                        <input type="number" min="0" max="3" id="coordenadaY2" name="coordenadaY2" placeholder="Ingresar numero" required>
                    </form>
				</div>
				<button type="button" class="boton" id="boton-formulario">Ingresar coordenadas</button>	
		</div>
		<div class="cartas" id = "contenedor-cartas">
			<header class="encabezado-cartas">
				<h3>Seleccione carta para colocar en el tablero</h3>
			</header>
		<div class="seccion">
			<img src="images/1.jpg" class="carta" data-value = "1" id = "1">
			<img src="images/2.jpg" class="carta" data-value = "2" id=  "2">
			<img src="images/3.jpg" class="carta" data-value = "3" id = "3">
			<img src="images/4.jpg" class="carta" data-value = "4" id = "4">
			<img src="images/5.jpg" class="carta" data-value = "5" id = "5">
			<img src="images/6.jpg" class="carta" data-value = "6" id = "6">
		</div>
		<div class="seccion">
			<img src="images/7.jpg" class="carta" data-value = "7" id = "7">	
			<img src="images/8.jpg" class="carta" data-value = "8" id = "8">
			<img src="images/9.jpg" class="carta" data-value = "9" id = "9">
			<img src="images/10.jpg" class="carta" data-value = "10" id = "10">	
			<img src="images/11.jpg" class="carta" data-value = "11" id = "11">
			<img src="images/12.jpg" class="carta" data-value = "12" id = "12">
		</div>	
		<div class="seccion">
			<img src="images/13.jpg" class="carta" data-value = "13" id = "13">	
			<img src="images/14.jpg" class="carta" data-value = "14" id = "14">
			<img src="images/15.jpg" class="carta" data-value = "15" id = "15">
			<img src="images/16.jpg" class="carta" data-value = "16" id = "16">
			<img src="images/17.jpg" class="carta" data-value = "17" id = "17">
			<img src="images/18.jpg" class="carta" data-value = "18" id = "18">
		</div>				
		<div class="seccion">
			<img src="images/19.jpg" class="carta" data-value = "19" id = "19">	
			<img src="images/20.jpg" class="carta" data-value = "20" id = "20">
			<img src="images/21.jpg" class="carta" data-value = "21" id = "21">
			<img src="images/22.jpg" class="carta" data-value = "22" id = "22">
			<img src="images/23.jpg" class="carta" data-value = "23" id = "23">
			<img src="images/24.jpg" class="carta" data-value = "24" id = "24">
		</div>
		</div>
	</div>	
	`;

	buscarCasilla = (coordenadaX, coordenadaY) => {
		return new Promise((resolve) => {
			if (tableroCartas[coordenadaX][coordenadaY] !== 0) {
				resolve(false);
			} else {
				resolve(true);
			}
		});
	};

	seleccionarCarta = () => {
		return new Promise((resolve) => {
			let numeroCarta;

			contenedorDeCartas.style.opacity = "1";
			contenedorDeCartas.style.pointerEvents = "auto";

			let cartas = document.querySelectorAll('.carta');

			for (carta of cartas) {

				let cartaDataValue = carta.getAttribute('data-value');
				let cartaValorNumerico = parseInt(cartaDataValue);

				carta.addEventListener('click', () => {
					let quitarEfectosCarta = document.getElementById(cartaDataValue);

					overCardSound.play();

					quitarEfectosCarta.style.opacity = "0.5";
					quitarEfectosCarta.style.filter = "none";
					quitarEfectosCarta.style.pointerEvents = "none";

					botonIngresarCoordenadas.textContent = "Ingresar coordenadas";
					botonIngresarCoordenadas.style.filter = "auto";
					botonIngresarCoordenadas.style.pointerEvents = "auto";
					resolve(cartaValorNumerico);
				});

			}
		});
	};


	let contenedorDeCartas = document.querySelector('.cartas');
	let botonIngresarCoordenadas = document.getElementById('boton-formulario');

	contenedorDeCartas.style.opacity = "0.5";
	contenedorDeCartas.style.pointerEvents = "none";

	botonIngresarCoordenadas.addEventListener('mouseover', () => buttonPlay.play())

	botonIngresarCoordenadas.addEventListener('click', async () => {
		let coordenadaX1 = parseInt(document.getElementById('coordenadaX1').value);
		let coordenadaX2 = parseInt(document.getElementById('coordenadaX2').value);
		let coordenadaY1 = parseInt(document.getElementById('coordenadaY1').value);
		let coordenadaY2 = parseInt(document.getElementById('coordenadaY2').value);        

		if (isNaN(coordenadaX1) || isNaN(coordenadaX2) || isNaN(coordenadaY1) || isNaN(coordenadaY2)) {
			alert('Complete todos los campos con valores válidos.');
			return; 
		}
		
		if (coordenadaX1 < 0 || coordenadaX1 > 3 || coordenadaX2 < 0 || coordenadaX2 > 3 ||
			coordenadaY1 < 0 || coordenadaY1 > 3 || coordenadaY2 < 0 || coordenadaY2 > 3) {
			alert('Las coordenadas están fuera del rango permitido.');
		return;
	}

	let display = document.getElementById('display');
	let displayNro = parseInt(display.value);

	if (displayNro >= 0 && displayNro <= 8) {
		let tableroCartasVacio = tableroCartas.flat().filter(unCero => unCero === 0).length;

		if (tableroCartasVacio === 16) {

			botonIngresarCoordenadas.textContent = "Coordenada ingresada con exito!";
			botonIngresarCoordenadas.style.filter = "none";
			botonIngresarCoordenadas.style.pointerEvents = "none";	

			let cartaSeleccionada = await seleccionarCarta();

			tableroCartas[coordenadaX1][coordenadaY1] = cartaSeleccionada;
			tableroCartas[coordenadaX2][coordenadaY2] = cartaSeleccionada;

		} else {
			let casillaLibre1 = await buscarCasilla(coordenadaX1, coordenadaY1);
			let casillaLibre2 = await buscarCasilla(coordenadaX2, coordenadaY2);

			if (!casillaLibre1 || !casillaLibre2) {
				alert('Casilla ocupada. Intente nuevamente.');
				return;
			}

			botonIngresarCoordenadas.textContent = "Coordenada ingresada con exito!";
			botonIngresarCoordenadas.style.filter = "none";
			botonIngresarCoordenadas.style.pointerEvents = "none";

			let cartaSeleccionada = await seleccionarCarta();
			tableroCartas[coordenadaX1][coordenadaY1] = cartaSeleccionada;
			tableroCartas[coordenadaX2][coordenadaY2] = cartaSeleccionada;        
		}
		
		display.value = displayNro + 1;
		contenedorDeCartas.style.opacity = "0.5";
		contenedorDeCartas.style.pointerEvents = "none";
	} 


	let avanzarAlJuego = tableroCartas.flat().filter(unNumeroDistintoDeCero => unNumeroDistintoDeCero !== 0).length;

	if (avanzarAlJuego === 16) {

		contenidoPrincipal.innerHTML = `
		<div class = "contenedor-tablero-estadisticas">	
					<div class = "tablero-cartas" id = "tabla">

						<div class = "casilla" data-ejeX = "0" data-ejeY = "0" id = "0-0" data-coordenada = "0-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "1" id = "0-1" data-coordenada = "0-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "2" id = "0-2" data-coordenada = "0-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">
						</div>
						<div class = "casilla" data-ejeX = "0" data-ejeY = "3" id = "0-3" data-coordenada = "0-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>

						<div class = "casilla" data-ejeX = "1" data-ejeY = "0" id = "1-0" data-coordenada = "1-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>						
						<div class = "casilla" data-ejeX = "1" data-ejeY = "1" id = "1-1" data-coordenada = "1-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "2" id = "1-2" data-coordenada = "1-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "1" data-ejeY = "3" id = "1-3" data-coordenada = "1-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">						
						</div>

						<div class = "casilla" data-ejeX = "2" data-ejeY = "0" id = "2-0" data-coordenada = "2-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>						
						<div class = "casilla" data-ejeX = "2" data-ejeY = "1" id = "2-1" data-coordenada = "2-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "2" data-ejeY = "2" id = "2-2" data-coordenada = "2-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "2" data-ejeY = "3" id = "2-3" data-coordenada = "2-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">						
						</div>						

						<div class = "casilla" data-ejeX = "3" data-ejeY = "0" id = "3-0" data-coordenada = "3-0">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>						
						<div class = "casilla" data-ejeX = "3" data-ejeY = "1" id = "3-1" data-coordenada = "3-1">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "3" data-ejeY = "2" id = "3-2" data-coordenada = "3-2">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">					
						</div>
						<div class = "casilla" data-ejeX = "3" data-ejeY = "3" id = "3-3" data-coordenada = "3-3">
							<img src = "images/reverso-carta.jpg" class = "carta-reverso">						
						</div>						

					</div>

						<div class = "ventana-modal">
								<div class = "contenido-modal">
								</div>
						</div>	

						<div class = ventanaModal" id = "ventana-continuar">
							<div class = "contenedor-opciones">
								<div class = "opcion" id = "reiniciar-partida">
									<button class = "boton" id = "boton-reiniciar-partida">
										Play again!	
									</button>
								</div>
								<div class = "opcion" id = "reiniciar-juego">
									<button class = "boton" id = "boton-reiniciar-juego">
										Restart game!
									</button>
								</div>
							</div>
						</div>

					<div class = "estadisticas-vidas" id = "est-vid">

						<div class = "display-vidas" id = "vidas">
							<div class = "display-vidas-img" id = "vidas">
								<label for="vidas" class="entrada-vidas">Vidas:</label>
   					  			<div class = "vidas-img" id = "vidas-img-contenedor">
									<img src = "images/vida1.png" class = "vida-img" id = "vida1">
									<img src = "images/vida1.png" class = "vida-img" id = "vida2">
									<img src = "images/vida1.png" class = "vida-img" id = "vida3">
									<img src = "images/vida1.png" class = "vida-img" id = "vida4">
									<img src = "images/vida1.png" class = "vida-img" id = "vida5">
								</div>
							</div>
						</div>

						<div class = "display-score" id = "score">
							<div class = "display-score-numbers">
								<label for="scores" class="entrada-scores">Score:</label>
								<input type="number" id="entrada-score" name="entrada-score" value = "0" readonly>
							</div>
						</div>

						<div class = "display-video" id = "video">

						</div>

					</div>

					<div class = "pausar-musica">
						<img src = "images/soundIco.png" class = "ico-sound">
					</div>
		</div>
		`;

		boardGame.play();
		boardGame.loop = true;

		const displayScore = document.getElementById('entrada-score');
		const casillas = document.querySelectorAll('.casilla');
		let cartaProcesada = 1;
		let valorCartaSeleccionadaA = "", valorCartaSeleccionadaB = "", FailA = "", FailB = "";
		let imgReversoCarta = `<img src = "images/reverso-carta.jpg" class = "carta-reverso">`;
		let contadorVidas = 5;
		let tabla = document.getElementById('tabla');
		let casillasBloqueadas = [];
		let casillasDesbloqueadas = [];
		let contadorAciertos = 0;
		const botonActivarDesactivarSonido = document.querySelector('.pausar-musica');
		let musicaPause = true;
		const icoSound = document.querySelector('.ico-sound');

		botonActivarDesactivarSonido.addEventListener('click', () => {
			if (musicaPause) {
				boardGame.pause();
				musicaPause = false;
				icoSound.style.opacity = "0.5";
			} else {
				boardGame.play();
				musicaPause = true;
				icoSound.style.opacity = "1"
			}
		});

		primerVistazoTablero = async () => {
			for (let casilla of casillas) {
				let valorEjeX = parseInt(casilla.getAttribute('data-ejeX'));
				let valorEjeY = parseInt(casilla.getAttribute('data-ejeY'));
				let cartaAColocar = casilla.getAttribute('data-coordenada');
				let idCartaAColocar = document.getElementById(cartaAColocar);
				let valorDeLaCarta = tableroCartas[valorEjeX][valorEjeY];

				if (valorDeLaCarta >= 1 && valorDeLaCarta <= 24) {
					let imagenNueva = `<img src="images/${valorDeLaCarta}.jpg" class="carta-reverso" id="${valorDeLaCarta}">`;
					idCartaAColocar.innerHTML = imagenNueva;
				}		   
			}

			const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

			for (let casilla of casillas) {
				let cartaAColocar = casilla.getAttribute('data-coordenada');
				let idCartaAColocar = document.getElementById(cartaAColocar);

				tabla.style.pointerEvents = "none";

				await delay(500);

				tabla.style.pointerEvents = "auto";
				idCartaAColocar.innerHTML = imgReversoCarta;
				cardPut.play();}};

				await primerVistazoTablero();

				for(casilla of casillas) {					
					let valorEjeX = parseInt(casilla.getAttribute('data-ejeX'));
					let valorEjeY = parseInt(casilla.getAttribute('data-ejeY'));				
					let cartaAColocar = casilla.getAttribute('data-coordenada');
					let idCartaAColocar = document.getElementById(cartaAColocar);

					casilla.addEventListener('click', async () => {
						cardPut.play();

						let valorDeLaCarta = tableroCartas[valorEjeX][valorEjeY];

						if (valorDeLaCarta >= 1 && valorDeLaCarta <= 24) {
							let imagenNueva = `<img src="images/${valorDeLaCarta}.jpg" class="carta-reverso" id="${valorDeLaCarta}">`;
							idCartaAColocar.innerHTML = imagenNueva;
						}	

				if (cartaProcesada === 1) { //CASO EN EL QUE EL PAR SI COINCIDE
					valorCartaSeleccionadaA = valorDeLaCarta;
					FailA = idCartaAColocar;
					cartaProcesada++;

					const idParentCasillaA = document.getElementById(cartaAColocar);
					idParentCasillaA.style.pointerEvents = "none";

				} else { // CASO EN EL QUE EL PAR NO COINCIDE

					valorCartaSeleccionadaB = valorDeLaCarta;
					FailB = idCartaAColocar;
					cartaProcesada = 1;

					const idParentCasillaB = document.getElementById(cartaAColocar);
					idParentCasillaB.style.pointerEvents = "none"; 

					const valorComparativaDeCartas = (valorA,valorB) => {
						return new Promise((resolve,reject) => {
							if (valorA === valorB) {
								console.log('Resuelto: true');
								resolve(true);
							} else {
								console.log('Rechazado: false');
								reject(false);
							} 
						});}

						async function comparar() {

							try {
								
								let resultadoComparativa = await valorComparativaDeCartas(valorCartaSeleccionadaA,valorCartaSeleccionadaB);

								if (resultadoComparativa) {
									let imagenNice = `<img src = "images/nice.jpg" class = "img-modal">`;
									let displayNroScore = parseInt(displayScore.value);
									let ventanaModal = document.querySelector('.ventana-modal');

									contadorAciertos++;
									displayScore.value = displayNroScore + 1000;

									async function activarVentanaModal(valorA,valorB){											
										const esperarVentana = (ms) => new Promise(resolve => setTimeout(resolve, ms));	
										const todasLasCasillas = document.querySelectorAll(".casilla");

										await esperarVentana(1000);

										todasLasCasillas.forEach(casilla => {
											casilla.style.pointerEvents = "none";
										});

										
										ventanaModal.innerHTML = imagenNice;
										ventanaModal.style.display = "flex";
										ventanaModal.style.pointerEvents = "none";
										rightAnswer.play();
										
										await esperarVentana(3000);

										ventanaModal.style.display = "none";

										todasLasCasillas.forEach(casilla => {								    	
											if (valorA === casilla || valorB === casilla) {
												casillasBloqueadas.push(casilla);
											} else if(!casillasBloqueadas.includes(casilla)){
												casilla.style.pointerEvents = "auto";
											}
										});

										async function irALaPantallaPrincipalWin(){
											const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));
											const todasLasCasillas = document.querySelectorAll('.casilla');

											if (contadorAciertos === 8) {
												let imagenWin = `<img src = "images/youWin.jpg" class = "img-modal">`;
												let ventanaModal = document.querySelector('.ventana-modal');

												ventanaModal.innerHTML = imagenWin;
												ventanaModal.style.display = "flex";
												ventanaModal.style.pointerEvents = "none";

												todasLasCasillas.forEach(casilla => {
													casilla.style.pointerEvents = "none";
												});

												youWin.play();
												await delay(3000);
												
												ventanaModal.style.display = "none";
												await delay(1000);

												let ventanaModalFinal = document.getElementById('ventana-continuar');
												ventanaModalFinal.style.display = "flex";

												let botonReiniciarPartida = document.getElementById('boton-reiniciar-partida');
											let botonReiniciarJuego = document.getElementById('boton-reiniciar-juego');													// Aqui tiene que ir el contenedor que mostrara las dos opciones

											botonReiniciarPartida.addEventListener('click', cargarContenido);

											botonReiniciarJuego.addEventListener('click',() => {
												contenidoPrincipal.innerHTML = `
												<div class="titulo">
													<img src="images/imgLogo.png.png" class="play-img">
													<button class="boton" id="play">Play!</button>
												</div>
												`;	

												let botonPlay = document.getElementById('play');
												botonPlay.addEventListener('click', cargarContenido);
											});
										} 									
									}

									irALaPantallaPrincipalWin();

								}

								activarVentanaModal(FailA,FailB);	
							} 

						} catch(error) {
							const activarVentanaModalFail = (valorA,valorB) => {
								let imagenFail = `<img src = "images/fail.jpg" class = "img-modal">`;
								let ventanaModal = document.querySelector('.ventana-modal');
								let contenedorVidas = document.getElementById('vidas-img-contenedor');

								async function activarVentanaModalFail(valorA,valorB) {

									const esperarVentana = (ms) => new Promise(resolve => setTimeout(resolve,ms));
									const todasLasCasillas = document.querySelectorAll(".casilla");

									contenedorVidas.removeChild(contenedorVidas.lastElementChild);
									contadorVidas--;

									await esperarVentana(1000);

									gameOver.play();
									ventanaModal.innerHTML = imagenFail;
									ventanaModal.style.display = "flex";
									ventanaModal.style.pointerEvents = "none";

									todasLasCasillas.forEach(casilla => {
										casilla.style.pointerEvents = "none";
									});

									await esperarVentana(5000);

									cardPut.play();
									ventanaModal.style.display = "none";
									valorA.innerHTML = imgReversoCarta;
									valorB.innerHTML = imgReversoCarta;

									todasLasCasillas.forEach(casilla => {
										if ((valorA === casilla || valorB === casilla) && casilla.style.pointerEvents !== "none") {
											casillasDesbloqueadas.push(casilla);
										} else if(casillasDesbloqueadas.includes(casilla)){
											casilla.style.pointerEvents = "auto";
										} else if(!casillasDesbloqueadas.includes(casilla) && !casillasBloqueadas.includes(casilla)){
											casilla.style.pointerEvents = "auto";
										}

									});										

									async function irALaPantallaPrincipal() {

										const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));
										const todasLasCasillas = document.querySelectorAll('.casilla');

										if (contadorVidas === 0) {
											let imagenFail = `<img src = "images/gameOver2.jpg" class = "img-modal">`;
											let ventanaModal = document.querySelector('.ventana-modal');

											ventanaModal.innerHTML = imagenFail;
											ventanaModal.style.display = "flex";
											ventanaModal.style.pointerEvents = "none";

											const todasLasCasillas = document.querySelectorAll('.casilla');

											todasLasCasillas.forEach(casilla => {
												casilla.style.pointerEvents = "none";
											});

											gameOver1.play();
											await delay(10000);
											ventanaModal.style.display = "none";
											await delay(1000);

											let ventanaModalFinal = document.getElementById('ventana-continuar');
											ventanaModalFinal.style.display = "flex";

											let botonReiniciarPartida = document.getElementById('boton-reiniciar-partida');
												let botonReiniciarJuego = document.getElementById('boton-reiniciar-juego');													// Aqui tiene que ir el contenedor que mostrara las dos opciones

												botonReiniciarPartida.addEventListener('click', cargarContenido);

												botonReiniciarJuego.addEventListener('click',() => {
													contenidoPrincipal.innerHTML = `
													<div class="titulo">
														<img src="images/imgLogo.png.png" class="play-img">
														<button class="boton" id="play">Play!</button>
													</div>
													`;	
													
													let botonPlay = document.getElementById('play');
													botonPlay.addEventListener('click', cargarContenido);
												});
											}
										}		

										irALaPantallaPrincipal();
									}								

									activarVentanaModalFail(FailA,FailB);
								}

								activarVentanaModalFail(FailA,FailB);			}
							}

							comparar();

						}

					});	}

}


});  }*/

botonStart.addEventListener('click', cargarContenido);
botonStart.addEventListener('mouseover', () => buttonPlay.play());
