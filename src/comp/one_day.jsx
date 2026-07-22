import "react";
import {
  Droplets,
  Wind,
  Thermometer,
  Gauge,
  Sunrise,
  Sunset,
  CloudRain,
  PersonStanding,
} from "lucide-react";

const OneDay = ({ weather, forecast }) => {
  if (!weather) {
    return (
      <div className="w-1/2 mt-3 p-2">
        <div className="bg-white rounded-3xl shadow-xl h-[68vh] flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-500">
            🔍 Search a city to view weather
          </h2>
        </div>
      </div>
    );
  }

  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const chanceOfRain = forecast?.list?.[0]?.pop
    ? Math.round(forecast.list[0].pop * 100)
    : 0;

  return (
    <div className="w-1/2 mt-3 p-2">
      <div className="bg-white rounded-3xl shadow-xl p-5 h-[68vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">📍 {weather.name}</h2>

            <p className="text-gray-500 mt-1">
              {new Date().toLocaleString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
              className="w-20 h-20"
            />

            <p className="capitalize font-semibold">
              {weather.weather[0].description}
            </p>
          </div>
        </div>

        {/* Temperature */}

        <div className="mt-5 text-center">
          <h1 className="text-6xl font-bold">
            {Math.round(weather.main.temp)}°C
          </h1>

          <h3 className="text-2xl font-semibold mt-2">
            {weather.weather[0].main}
          </h3>

          <p className="text-gray-500">
            Feels Like {Math.round(weather.main.feels_like)}°C
          </p>
        </div>

        {/* Details */}

        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="col-span-2 flex justify-between items-center bg-gray-100 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <PersonStanding size={18} />
              <span>Population</span>
            </div>
            
            <span className="font-semibold">
              {forecast?.city?.population
                ? forecast.city.population.toLocaleString()
                : "N/A"}
            </span>
          </div>
          <div className="flex justify-between items-center bg-gray-100 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Droplets size={18} />
              <span>Humidity</span>
            </div>

            <span className="font-semibold">{weather.main.humidity}%</span>
          </div>

          <div className="flex justify-between items-center bg-gray-100 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Wind size={18} />
              <span>Wind</span>
            </div>

            <span className="font-semibold">{weather.wind.speed} m/s</span>
          </div>

          <div className="flex justify-between items-center bg-gray-100 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Thermometer size={18} />
              <span>Feels Like</span>
            </div>

            <span className="font-semibold">
              {Math.round(weather.main.feels_like)}°C
            </span>
          </div>

          <div className="flex justify-between items-center bg-gray-100 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Gauge size={18} />
              <span>Pressure</span>
            </div>

            <span className="font-semibold">{weather.main.pressure} hPa</span>
          </div>

          <div className="flex justify-between items-center bg-gray-100 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <CloudRain size={18} />
              <span>Chance of Rain</span>
            </div>

            <span className="font-semibold">{chanceOfRain}%</span>
          </div>

          <div className="flex justify-between items-center bg-gray-100 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Sunrise size={18} />
              <span>Sunrise</span>
            </div>

            <span className="font-semibold">{sunrise}</span>
          </div>

          <div className="col-span-2 flex justify-between items-center bg-gray-100 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Sunset size={18} />
              <span>Sunset</span>
            </div>

            <span className="font-semibold">{sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneDay;
