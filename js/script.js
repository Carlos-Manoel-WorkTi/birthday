import initTyping  from './typing.js';

document.addEventListener('DOMContentLoaded', () => {
  const videosDeFundo = [
    '../public/videos/video1.mp4',
    '../public/videos/video1.mp4'
  ];
  const audio = new Audio('../public/musica/song1.mp3');
  const permissionScreen = document.getElementById('permission_screen');
  const enterButton = document.getElementById('enter_button');

  let indiceAtual = 0;
  let videoElement;

  // <div>
  //   <h1 class="typewriter">Feliz <strong style="color: #E91E63;">aniversário</strong></h1>
  //   <p>Hoje é o teu dia, mas quem ganhou o presente fui eu: <strong style="color: #e85b8b;">te ter na minha vida.</strong></p>
  // </div>
  const mainTemplate = `
    <main id="container_main">
      <header id="header_aniversario">
         
        <h1 class="line-1 anim-typewriter">Feliz <strong style="color: #E91E63;">aniversário</strong></h1>
         
        <div id="speaker_container">
          <input id="checkboxInput" type="checkbox" checked/>
          <label class="toggleSwitch" for="checkboxInput">
            <div class="speaker">
              <svg viewBox="0 0 75 75" version="1.0" xmlns="http://www.w3.org/2000/svg">
                <path
                  style="stroke:#fff;stroke-width:5;stroke-linejoin:round;fill:#fff;"
                  d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
                ></path>
                <path
                  style="fill:none;stroke:#fff;stroke-width:5;stroke-linecap:round"
                  d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
                ></path>
              </svg>
            </div>
            <div class="mute-speaker">
              <svg stroke-width="5" stroke="#fff" viewBox="0 0 75 75" version="1.0">
                <path
                  stroke-linejoin="round"
                  fill="#fff"
                  d="m39,14-17,15H6V48H22l17,15z"
                ></path>
                <path
                  stroke-linecap="round"
                  fill="#fff"
                  d="m49,26 20,24m0-24-20,24"
                ></path>
              </svg>
            </div>
          </label>
        </div>
      </header>
      
      <div id="typedtext">      </div>


      <video id="background_video" autoplay loop>
        <source src="../public/videos/video1.mp4" type="video/mp4">
        Seu navegador não suporta vídeos.
      </video>

            
    </main>
  `;

  const section_img = `
   <section id="img_card_one" class="">
              <div class="container_text-1" style="display: flex;justify-content: space-around;align-items: center;    height: 196px">
              <div class="stack ft1 bounce-in-fwd">
                <div class="card">
                  <div class="image" style="background-image: url('./public//imagens/ft1.jpg'); background-size: cover;"></div>
                </div>
              </div>
              <div class="text-1" id="text-1">
               
              </div>
              </div>
              <div class="container_text-1-2">
                <div class="text-1.2" id="text-1.2">
              </div>
              
          </section>
  `
  enterButton.addEventListener('click', () => {
    
    audio.play();

    permissionScreen.style.display = 'none';
    document.body.insertAdjacentHTML('beforeend', mainTemplate);
    
    videoElement = document.getElementById('background_video');
    videoElement.muted = true;
    initTyping({
      messages: [
        { text: "Hoje é o teu dia, mas quem ganhou o presente fui eu:", breakLine: true },
        { text: "te ter na minha vida", color: "#ff4081", breakLine: true }
          ],
          element: "typedtext",
          speed: 70,
          delay: 2000
        });
    
    setTimeout(()=>{
      document.querySelector('main')?.insertAdjacentHTML('beforeend', section_img);
      initTyping({
        messages: [
          { text: "Há oito anos, em ", breakLine: false },
          { text: "2015", color: "#e85b8b", breakLine: false },
          { text: "nossos caminhos se cruzaram. ", breakLine: false },
          { text: "Foi em meio a um grupo de frases no ", breakLine: false },
          { text: "WhatsApp ", color: "rgb(28, 195, 10)", breakLine: false },
          { text: "que tudo começou.", color: "#ffffff", breakLine: true }
        ],
        element: "text-1",
        speed: 70,
        delay: 0
      });
      

    }, 9500);

    setTimeout(()=>{
      
      initTyping({
        messages: [
          {
            text: " Eu tinha 13 anos, e você também, embora eu seja um ano mais velho que você. Naquele momento, movido pelo desejo de fazer amizades, resolvi enviar uma mensagem no privado. Não era nada demais, talvez um simples ",
            breakLine: false
          },
          { text: "'Oi'", color: "#e85b8b", breakLine: false },
          { text: ". Mas, naquele instante, iniciou-se algo que, até hoje, permanece.", breakLine: true }
        ],
        element: "text-1.2",
        speed: 60,
        delay: 0
      });
      
    },22000)

    setTimeout(()=>{
      criarBotaoProximo()
    }, 39000)

    trocarVideoDeFundo();
    setInterval(trocarVideoDeFundo, 25000);
    const checkbox = document.getElementById('checkboxInput');
    checkbox.addEventListener('change', (e) => {
      // videoElement.muted = !e.target.checked;
      audio.muted = !e.target.checked;
      console.log(videoElement.muted);
      
    });
  });

  function trocarVideoDeFundo() {
    if (!videoElement) return;
    videoElement.src = videosDeFundo[indiceAtual];
    videoElement.load();
    videoElement.play();
    indiceAtual = (indiceAtual + 1) % videosDeFundo.length;
  }
});


function limparTextoAnterior() {
  // Remove os textos
  const typedText = document.getElementById('typedtext');
  const text1 = document.getElementById('text-1');
  const text12 = document.getElementById('text-1.2');
  
  if (typedText) typedText.innerHTML = '';
  if (text1) text1.innerHTML = '';
  if (text12) text12.innerHTML = '';

  // Remove a seção de imagem se existir
  const imgCardOne = document.getElementById('img_card_one');
  if (imgCardOne) imgCardOne.remove();
}

function criarBotaoProximo() {
  const buttonNextHTML = `
    <div id="container_button_next">
      <button class="custom-button" id="next_button">Próximo</button>
    </div>
  `;
  document.querySelector('main')?.insertAdjacentHTML('beforeend', buttonNextHTML);

  const nextButton = document.getElementById('next_button');

  nextButton?.addEventListener('click', () => {
    limparTextoAnterior();

    // Remove o botão "Próximo"
    const container = document.getElementById('container_button_next');
    if (container) container.remove();

    // Aqui você pode chamar a próxima função de conteúdo
    // ex: iniciarProximaEtapa();
  });
}
