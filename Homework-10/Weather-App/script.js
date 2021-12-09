const week = document.querySelector("ul");
const currentTemp = document.querySelector(".weather-temp");
const currentTempDescription = document.querySelector(".weather-desc");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const getCoor = (coordonates) => {
  let lat;
  let lon;
  lat = coordonates.coords.latitude;
  lon = coordonates.coords.longitude;
  fetchApiData(lat, lon);
};

const fetchApiData = async (lat, lon) => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=40548cc5b12a46ee9418e263dd707583`
  );
  let data = await response.json();

  data.daily.forEach((item, i) => {
    buildDays(item, i);
  });
  populateData(data.current);
};

const buildDays = (item, i) => {
  let day = `<li class="weather-day">
      <i class="day-icon" data-feather="sun"></i>
      <span class="day-name">Day ${i + 1}</span>
      <span class="day-temp">${Math.floor(
        (item.temp.day - 32) * 0.5556
      )} C</span>
    </li>`;
  week.insertAdjacentHTML("beforeend", day);
};

const populateData = (data) => {
  currentTemp.innerHTML = ` ${Math.floor((data.temp - 32) * 0.5556)} C`;
  currentTempDescription.innerHTML = data.weather[0].main;
  feelsLike.innerHTML = `${Math.floor((data.feels_like - 32) * 0.5556)} C`;
  humidity.innerHTML = `${data.humidity} %`;
  wind.innerHTML = `${data.wind_speed} km/h`;
};

const errorCoor = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(getCoor, errorCoor, {
  maximumAge: 60000,
  timeout: 5000,
  enableHighAccuracy: true,
});
