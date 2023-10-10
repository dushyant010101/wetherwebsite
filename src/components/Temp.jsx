import React, { useEffect, useState } from "react";
import "./css/style.css";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Saharanpur");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c8e0f9b655a9679ec89eafce61443c69`;
      const responce = await fetch(url);
      const resjson = await responce.json();
      setCity(resjson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            value={search}
            type="search"
            className="inputfeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 style={{ fontSize: "2em", marginBottom:"10px" }}>
                <i
                  className="fa-solid fa-street-view"
                ></i>
                {search}
              </h2>
              <h1 style={{ fontSize: "1.5em", margin:"20px" }} >{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min:{city.temp_min}°Cel ║ Max:{city.temp_max}°Cel
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Temp;
