// Función para actualizar los datos del equipo
function updateDeviceInfo() {
    // Tamaño de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Tamaño del contenedor
    const container = document.querySelector('.container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Resolución de pantalla
    const screenWidth = screen.width;
    const screenHeight = screen.height;

    // Dispositivo y navegador
    const userAgent = navigator.userAgent;
    const isMobile = /Mobi|Android/i.test(userAgent) ? "Sí" : "No";
    const os = navigator.platform;
    const browser = navigator.appName;

    // Idioma
    const language = navigator.language;

    // Conexión a Internet
    const isOnline = navigator.onLine ? "En línea" : "Fuera de línea";

    // Núcleos del procesador
    const cores = navigator.hardwareConcurrency;

    // Batería
    let batteryLevel = "No disponible";
    let isCharging = "No disponible";
    if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
            batteryLevel = Math.round(battery.level * 100);
            isCharging = battery.charging ? "Cargando" : "No cargando";
        });
    }

    // Geolocalización
    let latitude = "No disponible";
    let longitude = "No disponible";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        });
    }

    // Cookies
    const cookiesEnabled = navigator.cookieEnabled ? "Sí" : "No";

    // Tiempo de carga
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

    // Zona horaria
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Mostrar los datos en la página
    document.getElementById('window-size').textContent = 
        `Tamaño de la ventana: ${windowWidth}px (ancho) x ${windowHeight}px (alto)`;

    document.getElementById('container-size').textContent = 
        `Tamaño del contenedor: ${containerWidth}px (ancho) x ${containerHeight}px (alto)`;

    document.getElementById('screen-size').textContent = 
        `Resolución de pantalla: ${screenWidth}px (ancho) x ${screenHeight}px (alto)`;

    document.getElementById('device-info').textContent = 
        `Dispositivo: ${os} | Navegador: ${browser} | Móvil: ${isMobile}`;

    document.getElementById('language-info').textContent = 
        `Idioma: ${language}`;

    document.getElementById('connection-info').textContent = 
        `Conexión: ${isOnline}`;

    document.getElementById('cpu-info').textContent = 
        `Núcleos del procesador: ${cores}`;

    document.getElementById('battery-info').textContent = 
        `Batería: ${batteryLevel}% | Estado: ${isCharging}`;

    document.getElementById('location-info').textContent = 
        `Ubicación: Latitud ${latitude}, Longitud ${longitude}`;

    document.getElementById('cookies-info').textContent = 
        `Cookies habilitadas: ${cookiesEnabled}`;

    document.getElementById('load-time').textContent = 
        `Tiempo de carga: ${loadTime} ms`;

    document.getElementById('timezone-info').textContent = 
        `Zona horaria: ${timezone}`;
}

// Actualizar los datos al cargar la página
window.addEventListener('load', updateDeviceInfo);

// Actualizar los datos al redimensionar la ventana
window.addEventListener('resize', updateDeviceInfo);