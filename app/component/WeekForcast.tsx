import React from "react";

interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_f: number;
    mintemp_f: number;
  };
}

interface WeekForecastProps {
  data: {
    forecast?: {
      forecastday?: DayForecast[];
    };
  };
}

const WeekForcast = ({ data }: WeekForecastProps) => {
  const forecastDays = data.forecast?.forecastday || []; 

  return (
    <div className="grid grid-cols-7 gap-8 w-full p-4"> 
      {forecastDays.length > 0 ? (
        forecastDays.map((day, index) => (
          <div
            key={index}
            className="bg-white/40 p-4 text-center rounded-lg flex flex-col items-center"
          >
            <p>{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <p>H {day.day.maxtemp_f.toFixed()}°</p>
            <p>L {day.day.mintemp_f.toFixed()}°</p>
          </div>
        ))
      ) : (
        <div className="text-white">No forecast data available</div>
      )}
    </div>
  );
};

export default WeekForcast;
