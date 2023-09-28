var narizx = 0
var narizy = 0


function preload() {
	// loadingAllSounds();  
	setSprites();
	MarioAnimation();
}

function setup() {

	canvas = createCanvas(gameConfig.screenX, gameConfig.screenY);
	canvas.parent("#mariobros")
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.parent("#consola")
	// playBGMusic();
	IAposenet = ml5.poseNet(video, yaquedo)
	IAposenet.on("pose",recibir)
}

function draw() {
	video.size(345, 320)
	game()
}

function yaquedo() {
	console.log("ya quedo 👍💸💸💸💸💸")
}

function recibir(resultados) {
	if (resultados&&resultados.length>0) {
		narizx=resultados[0].pose.nose.x
		narizy=resultados[0].pose.nose.y
	}
}