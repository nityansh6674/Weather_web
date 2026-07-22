import "react";

const SevenDay = ({ forecast }) => {
  if (!forecast) {
    return (
      <div className="w-1/2 h-[68vh] bg-white rounded-3xl p-4 m-6 flex justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-500 text-center">
          Search a city to view the forecast
        </h2>
      </div>
    );
  }

  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="w-1/2 h-[68vh] bg-gray-300 rounded-3xl p-4 mt-6 overflow-y-auto">
      <h1 className="text-2xl font-bold text-center mb-5">Weather Forecast</h1>

      <div className="grid grid-cols-2 gap-4">
        {dailyForecast.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:scale-105 transition"
          >
            {/* Day */}
            <p className="font-bold text-lg">
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            {/* Weather Icon */}
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              className="w-16 h-16 my-2"
            />

            {/* Temperature */}
            <p className="text-2xl font-bold">{Math.round(item.main.temp)}°C</p>

            {/* Weather Condition */}
            <p className="text-gray-600">{item.weather[0].main}</p>

            {/* Chance of Rain */}
            <p className="text-blue-600 font-semibold">
              🌧 {Math.round(item.pop * 100)}%
            </p>

            {/* Humidity */}
            <p className="text-sm text-gray-500">💧 {item.main.humidity}%</p>

            {/* Wind Speed */}
            <p className="text-sm text-gray-500">💨 {item.wind.speed} km/h</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SevenDay;
