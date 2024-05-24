document.addEventListener("DOMContentLoaded", function () {
  const continenteSelect = document.getElementById("continente");
  const paisSelect = document.getElementById("pais");
  const infoContainer = document.getElementById("info-container");

  const paisesPorContinente = {
    africa: ["Nigéria", "Egito", "África do Sul"],
    asia: ["China", "Índia", "Japão"],
    europa: ["Alemanha", "França", "Reino Unido"],
    "america-norte": ["Estados Unidos", "Canadá", "México"],
    "america-sul": ["Brasil", "Argentina", "Chile"],
    oceania: ["Austrália", "Nova Zelândia", "Fiji"],
  };

  const paisesInfo = {
    nigéria: {
      imagem: "img/nigeria.jpeg",
      descricao: "A Nigéria é um país da África Ocidental.",
    },
    egito: {
      imagem: "img/egito.jpeg",
      descricao: "O Egito é um país do nordeste da África.",
    },
    "áfrica-do-sul": {
      imagem: "img/africa-do-sul.jpeg",
      descricao: "A África do Sul é um país no extremo sul da África.",
    },
    china: {
      imagem: "img/china.jpeg",
      descricao: "A China é o país mais populoso do mundo.",
    },
    índia: {
      imagem: "img/india.jpeg",
      descricao: "A Índia é um vasto país do sul da Ásia.",
    },
    japão: {
      imagem: "img/japao.jpeg",
      descricao: "O Japão é um arquipélago no leste da Ásia.",
    },
    alemanha: {
      imagem: "img/alemanha.jpeg",
      descricao: "A Alemanha é um país da Europa Central.",
    },
    frança: {
      imagem: "img/franca.jpeg",
      descricao: "A França é um país da Europa Ocidental.",
    },
    "reino-unido": {
      imagem: "img/reino-unido.jpeg",
      descricao: "O Reino Unido é um país insular da Europa.",
    },
    "estados-unidos": {
      imagem: "img/estados-unidos.jpeg",
      descricao: "Os Estados Unidos é um país da América do Norte.",
    },
    canadá: {
      imagem: "img/canada.jpeg",
      descricao: "O Canadá é um vasto país da América do Norte.",
    },
    méxico: {
      imagem: "img/mexico.jpeg",
      descricao: "O México é um país da América do Norte.",
    },
    brasil: {
      imagem: "img/brasil.jpeg",
      descricao: "O Brasil é o maior país da América do Sul.",
    },
    argentina: {
      imagem: "img/argentina.jpeg",
      descricao: "A Argentina é um grande país da América do Sul.",
    },
    chile: {
      imagem: "img/chile.jpeg",
      descricao: "O Chile é um país longo e estreito na América do Sul.",
    },
    austrália: {
      imagem: "img/australia.jpeg",
      descricao: "A Austrália é um país insular na Oceania.",
    },
    "nova-zelândia": {
      imagem: "img/nova-zelandia.jpeg",
      descricao: "A Nova Zelândia é um país insular na Oceania.",
    },
    fiji: {
      imagem: "img/fiji.jpeg",
      descricao: "Fiji é um país insular na Oceania.",
    },
  };

  continenteSelect.addEventListener("change", function () {
    const continente = this.value;

    // Limpa a lista de países
    paisSelect.innerHTML = '<option value="">Selecione</option>';

    if (continente) {
      const paises = paisesPorContinente[continente];

      // Habilita o select de países
      paisSelect.disabled = false;

      // Adiciona os países correspondentes ao continente selecionado
      paises.forEach(function (pais) {
        const option = document.createElement("option");
        option.value = pais.toLowerCase().replace(/ /g, "-");
        option.textContent = pais;
        paisSelect.appendChild(option);
      });
    } else {
      // Desabilita o select de países se nenhum continente for selecionado
      paisSelect.disabled = true;
    }
  });

  paisSelect.addEventListener("change", function () {
    const pais = this.value;

    // Limpa o conteúdo anterior
    infoContainer.innerHTML = "";

    if (pais && paisesInfo[pais]) {
      const info = paisesInfo[pais];

      // Cria a imagem
      const img = document.createElement("img");
      img.src = info.imagem;
      img.alt = `Imagem de ${pais}`;

      // Cria a descrição
      const descricao = document.createElement("p");
      descricao.textContent = info.descricao;

      // Adiciona a imagem e a descrição ao container
      infoContainer.appendChild(img);
      infoContainer.appendChild(descricao);
    }
  });
});
