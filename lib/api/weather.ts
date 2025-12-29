const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  sys: {
    country: string;
  };
}

export interface ForecastData {
  list: {
    dt_txt: string;
    main: { temp: number };
    weather: { main: string; icon: string }[];
  }[];
}

// Current Weather
export async function getCurrentWeather(
  lat: number,
  lon: number
): Promise<WeatherData> {
  if (!API_KEY) {
    throw new Error("OpenWeatherMap API key is missing");
  }
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=fa`
  );
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
}

// Forecast
export async function getForecast(
  lat: number,
  lon: number
): Promise<ForecastData> {
  if (!API_KEY) {
    throw new Error("OpenWeatherMap API key is missing");
  }
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=fa`
  );
  if (!res.ok) throw new Error("Failed to fetch forecast");
  return res.json();
}
