let weather = {
  apikey: "791a876d4a3e004d017beda9f9245b29",
  fetchWather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&lang=RO&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".oras").innerText = "Vremea in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temperatura").innerText = temp + " °C";
    document.querySelector(".descriere").innerText = description;
    document.querySelector(".umiditate").innerText =
      "Umiditate " + humidity + " %";
    document.querySelector(".vant").innerText =
      "Viteza vant: " + speed + " Km/h";
    document.querySelector(".vreme").classList.remove("loading");
  },
  search: function () {
    this.fetchWather(document.querySelector(".bara--cautare").value);
  },
};
document.querySelector(".cauta button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".bara--cautare")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });
weather.fetchWather("Suceava");
