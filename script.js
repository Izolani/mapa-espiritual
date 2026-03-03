function initMap() {
  const paracambi = { lat: -22.6079, lng: -43.7096 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: paracambi,
  });

  const igrejas = [
    {
      nome: "Igreja Cristã Nova Vida – Paracambi",
      pos: { lat: -22.6516, lng: -43.7729 },
      bairro: "Fábrica"
    }
  ];

  igrejas.forEach(i => {
    new google.maps.Marker({
      position: i.pos,
      map,
      title: `${i.nome} (${i.bairro})`
    });
  });
}