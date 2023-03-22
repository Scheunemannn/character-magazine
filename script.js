let botaodiminui = document.getElementById("botaodiminui");

let botaoaumenta = document.getElementById("botaoaumenta");

let number = Math.floor(0);

let texto = document.getElementById("texto");

const verifica = () => {
  if (number <= 0) {
    texto.innerHTML =
      "Mia nasceu no sul do continente, em uma vila chamada Bombinhas, localizada em uma península protegida por uma cadeia montanhosa que dificultava o acesso ao local. Por conta disso, o povo de Bombinhas desenvolveu uma cultura única. <br> <br> Em um dia de tempestade, a vila foi atacada por invasores, que destruiram e saquearam tudo. Alguns moradores conseguiram escapar por uma antiga passagem secreta através da montanha. Contudo, a maior parte do povo não conseguiu escapar a tempo. Após atravessarem a montanha, os refugiados chegaram viajaram por três dias até chegarem à cidade de Porto Belo, uma cidade com grandes muralhas e que os acolheu.";
  } else if (number == 1) {
    texto.innerHTML =
      "Após atravessarem a montanha, os refugiados viajaram por três dias até chegarem à cidade de Porto Belo, uma cidade fortificada que os acolheu. Na cidade, Mia teve contato com um grupo de outros refugiados que haviam tido suas vilas atacadas, e destes grupos de refugiados surgiu um grupo de resistência contra os invasores chamado guardiões da galáxia. <br> Os invasores promoveram diversos ataques à acampamentos dos invasores e roubaram diversos de seus comboios de abastecimento, prejudicando o avanço das tropas. Em um desses ataques, os invasores estavam esperando um ataque da resistência e promoveram um contra-ataque, causando diversas baixas à resistência. Mia foi ferida e ficou inconsciente durante o ataque. " ;
  }
  else if (number == 2) {
    texto.innerHTML =
      "Quando acordou, estava deitada em uma cama confortável. Ao sair dos aposentos em que se encontrava, Mia se deparou com um grupo de mulheres praticando um tipo de dança. À jovem precisou passar algumas semanas se recuperando de seus ferimentos, e neste tempo, juntou-se as mulheres na prática daquela dança. No dia de sua partida, a líder daquele grupo levou Mia até um tempo misterioso, e neste templo as duas meditaram e Mia passou por uma espécie de ritual.  Quando o ritual acabou, Mia foi levada à um grande salão, cheio de armas. E neste salão as duas dançaram juntas pela última vez. Enquanto dançavam, as armas que estavam no salão começaram a flutuar ao redor das duas mulheres. E conforme Mia desenvolvia sua dança, as armas respondiam ao seu movimento e flutuavam junto com o corpo dela. Após isso Mia deixou o templo.";
  }
};

const aumenta = () => {
  number++;
  console.log(number);
  if (number == 2) {
    number = 2;
  }
  verifica();
};

const diminui = () => {
  number--;
  console.log(number);
  if (number <= 0) {
    number = 0;
  }
  verifica();
};
