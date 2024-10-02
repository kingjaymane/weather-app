"use client";
import React from "react";
import Input from "./component/Input";
import { useState } from "react";
import Current from "./component/Current";
import WeekForcast from "./component/WeekForcast";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  // Use backticks for template literals
  const url = `http://api.weatherapi.com/v1/forecast.json?key=0ae91dfec7c946a4aa7110436240110&q=${location}&days=7&aqi=yes&alerts=yes`;


  
  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error fetching weather data");
        }
        const data = await response.json();
        setData(data);
        setLocation(""); // Clear the location input after search
        setError(""); // Reset any previous error messages
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === '')
  {
    content = (
      <div>
        <h2>
          Welcome to the Weather App.
        </h2>
      </div>
    )
  } else if (error !=""){
    content = (
      <div>
        <p>City Not found</p>
        <p>Enter Valid City</p>
      </div>
    )
  }else { 
    content = (
      <>
        <div>
          <Current data={data}/>
          <WeekForcast data={data}/>
        </div>
      </>
    )
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to bg-blue-300 h-screen">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">
            Weather App
          </h1>
        </div>
       {content}
      </div>
    </div>
  );
};

export default Home;
