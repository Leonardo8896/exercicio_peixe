let resposta = "Sim, fiz diversos projetos back-end com php, como um site de quiz para algumas aulas na etec, um jornal para a minha antiga escola e o back-end do meu TCC que foi baseado em uma arquitetura de micro-serviços php com API, WebSocket e um worker de rotina. Além disso, também tenho experiência em programação de sistema embarcados, projetando um sistema de incêndio autonomo e uma estação portátil de tratamento de água, interigados a um aplicativo, como meu TCC";

console.log(resposta);

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload:preload,
        create: create,
        update: update
    }
}

// Teste

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixinho_laranja.png');
    this.load.image('coral', 'assets/coral.webp');
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(400, 400, 'coral').setScale(0.4);

    peixinho = this.add.image(400, 300, 'peixe');

    peixinho.setFlip(true, false);
}

let lastX = 0;
let x = 0;

function update() {
    x = this.input.x;
    if(x !== lastX) {
        if(x-lastX > 0) {
            peixinho.setFlip(true, false);
        } else {
            peixinho.setFlip(false, false);
        }
    }
    peixinho.x = x;

    peixinho.y = this.input.y;

    lastX = x;
}