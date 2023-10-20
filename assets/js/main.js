// script pour controler la prise plug s


const IpAdressData = 'https://shelly-86-eu.shelly.cloud/device/status?id=80646F827174&auth_key=MWRmYzM2dWlkE62C6C4C76F817CE0A3D2902F5B5D4C115E49B28CF8539114D9246505DE5D368D560D06020A92480' ; // adresse ip de la prise plug s

// recuperer les infos de la prise plug s
function getPlugS() {
    fetch(IpAdressData)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('connected').textContent = data.data.device_status.wifi_sta.connected;
            document.getElementById('ssid').textContent = data.data.device_status.wifi_sta.ssid;
            document.getElementById('ip').textContent = data.data.device_status.wifi_sta.ip;
            document.getElementById('rssi').textContent = data.data.device_status.wifi_sta.rssi;
            document.getElementById('temperature').textContent = data.data.device_status.temperature;
            document.getElementById('serial').textContent = data.data.device_status.serial;
            document.getElementById('mac').textContent = data.data.device_status.mac;
        })
        .catch((err) => {
            console.log(err);
        })
}

const ipAdressToggle: 'https://shelly-86-eu.shelly.cloud/device/relay/bulk_control?id=80646F827174&auth_key=MWRmYzM2dWlkE62C6C4C76F817CE0A3D2902F5B5D4C115E49B28CF8539114D9246505DE5D368D560D06020A92480'

function togglePower() {
    fetch (ipAdressToggle)
        .then((response) => {
}





document.addEventListener('DOMContentLoaded', function () {
    getPlugS();
    setInterval(getPlugS, 1000);
});
