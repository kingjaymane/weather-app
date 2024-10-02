import React from "react";


interface DayForecast{
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_f:number;
    mintemp_f:number;
  };
}

interface WeekForecastProps {
  data: {
    forecast: {
      forecastday: DayForecast[];
    };
  };
}


const WeekForcast = ({ data }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-7 gap-8 w-full p-4"> {/* Added padding to the grid container */}
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="bg-white/40 p-4 text-center rounded-lg flex flex-col items-center"
        >{/* Added padding inside the day boxes */}
          <p>{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}</p>
          <img src={day.day.condition.icon} alt="" />
          <p>H {day.day.maxtemp_f.toFixed()}°</p>
          <p>L {day.day.mintemp_f.toFixed()}°</p>
        </div>
      ))}
    </div>
  );
};

export default WeekForcast;
