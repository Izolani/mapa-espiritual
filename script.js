function initMap() {

  // 📍 Centro aproximado de Paracambi
  const centroParacambi = { lat: -22.6068, lng: -43.7113 };

  // 🗺️ Criar mapa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: centroParacambi
  });

  // 📏 Limites para ajustar o mapa automaticamente
  const bounds = new google.maps.LatLngBounds();

  // 🎨 Ícones por bairro
  const iconesPorBairro = {
    "Centro": "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
    "Lages": "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    "Guarajuba": "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    "Sabugo": "https://maps.google.com/mapfiles/ms/icons/purple-dot.png",
    "Outros": "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
  };

  // 🛐 Lista de igrejas com lat/lng já definidos (evita geocoding e erros)
  const igrejas = [
    // Centro
    { nome:"IEADP – Assembleia de Deus Ministério de Paracambi", bairro:"Centro", lat:-22.6065, lng:-43.7105, endereco:"R. Afonso Franco, 15, Paracambi - RJ" },
    { nome:"Igreja Batista de Paracambi", bairro:"Centro", lat:-22.6058, lng:-43.7120, endereco:"R. Juiz Emílio Carmo, 61, Paracambi - RJ" },
    { nome:"Igreja Evangélica Congregacional", bairro:"Centro", lat:-22.6072, lng:-43.7110, endereco:"R. Dr. Nilo Peçanha, 222, Paracambi - RJ" },
    { nome:"Igreja Evangélica Povo de Deus do Brasil", bairro:"Centro", lat:-22.6060, lng:-43.7100, endereco:"Tv. Pedro Soares, 17, Paracambi - RJ" },
    { nome:"Ministério Estrela da Alva", bairro:"Centro", lat:-22.6068, lng:-43.7095, endereco:"Av. Cel. Othon, 31, Paracambi - RJ" },
    { nome:"Assembleia de Deus Unção Profética", bairro:"Centro", lat:-22.6075, lng:-43.7122, endereco:"Av. dos Operários, 360, Paracambi - RJ" },

    // Lages
    { nome:"AD Rua 10 – Ministério de Paracambi", bairro:"Lages", lat:-22.6285, lng:-43.7212, endereco:"R. Dep. Romeu Natal, 1017, Paracambi - RJ" },
    { nome:"Assembleia de Deus Ministério de Lages", bairro:"Lages", lat:-22.6270, lng:-43.7200, endereco:"R. Leal de Carvalho, 50, Paracambi - RJ" },
    { nome:"Ministério Semeando a Palavra", bairro:"Lages", lat:-22.6290, lng:-43.7220, endereco:"Praça Expedicionário Nilo Gama Flores, 41, Paracambi - RJ" },
    { nome:"Comunidade Crescendo em Cristo", bairro:"Lages", lat:-22.6300, lng:-43.7230, endereco:"R. Antônio Natal, 134, Paracambi - RJ" },
    { nome:"Igreja Casa de Deus", bairro:"Lages", lat:-22.6310, lng:-43.7240, endereco:"Tv. Bom Jardim, 64, Paracambi - RJ" },
    { nome:"Igreja Cristo Vive de Paracambi", bairro:"Lages", lat:-22.6320, lng:-43.7250, endereco:"Estr. RJ-127, 9737, Paracambi - RJ" },

    // Guarajuba
    { nome:"Igreja Batista Guarajuba", bairro:"Guarajuba", lat:-22.6400, lng:-43.7300, endereco:"R. São Jorge, 201, Paracambi - RJ" },

    // Sabugo
    { nome:"Missão Evangélica do Brasil – MEB", bairro:"Sabugo", lat:-22.6179, lng:-43.7425, endereco:"R. Beraldo Sacchi, 955, Paracambi - RJ" },
    { nome:"ADNI Paracambi", bairro:"Sabugo", lat:-22.6185, lng:-43.7430, endereco:"Av. Pres. João Goulart, 248, Paracambi - RJ" },

    // Outros bairros
    { nome:"Comunidade Rafá", bairro:"Outros", lat:-22.6190, lng:-43.7440, endereco:"R. Rio de Janeiro, 17, Paracambi - RJ" },
    { nome:"Igreja Monte Gerizim", bairro:"Outros", lat:-22.6200, lng:-43.7450, endereco:"R. Santa Teresinha, Paracambi - RJ" },
    { nome:"Igreja Brasa Viva", bairro:"Outros", lat:-22.6210, lng:-43.7460, endereco:"Estr. da Floresta, Paracambi - RJ" }
  ];

  // 🌐 Criar markers
  igrejas.forEach(igreja => {

    const position = { lat: igreja.lat, lng: igreja.lng };

    const marker = new google.maps.Marker({
      map,
      position,
      title: igreja.nome,
      icon: iconesPorBairro[igreja.bairro] || null
    });

    // 🪟 InfoWindow com nome, bairro e endereço
    const info = new google.maps.InfoWindow({
      content: `<strong>${igreja.nome}</strong><br>
                Bairro: ${igreja.bairro}<br>
                ${igreja.endereco}`
    });

    marker.addListener("click", () => info.open(map, marker));

    // 🔧 Ajusta limites para mostrar todos os pins
    bounds.extend(position);
    map.fitBounds(bounds);

  });

}