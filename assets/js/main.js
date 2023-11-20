// script pour controler la prise plug s


const IpAdressData = 'https://shelly-77-eu.shelly.cloud/device/status?id=4022d88e30e8&auth_key=MWNiMjY5dWlk404459961993DCA83AE44BC6E3A6F58906952E7BECA0A5B69DC375C964915ACBC0EA536A0639CB73' ; // adresse ip de la prise plug s

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
            document.getElementById('power_meter').textContent = data.data.device_status.meters[0].power;
            document.getElementById('time').textContent = data.data.device_status.time;
        })
        .catch((err) => {
            console.log(err);
        })
}






document.addEventListener('DOMContentLoaded', function () {
    getPlugS();
    setInterval(getPlugS, 1000);
});
