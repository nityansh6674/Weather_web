import { useState } from "react";
import OneDay from "./comp/one_day";
import SevenDay from "./comp/7_day";
import Search from "./comp/search";
import { getforecast, getWeather } from "./services/weatherApi";

const App = () => {

  const [, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const[forecast, setForecast] = useState(null)
const handleSearch = async (cityName) => {
  try {
    setCity(cityName);

    const data1 = await getWeather(cityName);
    const data2 = await getforecast(cityName)
    console.log(data1);
    console.log(data2)
    setWeather(data1);
    setForecast(data2)
  } catch (error) {
    console.error(error);
    alert("City not found!");
  }
};


  return (
    <div className="justify-center min-h-screen bg-gray-700 p-4 items-center w-full">
      <div className=" bg-gray-800 p-4 w-[99%] pr-8 flex flex-col">
        <h1 className="text-4xl self-center p-2 font-extrabold text-amber-50">WeatherWeb</h1></div>
      <Search onSearch={handleSearch} />
      <div className="flex ">
        <OneDay weather = {weather}/>
        <SevenDay forecast = {forecast} />
      </div>
    </div>
  );
};

export default App;