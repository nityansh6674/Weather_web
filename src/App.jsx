import { useState } from "react";
import OneDay from "./comp/one_day";
import SevenDay from "./comp/5_day";
import Search from "./comp/search";
import { getforecast, getWeather } from "./services/weatherApi";

const App = () => {
  const [, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (cityName) => {
    try {
      setCity(cityName);

      const data1 = await getWeather(cityName);
      const data2 = await getforecast(cityName);

      setWeather(data1);
      setForecast(data2);
    } catch (error) {
      console.error(error);
      alert("City not found!");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-400 via-blue-500 to-indigo-700 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6">
          <h1 className="text-center text-4xl md:text-5xl font-black tracking-wide text-white">
            🌤 WeatherWeb
          </h1>

          <Search onSearch={handleSearch} />

          <div className="mt-6 flex flex-col lg:flex-row gap-6">
            <OneDay weather={weather} forecast={forecast} />
            <SevenDay forecast={forecast} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;