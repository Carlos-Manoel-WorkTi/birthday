import initTyping  from './typing.js';

const audio = new Audio('../public/audio/song3.mp3');

let indiceAtual = 0;
let videoElement;

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
            <div class="container_text-1" >
            <div class="stack ft1 bounce-in-fwd animate__animated animate__swing">
              <div class="card">
                <div class="image" style="background-image: url('./public//images/ft1.jpg'); background-size: cover;"></div>
              </div>
            </div>
            <div class="text-1" id="text-1">
             
            </div>
            </div>
            <div class="container_text-1-2">
              <div class="text-1-2" id="text-1.2">
            </div>
            </div>
            
        </section>
`
const section_img_2 = `
    <section id="img_card_one" class="">
      <div class="container_text-2" >
         <div class="stack ft1 bounce-in-fwd animate__animated  ">
           <div class="card">
             <div class="image" style="background-image: url('./public//images/ft2.jpg'); background-size: cover;"></div>
           </div>
         </div>
         <div class="stack ft1 bounce-in-fwd animate__animated animate__backInRight ">
           <div class="card">
           <div class="image" style="background-image: url('./public//images/ft3.jpg'); background-size: cover;"></div>
           </div>
           </div>
           </div>
       <div class="container_text-1-2">
              <div class="text-1-2" id="text-1.2">
            </div>
      
  </section>
`
const section_img_3 = `
      <section id="img_card_three" class="">
        <div class="container_text-3" >
          <div class="text-1" id="text-1">
          
          </div>
          <div class="stack ft1 bounce-in-fwd animate__animated animate__bounceInRight">
            <div class="card">
              <div class="image" style="background-image: url('./public//images/ft10.jpg'); background-size: cover;"></div>
            </div>
          </div>
        </div>
        <div class="container_text-1-2">
          <div class="text-1-2" id="text-1.2">
          </div>
        </div>
        
    </section>
`
const section_img_3_2 = `
      <section id="img_card_three_2" class="">
        <div class="container_text-3-2" >
          <div class="stack ft1 bounce-in-fwd animate__animated animate__bounceInLeft">
            <div class="card">
              <div class="image" style="background-image: url('./public//images/ft8.jpg'); background-size: cover;"></div>
            </div>
          </div>
          <div class="text-1" id="text-3.2">
          
          </div>
        </div>
        <div class="container_text-1-2">
          <div class="text-1-2" id="text-1.2">
          </div>
        </div>
        
    </section>
`

const section_img_4 = `
      <section id="img_card_three_2" class="">
        <div class="container_text-4" >
          <div class="stack ft1 bounce-in-fwd animate__animated">
            <div class="card">
              <div class="image" style="background-image: url('./public//images/ft13.jpg'); background-size: cover;"></div>
            </div>
          </div>
          <div class="text-1" id="text-3.2">
          
          </div>
        </div>
        <div class="container_text-1-2">
          <div class="text-1-2" id="text-1.2">
          </div>
        </div>
        
    </section>
`
const section_img_5 = `
      <section id="img_card_three" class="">
        <div class="container_text-5-2" >
          <div class="text-1" id="text-1">
          
          </div>
          <div class="stack ft1 bounce-in-fwd animate__animated animate__bounceInRight">
            <div class="card">
              <div class="image" style="background-image: url('./public//images/ft11.jpg'); background-size: cover;"></div>
            </div>
          </div>
        </div>
        <div class="container_text-1-2">
          <div class="text-1-2" id="text-1.2">
          </div>
        </div>
        
    </section>
`
const section_img_5_1 = `
      <section id="img_card_three_2" class="">
        <div class="container_text-3-2" >
          <div class="stack ft1 bounce-in-fwd animate__animated ">
            <div class="card">
              <div class="image" style="background-image: url('./public//images/ft9.jpg'); background-size: cover;"></div>
            </div>
          </div>
          <div class="text-1" id="text-3.2">
          
          </div>
        </div>
        <div class="container_text-1-2">
          <div class="text-1-2" id="text-1.2">
          </div>
        </div>
        
    </section>
`

const videosDeFundo = [
  '../public/videos/video1.mp4',
  '../public/videos/video1.mp4'
];
document.addEventListener('DOMContentLoaded', () => {
  const permissionScreen = document.getElementById('permission_screen');
  const enterButton = document.getElementById('enter_button');

  enterButton.addEventListener('click', () => {
    audio.play();
    permissionScreen.style.display = 'none';
    document.body.insertAdjacentHTML('beforeend', mainTemplate);
    videoElement = document.getElementById('background_video');
    videoElement.muted = true;

    etapaUm();

    trocarVideoDeFundo();
    setInterval(trocarVideoDeFundo, 25000);

    const checkbox = document.getElementById('checkboxInput');
    checkbox?.addEventListener('change', (e) => {
      audio.muted = !e.target.checked;
    });
  });
});

function etapaUm() {
  initTyping({
    messages: [
      { text: "Hoje é o teu dia, mas quem ganhou o presente fui eu:", breakLine: true },
      { text: "te ter na minha vida", color: "#ff4081", breakLine: true }
    ],
    element: "typedtext",
    speed: 70,
    delay: 5000
  });

  setTimeout(() => {
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
  }, 11000);

  setTimeout(() => {
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
  }, 23000);

  setTimeout(() => {
    criarBotaoProximo(() => etapaDois(), false);
  }, 41000);
}

function etapaDois() {
  // Aplica os efeitos de saída
  removeWithEffect('typedtext', 'animate__fadeOutLeft');
  removeWithEffect('typedtext2', 'animate__fadeOutRight');
  removeWithEffect('text-1', 'animate__fadeOutLeft');
  removeWithEffect('text-1.2', 'animate__fadeOutRight');
  removeWithEffect('img_card_one', 'animate__fadeOutLeft');

  // Aguarda 2 segundos (tempo da animação) antes de adicionar o novo conteúdo
  setTimeout(() => {
    const main = document.querySelector('main');
    if (main) {
      // Cria a nova div para o texto digitado
      const div = document.createElement('div');
      div.id = 'typedtext2';
      div.className = 'typedtext2';
      main.appendChild(div);

      initTyping({
        messages: [
          { text: "Entre conversas, risadas e momentos compartilhados,", breakLine: false },
          { text: "há algo que nunca mudou:", color: "#ffdd57", breakLine: false },
          { text: "o quanto você significa para mim.", breakLine: true }
        ],
        element: "typedtext2",
        speed: 70,
        delay: 1000
      });

      // Aguarda 10 segundos após o início da digitação para inserir a próxima parte
      setTimeout(() => {
        main.insertAdjacentHTML('beforeend', section_img_2);

        initTyping({
          messages: [
            { text: "E quanto mais o tempo passa,", breakLine: false },
            { text: "mais eu percebo o quanto você é especial pra mim.", color: "#fcbf49", breakLine: false },
            { text: "A cada dia, descubro novas razões para amar ainda mais,", breakLine: false },
            { text: "cada sorriso seu ilumina meu mundo de um jeito indescritível.", color: "#FFC107", breakLine: false },
            { text: "Você sabe qual é o meu maior sonho?", breakLine: false },
            { text: "então deixa eu te contar...", breakLine: false },
            { text: "", color: "#E91E63", breakLine: true }
          ],
          element: "text-1.2",
          speed: 70,
          delay: 1000
        });

        // Após a digitação completa, exibe o botão de próximo
        setTimeout(() => criarBotaoProximo(() => etapaTres(), false), 22000);
      }, 10000);
    }
  }, 500); // Tempo para os elementos antigos sumirem com animação
}


function etapaTres() {
  removeWithEffect('typedtext2', 'animate__fadeOutRight');
  removeWithEffect('text-1.2', 'animate__fadeOutRight');
  removeWithEffect('img_card_one', 'animate__fadeOutLeft');
  
  const main = document.querySelector('main');
  if (main) {
    const div = document.createElement('div');
    div.id = 'typedtext3';
    div.className = 'typedtext2';
    main.appendChild(div);

    initTyping({
      messages: [
        { text: "Meu maior sonho sempre foi simples:", breakLine: true },
        { text: "passar a vida inteira ao teu lado", color: "#ff80ab", breakLine: true },
      ],
      element: "typedtext3",
      speed: 70,
      delay: 500
    });
    
    setTimeout(() => {
      main.insertAdjacentHTML('beforeend', section_img_3)
      initTyping({
        messages: [
          { text: "vivendo aventuras, sorrindo juntos,", breakLine: false },
          { text: "e aproveitando cada momento como se fosse único.", breakLine: false},
          { text: "construindo memórias...",color: "#cddc39", breakLine: true }

        ],
        element: "text-1",
        speed: 70,
        delay: 500
      });
     
    }, 6000);
    setTimeout(() => {
      initTyping({
        messages: [
          { text: "transformando os dias comuns em lembranças especiais,", breakLine: false },
          { text: "com teu sorriso sendo meu lugar favorito no mundo.", breakLine: false },
          { text: "porque contigo, tudo é mágico.", breakLine: true }
        ],
        element: "text-1.2",
        speed: 70,
        delay:500
      });
    }, 15000);
    setTimeout(() => {
      main.insertAdjacentHTML('beforeend', section_img_3_2)
      initTyping({
        messages: [
          { text: "te amando em cada detalhe ", breakLine: false },
          { text: "e prometendo estar aqui, hoje e sempre.", breakLine: false },
          { text: "essa é a nossa história de amor.", breakLine: true }
        ],
        
        element: "text-3.2",
        speed: 70,
        delay: 500
      });
    }, 21000);
    setTimeout(() => criarBotaoProximo(() => etapaQuatro()), 31000);
  }
}

function etapaQuatro() {
  removeWithEffect('typedtext3', 'animate__fadeOutLeft');
  removeWithEffect('text-1', 'animate__fadeOutRight');
  removeWithEffect('text-1.2', 'animate__fadeOutLeft');
  removeWithEffect('text-3.2', 'animate__fadeOutRight');
  removeWithEffect('img_card_three', 'animate__fadeOutLeft');
  removeWithEffect('img_card_three_2', 'animate__fadeOutRight');

  const main = document.querySelector('main');
  if (main) {
    const div = document.createElement('div');
    div.id = 'typedtext4';
    div.className = 'typedtext2';
    main.appendChild(div);

    initTyping({
      messages: [
        { text: "O tempo passou, e mesmo com altos e baixos, mantivemos contato. ", breakLine: true },
        { text: "Ao longo dos anos, crescemos e amadurecemos, mas você sempre esteve comigo.", breakLine: true }
      ],
      element: "typedtext4",
      speed: 70,
      delay: 0
    });

    setTimeout(() => {
      main.insertAdjacentHTML('beforeend', section_img_4);

      initTyping({
        messages: [
          { text: "A vida não foi fácil em muitos momentos.", breakLine: true },
          { text: "Mas seu carinho, sua amizade e sua presença foram abrigo e luz nos meus dias nublados.", breakLine: true },
         
        ],
        element: "text-3.2",
        speed: 70,
        delay: 0
      });
       setTimeout(() => {
        initTyping({
          messages: [
            { text: "Quero estar contigo em tempos bons e ruins.", breakLine: false },
            { text: "Fazendo planos, mudando rotas, mas sempre ao teu lado.", breakLine: false },
            { text: "Compartilhando sonhos que pareciam distantes,", breakLine: false },
            { text: "e encontrando força juntos, mesmo nos dias difíceis.", breakLine: false },
            { text: "Rindo das pequenas coisas,", breakLine: false },
            { text: "celebrando cada conquista como se fosse a maior do mundo,", breakLine: false },
            { text: "e superando os obstáculos com coragem e união.", color: "#FFC107", breakLine: false },
            { text: "Porque o meu futuro faz sentido... só se tiver você.", color: "#ff80ab", breakLine: true }
          ],
          element: "text-1.2",
          speed: 70,
          delay: 0
        });
       },8000)
      setTimeout(() => criarBotaoProximo(() => etapaCinco(), true), 22500);
    }, 10500);
  }
}
  

function etapaCinco() {
  removeWithEffect('typedtext4', 'animate__fadeOutLeft');
  removeWithEffect('text-3.2', 'animate__fadeOutRight');
  removeWithEffect('img_card_three', 'animate__fadeOutLeft');
  removeWithEffect('img_card_three_2', 'animate__fadeOutRight');
  

  const main = document.querySelector('main');
  if (main) {
    const div = document.createElement('div');
    div.id = 'typedtext5';
    div.className = 'typedtext2';
    main.appendChild(div);

    initTyping({
      messages: [
        { text: "Tem algo que eu carrego comigo há muito tempo:", breakLine: false},
        { text: "a vontade de te chamar de esposa um dia.", color: "#f06292", breakLine: true }
      ],
      element: "typedtext5",
      speed: 70,
      delay: 500
    });

    setTimeout(() => {
      main.insertAdjacentHTML('beforeend', section_img_5);

      initTyping({
        messages: [
          { text: "Quero viver ao teu lado todos os dias,", breakLine: false },
          { text: "nos planos mais simples ou mais loucos,", breakLine: false },
          { text: "mas sempre com amor e parceria.", color: "#e91e63", breakLine: true }
        ],
        element: "text-1",
        speed: 70,
        delay: 500
      });
    }, 8000);

    setTimeout(() => {
      initTyping({
        messages: [
          { text: "Quero montar uma casa com a nossa cara,", breakLine: false },
          { text: "com cheirinho de café, sofá bagunçado,", breakLine: false },
          { text: "e nossos quadros na parede.", breakLine: true }
        ],
        element: "text-1.2",
        speed: 70,
        delay: 500
      });
    }, 19000);

    setTimeout(() => {
      main.insertAdjacentHTML('beforeend', section_img_5_1);

      initTyping({
        messages: [
          { text: "E um dia, ver nossos filhos crescendo,", breakLine: false },
          { text: "rindo alto pela casa,", breakLine: false },
          { text: "com teu jeitinho e meu coração.", color: "#ff80ab", breakLine: true }
        ],
        element: "text-3.2",
        speed: 70,
        delay: 500
      });
    }, 28000);

    setTimeout(() => criarBotaoProximo(() => aplicarFundoEImagens()), 31000);
  }
}



function criarBotaoProximo(callback, scroll = true) {
  const buttonNextHTML = `
    <div id="container_button_next">
      <button class="custom-button" id="next_button">Próximo</button>
    </div>
  `;
  document.querySelector('main')?.insertAdjacentHTML('beforeend', buttonNextHTML);


 if (scroll) window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  const nextButton = document.getElementById('next_button');
  nextButton?.addEventListener('click', () => {
    const container = document.getElementById('container_button_next');
    if (container) container.remove();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    callback();
  });
}

function trocarVideoDeFundo() {
  if (!videoElement) return;
  videoElement.src = videosDeFundo[indiceAtual];
  videoElement.load();
  videoElement.play();
  indiceAtual = (indiceAtual + 1) % videosDeFundo.length;
}


function aplicarFundoEImagens() {
  const MainElement = document.getElementById('container_main');
  if (MainElement) {
    const headerElement = document.getElementById('header_aniversario');
    MainElement.innerHTML = '';
    if (headerElement) {
      MainElement.appendChild(headerElement);
    }
    MainElement.classList.add('hide-pseudo');
  }

  document.body.style.backgroundColor = '#242323';
  alternarImagensComEfeito();
}

function alternarImagensComEfeito() {
  const imagens = [
    './public/images/ft1.jpg',
    './public/images/ft2.jpg',
    './public/images/ft3.jpg',
    './public/images/ft4.jpg',
    './public/images/ft5.jpg',
    './public/images/ft6.jpg',
    './public/images/ft7.jpg',
    './public/images/ft8.jpg',
    './public/images/ft9.jpg',
    './public/images/ft10.jpg',
    './public/images/ft11.jpg',
    './public/images/ft12.jpg',
    './public/images/ft13.jpg',
  ];

  const animacoesEntrada = ['animate__fadeIn', 'animate__zoomIn', 'animate__fadeInDown'];
  const animacoesSaida = ['animate__fadeOut', 'animate__zoomOut', 'animate__fadeOutUp'];

  const container = document.createElement('div');
  container.id = 'bg-image-wrapper';
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.zIndex = '-2';
  container.style.overflow = 'hidden';

  document.body.appendChild(container);

  let indiceAtual = 0;
  let ativo = 0;

  // Cria duas camadas para alternância
  const layers = [0, 1].map(i => {
    const layer = document.createElement('div');
    layer.className = 'bg-layer animate__animated';
    layer.style.position = 'absolute';
    layer.style.top = '0';
    layer.style.left = '0';
    layer.style.width = '100%';
    layer.style.height = '100%';
    layer.style.backgroundSize = 'cover';
    layer.style.backgroundPosition = 'center';
    layer.style.opacity = '0';
    container.appendChild(layer);
    return layer;
  });

  function trocarImagem() {
    const atual = layers[ativo];
    const proxima = layers[1 - ativo];

    const novaImg = imagens[indiceAtual % imagens.length];
    const entrada = animacoesEntrada[Math.floor(Math.random() * animacoesEntrada.length)];
    const saida = animacoesSaida[Math.floor(Math.random() * animacoesSaida.length)];

    // Define nova imagem e aplica animação de entrada
    proxima.style.backgroundImage = `url(${novaImg})`;
    proxima.style.zIndex = '1';
    proxima.style.opacity = '1';
    proxima.className = `bg-layer animate__animated ${entrada}`;

    // Aplica animação de saída na imagem atual
    atual.className = `bg-layer animate__animated ${saida}`;
    atual.style.zIndex = '0';
    setTimeout(() => {
      atual.style.opacity = '0';
    }, 1000); // Aguarda animação sair

    indiceAtual++;
    ativo = 1 - ativo;
  }

  trocarImagem();
  setInterval(trocarImagem, 4000);
}

// Chama a função

function removeWithEffect(elementId, efeito) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add('animate__animated', efeito);
 // Adiciona a classe de efeito

    setTimeout(() => {
      element.remove(); // Remove após 2 segundos
    }, 500);
  }
}