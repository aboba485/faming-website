// Инициализация карты с отключенным контроллером зума
var map = L.map('map', { zoomControl: false }).setView([37.0902, -95.7129], 4);  // Центр карты на США, зум 4

// Добавление темного слоя карты (CartoDB Dark Matter)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/attributions" target="_blank">CartoDB</a> contributors',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

// Данные городов с координатами
var locations = [
    { name: "Seattle", lat: 47.6062, lon: -122.3321, score: 98, temperature: 68, aqi: 50, pests: 12, daylight: 14, humidity: 75, soil: "Good" },
    { name: "Los Angeles", lat: 34.0522, lon: -118.2437, score: 90, temperature: 85, aqi: 60, pests: 15, daylight: 16, humidity: 60, soil: "Good" },
    { name: "Phoenix", lat: 33.4484, lon: -112.0740, score: 88, temperature: 95, aqi: 40, pests: 10, daylight: 12, humidity: 20, soil: "Fair" },
    { name: "Denver", lat: 39.7392, lon: -104.9903, score: 85, temperature: 70, aqi: 45, pests: 12, daylight: 15, humidity: 35, soil: "Good" },
    { name: "Houston", lat: 29.7604, lon: -95.3698, score: 80, temperature: 90, aqi: 55, pests: 20, daylight: 13, humidity: 80, soil: "Fair" },
    { name: "Miami", lat: 25.7617, lon: -80.1918, score: 95, temperature: 85, aqi: 35, pests: 8, daylight: 11, humidity: 85, soil: "Excellent" },
    { name: "New York City", lat: 40.7128, lon: -74.0060, score: 88, temperature: 75, aqi: 40, pests: 10, daylight: 12, humidity: 70, soil: "Fair" },
    { name: "Minneapolis", lat: 44.9778, lon: -93.2650, score: 87, temperature: 68, aqi: 45, pests: 9, daylight: 14, humidity: 60, soil: "Good" },
    { name: "Chicago", lat: 41.8781, lon: -87.6298, score: 85, temperature: 70, aqi: 50, pests: 11, daylight: 13, humidity: 65, soil: "Good" },
    { name: "New Orleans", lat: 29.9511, lon: -90.0715, score: 80, temperature: 85, aqi: 55, pests: 20, daylight: 12, humidity: 75, soil: "Fair" },
    { name: "Anchorage", lat: 61.2181, lon: -149.9003, score: 92, temperature: 60, aqi: 35, pests: 5, daylight: 18, humidity: 50, soil: "Good" },
    { name: "Honolulu", lat: 21.3069, lon: -157.8583, score: 95, temperature: 80, aqi: 30, pests: 8, daylight: 13, humidity: 75, soil: "Excellent" },
    { name: "Atlanta", lat: 33.7490, lon: -84.3880, score: 87, temperature: 78, aqi: 45, pests: 12, daylight: 12, humidity: 70, soil: "Good" },
    { name: "Kansas City", lat: 39.0997, lon: -94.5786, score: 83, temperature: 72, aqi: 50, pests: 14, daylight: 13, humidity: 65, soil: "Good" },
    { name: "Las Vegas", lat: 36.1699, lon: -115.1398, score: 85, temperature: 95, aqi: 60, pests: 10, daylight: 14, humidity: 25, soil: "Fair" }
];

// Функция для отображения pop-up карточки
function openPopup(data) {
    document.getElementById('region-name').textContent = data.name;
    document.getElementById('total-score').textContent = `Total Score: ${data.score}/100`;
    document.getElementById('temperature').textContent = data.temperature;
    document.getElementById('aqi').textContent = data.aqi;
    document.getElementById('pests').textContent = data.pests;
    document.getElementById('daylight').textContent = data.daylight;
    document.getElementById('humidity').textContent = data.humidity;
    document.getElementById('soil').textContent = data.soil;

    // Открыть карточку
    var popup = document.getElementById('popup-container');
    popup.style.display = 'block';
}

// Закрытие pop-up
function closePopup() {
    var popup = document.getElementById('popup-container');
    popup.style.display = 'none';
}

// Функция для управления боковым меню (открытие и закрытие)
function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";  // Открыть боковое меню шириной 250px
    }
}

// Добавление маркеров на карту и pop-up
locations.forEach(function(location) {
    var marker = L.marker([location.lat, location.lon]).addTo(map);
    marker.on('click', function() {
        openPopup(location);
    });
});
