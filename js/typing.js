// typing.js

let typingConfig = {
  messages: [],
  speed: 60,
  scrollAt: 20,
  element: 'typedtext',
  delay: 0
};

let iIndex = 0;
let iArrLength = 0;
let iTextPos = 0;
let sContents = '';
let iRow = 0;

export default function initTyping({
  messages,
  speed = 60,
  scrollAt = 20,
  element = "typedtext",
  delay = 0
}) {
  typingConfig = { messages, speed, scrollAt, element, delay };
  iIndex = 0;
  iArrLength = messages[0].text.length;
  iTextPos = 0;
  sContents = '';
  iRow = 0;

  setTimeout(() => {
    tw();
  }, delay);
}

function tw() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - typingConfig.scrollAt);
  const destination = document.getElementById(typingConfig.element);

  if (!destination) {
    console.error(`Elemento com ID '${typingConfig.element}' não encontrado no DOM.`);
    return;
  }

  while (iRow < iIndex) {
    const msg = typingConfig.messages[iRow];
    const color = msg.color;
    const line = msg.text;
    const end = msg.breakLine ? '<br />' : ' ';
    sContents += color
      ? `<span style="color: ${color};">${line}</span>${end}`
      : `${line}${end}`;
    iRow++;
  }

  const currentMsg = typingConfig.messages[iIndex];
  let currentLine = currentMsg.text.substring(0, iTextPos);
  if (currentMsg.color) {
    currentLine = `<span style="color: ${currentMsg.color};">${currentLine}</span>`;
  }

  destination.innerHTML = sContents + currentLine + "_";

  if (iTextPos++ === iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex !== typingConfig.messages.length) {
      iArrLength = typingConfig.messages[iIndex].text.length;
      setTimeout(tw, 500);
    }
  } else {
    setTimeout(tw, typingConfig.speed);
  }
}
