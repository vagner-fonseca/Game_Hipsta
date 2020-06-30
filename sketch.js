function setup() {
  createCanvas(windowWidth, windowHeight);
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  

  frameRate(40);
  //somDoJogo.loop();
  
  telaInicial = new TelaInicial();
  jogo = new Jogo()
  jogo.setup();
  
  cenas = {
    jogo,
    telaInicial
  }; 

}

function keyPressed() {
 jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}