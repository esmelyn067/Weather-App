import React, { useState, useEffect } from 'react';

const ClimaActual = ({ ciudad }) => {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    const fetchClima = async () => {
      const API_KEY = 'b338ed44eb46acedd35f146a3bc20de9';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setClima(data);
    };

    fetchClima();
  }, [ciudad]);

  if (!clima) {
    return <div>Cargando...</div>;
  }

  const { main, weather, wind } = clima;
  const { temp, humidity } = main;
  const { temp: kelvinTemp } = main;
  const tempCelsius = kelvinTemp - 273.15; // Convert Kelvin to Celsius
  const { description } = weather[0];
  const { speed } = wind;

  return (
    <div>
      <h2>Clima en {ciudad}</h2>
      <p>Temperatura: {tempCelsius.toFixed(1)} °C</p>
      <p>Humedad: {humidity} %</p>
      <p>Descripción: {description}</p>
      <p>Velocidad del viento: {speed} m/s</p>
    </div>
  );
};

export default ClimaActual;
