//Firsst weather api call
import axios from "axios";

const API_KEY = "c07df09b111233bfe983f376c48a9af6";

export const getWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};

// second forecast api call


export const getforecast = async (city) => {
  const response = await axios.get (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  return response.data;
}