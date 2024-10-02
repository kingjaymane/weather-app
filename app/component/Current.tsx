import { getCurrentDate } from "../utils/currentDate";
import { IoLocationSharp } from "react-icons/io5";

interface CurrentProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_f: number;
    };
    location?: {
      name: string;
      region: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const currentDate = getCurrentDate();
  
  const weatherIcon = data.current?.condition.icon || "";
  const tempF = data.current?.temp_f?.toFixed() || "--";
  const conditionText = data.current?.condition.text || "N/A";
  const locationName = data.location?.name || "Unknown";
  const locationRegion = data.location?.region || "Unknown";

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
          <div>
            {weatherIcon && (
              <div>
                <img
                  className="w-[50px] object-cover"
                  src={weatherIcon}
                  alt={conditionText}
                />
              </div>
            )}
          </div>
          <p className="text-5xl text-white">
            {tempF}
            <span>°</span>
          </p>
          <span className="text-white">{conditionText}</span>
        </div>
      </div>
      <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
        <IoLocationSharp />
        <span>
          {locationName}, {locationRegion}
        </span>
      </div>
    </div>
  );
};

export default Current;
