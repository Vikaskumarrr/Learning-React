const apiKey = "34148cef9ab0350f5f9e5c55caf956b9";

export function getGerLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
}

export async function fetchWeatherReport(lat, lng) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`
        const weatherReport = await url.json();
        return { success: true, data: weatherReport };
    } catch (error) {
        alert("Failed to fetch weather report")
        return { success: false };
    }

}