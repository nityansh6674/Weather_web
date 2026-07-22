import "react";

const SevenDay = ({ forecast }) => {
  if (!forecast) {
    return (
      <div className="w-full lg:w-1/2">
        <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl min-h-[65vh] flex items-center justify-center shadow-2xl">
          <h2 className="text-2xl text-white font-semibold text-center px-6">
            📅 Search a city to view the forecast
          </h2>
        </div>
      </div>
    );
  }

  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="w-full lg:w-1/2">
      <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl min-h-[65vh] lg:h-[68vh] overflow-y-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          7 Day Forecast
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {dailyForecast.map((item, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-md rounded-2xl p-5 flex flex-col items-center border border-white/20 transition duration-300 hover:scale-105 hover:bg-white/25"
            >
              <p className="text-xl font-bold text-white">
                {new Date(item.dt_txt).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </p>

              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                alt={item.weather[0].description}
                className="w-20 h-20 my-3"
              />

              <p className="text-3xl font-black text-white">
                {Math.round(item.main.temp)}°C
              </p>

              <p className="capitalize text-white/90 font-medium mt-1">
                {item.weather[0].description}
              </p>

              <div className="w-full mt-4 space-y-2">
                <div className="flex justify-between text-white/90">
                  <span>💧 Humidity</span>
                  <span>{item.main.humidity}%</span>
                </div>

                <div className="flex justify-between text-white/90">
                  <span>💨 Wind</span>
                  <span>{item.wind.speed} m/s</span>
                </div>

                <div className="flex justify-between text-white/90">
                  <span>🌧 Rain</span>
                  <span>{Math.round(item.pop * 100)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SevenDay;