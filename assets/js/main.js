// script pour controler la prise plug s


const IpAdress = '192.168.1.100' ; // adresse ip de la prise plug s

// recuperer les infos de la prise plug s
function getPlugS() {
    fetch('http://' + IpAdress + '/status')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('connected').textContent = data.wifi_sta.connected;
            document.getElementById('ssid').textContent = data.wifi_sta.ssid;
            document.getElementById('ip').textContent = data.wifi_sta.ip;
            document.getElementById('rssi').textContent = data.wifi_sta.rssi;
            document.getElementById('temperature').textContent = data.temperature;
            document.getElementById('serial').textContent = data.serial;
            document.getElementById('mac').textContent = data.mac;
        })
        .catch((err) => {
            console.log(err);
        })
}

function togglePlugS() {

}





document.addEventListener('DOMContentLoaded', function () {
    getPlugS();
    setInterval(getPlugS, 1000);
});
