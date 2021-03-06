var imported = document.createElement("script");
imported.src = "data.js";
document.head.appendChild(imported);
var result = document.getElementById("resultado");
//cards = JSON.parse(localStorage.getItem('jogadores') || '[]');
var cardPC;
var cardPlayer;

function addPlayer() {
  var nameValue = document.getElementById("name").value;
  var dribleValue = document.getElementById("drible-input").value;
  var defesaValue = document.getElementById("defesa-input").value;
  var chuteValue = document.getElementById("chute-input").value;
  var urlValue = document.getElementById("url-input").value;

  if (nameValue == "") {
    alert("Digite o nome do jogador");
  } else if (urlValue == "") {
    alert("Digite uma URL");
  } else {
    let newCard = {
      nome: nameValue,
      url: urlValue,
      atributes: {
        Drible: dribleValue,
        Defesa: defesaValue,
        Chute: chuteValue,
      },
    };
    cards.push(newCard);
    localStorage.setItem("cards", JSON.stringify(cards));
    console.log(cards);
  }
}
function drawCard() {
  if (!cards.length) {
    alert("Crie um jogador");
  } else {
    var n = parseInt(Math.random() * cards.length);
    cardPC = cards[n];
    var m = parseInt(Math.random() * cards.length);
    cardPlayer = cards[m];
  }
  if (cardPlayer == cardPC) {
    n = parseInt(Math.random() * cards.length);
    cardPC = cards[n];
  }
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  showOptions();
}
function showOptions() {
  var options = document.getElementById("opcoes");
  var opText = "";
  for (let atributos in cardPlayer.atributes) {
    opText +=
      `<input type="radio" name="atributes" value="${atributos}">` + atributos;
  }
  options.innerHTML = opText;
}
function atributeSelect() {
  var radioAtrib = document.getElementsByName("atributes");
  for (let i = 0; i < radioAtrib.length; i++) {
    if (radioAtrib[i].checked === true) {
      return radioAtrib[i].value;
    }
  }
}
function jogar() {
  var atribSelected = atributeSelect();
  var result = document.getElementById("resultado");

  if (atribSelected == undefined) {
    alert("Escolha um atributo");
    drawCard();
  } else {
    var valuePlayer = cardPlayer.atributes[atribSelected];
    var valuePC = cardPC.atributes[atribSelected];

    if (valuePlayer > valuePC) {
      result.innerHTML = `<h1>Voc?? ganhou do ${cardPC.nome} no atributo de ${atribSelected}</h1><h3>${cardPlayer.nome} VS ${cardPC.nome}</h3><img src="${cardPlayer.url}"><img src="${cardPC.url}"><h2>Sua carta era ?? do ${cardPlayer.nome}</h2>`;
      result.style.backgroundColor = "#d3bfbf52";
      result.style.border = "solid 3px white";
      result.style.borderRadius = "20px";
    } else if (valuePC > valuePlayer) {
      result.innerHTML = `<h1>Voc?? perdeu para ${cardPC.nome} no atributo de ${atribSelected}</h1><h3>${cardPlayer.nome} VS ${cardPC.nome}</h3><img src="${cardPlayer.url}"><img src="${cardPC.url}"><h2>Sua carta era ?? do ${cardPlayer.nome}</h2>`;
      result.style.backgroundColor = "#d3bfbf52";
      result.style.border = "solid 3px white";
      result.style.borderRadius = "20px";
    } else {
      result.innerHTML = `<h1>Voc?? empatou com ${cardPC.nome} no atributo de ${atribSelected}</h1><h3>${cardPlayer.nome} VS ${cardPC.nome}</h3><img src="${cardPlayer.url}"><img src="${cardPC.url}"><h2>Sua carta era ?? do ${cardPlayer.nome}</h2>`;
      result.style.backgroundColor = "#d3bfbf52";
      result.style.border = "solid 3px white";
      result.style.borderRadius = "20px";
    }
    document.getElementById("btnSortear").disabled = false;
  }
}
