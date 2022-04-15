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
        //console.log(etappe);
        L.marker([etappe.lat, etappe.lng]).addTo(map);
    }