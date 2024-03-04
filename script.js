var city = document.querySelector("#inputval");
const options = { method: "GET", headers: { accept: "application/json" } };
var valueof = document.querySelector("#valueof")
var btn = document.querySelector("#btnjarori");
var apikey = "dd877f73b170cbe46f0b46239a6197a8";

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    if (city.value !== "") {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}`
      );
      var weather = await data.json();
      console.log(weather.weather[0].description);
      cityshow.innerHTML = weather.name;
      valueof.innerHTML = weather.weather[0].description;
      
      if(valueof.innerHTML === "overcast clouds"){
        convert.style.backgroundColor = "red";
        valueof.style.color = "black";
      }
      else{
        convert.style.backgroundColor = "";
      }
      temp.innerHTML = parseInt(weather.main.temp) - 273;
      if (temp.innerHTML > 25) {
        warmbtn.style.backgroundColor = "red";
      } else {
        coolbtn.style.backgroundColor = "#2b517a";
      }
    } else {
      alert("please enter your city name");
    }
  } catch (error) {
    alert(weather.message);
  }
});
var cityshow = document.querySelector("#city");
var temp = document.querySelector("#temp");
var coolbtn = document.querySelector("#coolbtn");
var warmbtn = document.querySelector("#warmbtn");
var convert = document.querySelector("#convertbtn");
var deg = document.querySelector("#deg");








// var  throttle  = _.debounce(()=>{
//   if (temp.innerHTML !== "") {
//     var f = (temp.innerHTML * 9) / 5 + 32;
//     deg.innerHTML = "°F";
//     temp.innerHTML = f;
//   }else{
//     alert("firstly enter your city")
//   }
// },400)




