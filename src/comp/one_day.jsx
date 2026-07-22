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
      <div className="w-full lg:w-1/2">
        <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl min-h-[65vh] flex items-center justify-center shadow-2xl">
          <h2 className="text-2xl text-white font-semibold text-center px-6">
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
    <div className="w-full lg:w-1/2">
      <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl min-h-[65vh] lg:h-[68vh] overflow-y-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">
              📍 {weather.name}
            </h2>

            <p className="text-white/80 mt-2">
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
              className="w-28 h-28 drop-shadow-xl"
            />

            <p className="capitalize text-white font-semibold">
              {weather.weather[0].description}
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <h1 className="text-6xl font-black text-white">
            {Math.round(weather.main.temp)}°
          </h1>

          <p className="text-2xl font-semibold text-white mt-2">
            {weather.weather[0].main}
          </p>

          <p className="text-white/80">
            Feels Like {Math.round(weather.main.feels_like)}°C
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

          <div className="sm:col-span-2 bg-white/15 rounded-2xl p-4 flex justify-between items-center">
            <div className="flex gap-2 items-center text-white">
              <PersonStanding size={18} />
              Population
            </div>

            <span className="text-white font-bold">
              {forecast?.city?.population
                ? forecast.city.population.toLocaleString()
                : "N/A"}
            </span>
          </div>

          {[
            {
              icon: <Droplets size={18} />,
              label: "Humidity",
              value: `${weather.main.humidity}%`,
            },
            {
              icon: <Wind size={18} />,
              label: "Wind",
              value: `${weather.wind.speed} m/s`,
            },
            {
              icon: <Thermometer size={18} />,
              label: "Feels Like",
              value: `${Math.round(weather.main.feels_like)}°C`,
            },
            {
              icon: <Gauge size={18} />,
              label: "Pressure",
              value: `${weather.main.pressure} hPa`,
            },
            {
              icon: <CloudRain size={18} />,
              label: "Rain",
              value: `${chanceOfRain}%`,
            },
            {
              icon: <Sunrise size={18} />,
              label: "Sunrise",
              value: sunrise,
            },
            {
              icon: <Sunset size={18} />,
              label: "Sunset",
              value: sunset,
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${
                item.label === "Sunset" ? "sm:col-span-2" : ""
              } bg-white/15 rounded-2xl p-4 flex justify-between items-center`}
            >
              <div className="flex gap-2 items-center text-white">
                {item.icon}
                {item.label}
              </div>

              <span className="text-white font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OneDay;