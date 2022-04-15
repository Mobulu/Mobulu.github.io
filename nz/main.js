/* Neuseelandreise Skript */
// einzeiliger Kommentar

var map = L.map('map').setView([-38.136944, 176.250833], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-38.136944, 176.250833]).addTo(map)
    .bindPopup('<h3>Rotorua</h3>')
    .openPopup();

    for (let etappe of ETAPPEN) {
        let popup = `
      <h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
      <ul>
      <li>geogr. Länge: ${etappe.lng}</li>
      <li>geogr. Breite: ${etappe.lat}</li>
      <li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a></li>
      <li><a href="https://${etappe.github}.github.io/nz/">Link zur Etappenseite</a></li>
  </ul>
  `;
        //console.log(etappe);
        L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
    }

// DOC Hütten anzeigen
  for (let hut of HUTS) {
    L.marker([hut.lat, hut.lng]).addTo(map);
}