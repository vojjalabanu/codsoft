let weather = {
    apiKey: "6009f59406d89f705f3f113896692ce9",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data,city));
        
    },
    displayWeather: function (data,city) {
      console.log(data);
      // const { name } = data;
      for(let i=1;i<=5;i++){
      let { icon, description } = data.list[i].weather[0];
      let { temp, humidity } = data.list[i].main;
      let { speed } = data.list[i].wind;
      let selector = `.card${i} .temp`;
      let selector1 = `.card${i} .description`;
      let selector3 = `.card${i} .humidity`;
      let selector4 = `.card${i} .wind`;
      let selector5 = `.card${i} .icon`;
      document.querySelector(".city").innerText = "Weather in " + city;
      document.querySelector(selector5).src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(selector1).innerText = description;
      document.querySelector(selector).innerText = temp + "°C";
      document.querySelector(selector3).innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(selector4).innerText =
        "Wind speed: " + Math.round(speed*3.6) + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      }
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + city + ")";
        const d=new Date();
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        function checkday(day){
          if(day+d.getDay()>6){
            return day+d.getDay()-7;
          }
          return day+d.getDay();
        }
        for(let i=0;i<5;i++){
            let dayselector=`.day${i+2}`;
            document.querySelector(dayselector).innerHTML=weekday[checkday(i+1)];
        }
      
    },
    search: function () {
    
      this.fetchWeather(document.querySelector(".search-bar").value);
      
    },
  };
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
 
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  weather.fetchWeather("delhi");
