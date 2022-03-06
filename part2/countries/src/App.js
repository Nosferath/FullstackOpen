import axios from "axios";
import { useState, useEffect } from "react";

const FindCountries = ({ setFilter }) => {
  const handleFilter = (event) => setFilter(event.target.value);
  return (
    <p>
      Find countries: <input onChange={handleFilter} />
    </p>
  );
};

const DisplayWeather = ({ country }) => {
  const city = country.capital;
  const cca3 = country.cca3;
  const [weather, setWeather] = useState({});
  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${cca3}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        console.log('weather', response.data)
        setWeather(response.data);
      })
  }, [city, cca3])
  if (Object.keys(weather).length === 0) {
    return (
      <div>
        <h3>Weather in {city} is unavailable</h3>
      </div>
    )
  }
  const weatherIconSrc = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const weatherAlt = weather.weather[0].description;
  const weatherDescription = weather.weather[0].main;
  return (
    <div>
      <h3>Weather in {city}</h3>
      <p>Temperature: {weather.main.temp}&deg;C</p>
      <figure>
        <img src={weatherIconSrc} alt={weatherAlt} />
        <figcaption>{weatherDescription}</figcaption>
      </figure>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  )
}

const DisplayOneCountry = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        <strong>Capital: </strong>
        {country.capital}
        <br />
        <strong>Area: </strong>
        {country.area}
        <br />
      </p>
      <h3>Languages:</h3>
      <ul>
        {Object.keys(country.languages).map((key) => {
          const language = country.languages[key];
          return <li key={language}>{language}</li>;
        })}
      </ul>
      <figure>
        <img src={country.flags["png"]} alt="" />
        <figcaption>Flag of {country.name.common}</figcaption>
      </figure>
      <DisplayWeather country={country} />
    </div>
  );
};

const CountryWithButton = ({ country }) => {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <p>
        {country.name.common}
        <button onClick={() => setStatus(!status)}>
          {status ? "hide" : "show"}
        </button>
      </p>
      {status ? <DisplayOneCountry country={country} /> : ""}
    </div>
  );
};

const DisplayCountries = ({ countries }) => {
  const nCountries = countries.length;
  if (nCountries === 0) {
    console.log("display countries: none");
    return <div>No matches found</div>;
  } else if (nCountries > 10) {
    console.log("display countries: too many");
    return <div>Too many matches, specify another filter</div>;
  } else if (nCountries > 1) {
    console.log("display countries:", countries);
    return (
      <>
        {countries.map((country) => (
          <CountryWithButton key={country.name.common} country={country} />
        ))}
      </>
    );
  } else {
    console.log("display countries:", countries);
    const country = countries[0];
    return <DisplayOneCountry country={country} />;
  }
};

const App = () => {
  console.log("initializing app");
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("starting effect");
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,capital,area,languages,flags,cca3"
      )
      .then((response) => {
        console.log("response received");
        setCountries(response.data);
      });
  }, []);

  const filteredCountries = countries.filter((country) => {
    const lowerCaseName = country.name.common.toLowerCase();
    return lowerCaseName.includes(filter.toLowerCase());
  });

  return (
    <div>
      <FindCountries setFilter={setFilter} />
      <DisplayCountries countries={filteredCountries} />
    </div>
  );
};

export default App;
