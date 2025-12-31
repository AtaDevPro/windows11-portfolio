"use client";

import { useState, useEffect } from "react";
import { getUserLocation } from "@/lib/api/geolocation";
import { getCurrentWeather, getForecast } from "@/lib/api/weather";

interface WeatherMain {
  temp: number;
  feels_like: number;
  humidity: number;
}

interface WeatherItem {
  main: string;
  description?: string;
  icon: string;
}

interface WeatherSys {
  country: string;
}

interface CurrentWeather {
  name: string;
  main: WeatherMain;
  weather: WeatherItem[];
  sys: WeatherSys;
}

interface ForecastItem {
  main: { temp: number };
  weather: WeatherItem[];
  dt_txt?: string;
}

const weatherIcons: Record<string, string> = {
  "01d": "☀️",
  "01n": "🌙",
  "02d": "⛅",
  "02n": "⛅",
  "03d": "☁️",
  "03n": "☁️",
  "04d": "☁️",
  "04n": "☁️",
  "09d": "🌧️",
  "09n": "🌧️",
  "10d": "🌦️",
  "10n": "🌦️",
  "11d": "⛈️",
  "11n": "⛈️",
  "13d": "❄️",
  "13n": "❄️",
  "50d": "🌫️",
  "50n": "🌫️",
};

/**
 * A component that displays the current weather and forecast for the user's location.
 * It fetches the user's location and uses the OpenWeatherMap API to get the current weather and forecast.
 * The component displays the current weather, forecast for the next 3 days, and an error message if there is an error.
 *
 * @return A JSX element that displays the current weather and forecast.
 */
export default function WeatherWidget() {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUserLocation()
      .then(({ lat, lon }) => {
        Promise.all([getCurrentWeather(lat, lon), getForecast(lat, lon)])
          .then(([current, forecastData]) => {
            setWeather(current);
            const daily = forecastData.list
              .filter((item: ForecastItem, index: number) => index % 8 === 0)
              .slice(0, 3);
            setForecast(daily);
            setLoading(false);
          })
          .catch(() => {
            setError("Cant load forecast");
            setLoading(false);
          });
      })
      .catch(() => {
        setError("Please enable location");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white/10 rounded-2xl p-6 animate-pulse">
        <div className="h-8 w-32 bg-white/20 rounded mb-4" />
        <div className="h-16 w-24 bg-white/20 rounded" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white/10 rounded-2xl p-6 text-white text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white/10 rounded-2xl p-6 text-white ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">
          {weather!.name}, {weather!.sys.country}
        </h3>
        <span className="text-4xl">
          {weatherIcons[weather!.weather[0].icon] || "🌤️"}
        </span>
      </div>

      <div className="text-5xl font-bold mb-2">
        {Math.round(weather!.main.temp)}°
      </div>

      <div className="text-white/80 mb-6">
        {weather!.weather[0].description}
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        {forecast.map((day, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-3">
            <div className="text-sm opacity-80">
              {i === 0 ? "tomorrow" : i === 1 ? "2 days later" : "3 days later"}
            </div>
            <div className="text-2xl my-2">
              {weatherIcons[day.weather[0].icon] || "🌤️"}
            </div>
            <div className="text-lg font-medium">
              {Math.round(day.main.temp)}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
