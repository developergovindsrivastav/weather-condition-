let cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Visakhapatnam",
  "Indore",
  "Thane",
  "Bhopal",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Coimbatore",
  "Agra",
  "Madurai",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Howrah",
  "Gwalior",
  "Jabalpur",
  "Vijayawada",
  "Jodhpur",
  "Raipur",
  "Kota",
  "Guwahati",
  "Chandigarh",
  "Solapur",
  "Hubli-Dharwad",
  "Bareilly",
  "Moradabad",
  "Mysore",
  "Gurgaon",
  "Aligarh",
  "Jalandhar",
  "Tiruchirappalli",
  "Bhubaneswar",
  "Salem",
  "Mira-Bhayandar",
  "Warangal",
  "Guntur",
  "Bhiwandi",
  "Saharanpur",
  "Gorakhpur",
  "Bikaner",
  "Amravati",
  "Noida",
  "Jamshedpur",
  "Bhilai",
  "Cuttack",
  "Firozabad",
  "Kochi",
  "Nellore",
  "Bhavnagar",
  "Dehradun",
  "Durgapur",
  "Asansol",
  "Rourkela",
  "Nanded",
  "Kolhapur",
  "Ajmer",
  "Akola",
  "Gulbarga",
  "Jamnagar",
  "Ujjain",
  "Loni",
  "Siliguri",
  "Jhansi",
  "Ulhasnagar",
  "Nellore",
  "Jammu",
  "Sangli-Miraj & Kupwad",
  "Belgaum",
  "Mangalore",
  "Ambattur",
  "Tirunelveli",
  "Malegaon",
  "Gaya",
  "Jalgaon",
  "Udaipur",
  "Maheshtala",
  "Davanagere",
  "Kozhikode",
  "Kurnool",
  "Rajpur Sonarpur",
  "Rajahmundry",
  "Bokaro Steel City",
  "South Dumdum",
  "Bellary",
  "Patiala",
  "Gopalpur",
  "Agartala",
  "Bhagalpur",
  "Muzaffarnagar",
  "Bhatpara",
  "Panihati",
  "Latur",
  "Dhule",
  "Tirupati",
  "Rohtak",
  "Korba",
  "Bhilwara",
  "Berhampur",
  "Muzaffarpur",
  "Ahmednagar",
  "Mathura",
  "Kollam",
  "Avadi",
  "Kadapa",
  "Anantapur",
  "Kamarhati",
  "Bilaspur",
  "Shahjahanpur",
  "Satara",
  "Bijapur",
  "Rampur",
  "Shimoga",
  "Chandrapur",
  "Junagadh",
  "Thrissur",
  "Alwar",
  "Bardhaman",
  "Kulti",
  "Nizamabad",
  "Parbhani",
  "Tumkur",
  "Khammam",
  "Ozhukarai",
  "Bihar Sharif",
  "Panipat",
  "Darbhanga",
  "Bally",
  "Aizawl",
  "Dewas",
  "Ichalkaranji",
  "Karnal",
  "Bathinda",
  "Jalna",
  "Eluru",
  "Barasat",
  "Kirari Suleman Nagar",
  "Purnia",
  "Satna",
  "Mau",
  "Sonipat",
  "Farrukhabad",
  "Sagar",
  "Rourkela",
  "Durg",
  "Imphal",
  "Ratlam",
  "Hapur",
  "Arrah",
  "Anantapur",
  "Karimnagar",
  "Etawah",
  "Ambernath",
  "Bharatpur",
  "Begusarai",
  "New Delhi",
  "Gandhidham",
  "Baranagar",
  "Tiruvottiyur",
  "Pondicherry",
  "Sikar",
  "Thoothukudi",
  "Rewa",
  "Mirzapur",
  "Raichur",
  "Pali",
  "Ramagundam",
  "Silchar",
  "Haridwar",
  "Vijayanagaram",
  "Tenali",
  "Nagercoil",
  "Sri Ganganagar",
  "Karawal Nagar",
  "Mango",
  "Thanjavur",
  "Bulandshahr",
  "Uluberia",
  "Katni",
  "Sambalpur",
  "Singrauli",
  "Nadiad",
  "Secunderabad",
  "Naihati",
  "Yamunanagar",
  "Bidar",
  "Pallavaram",
  "Bidhan Nagar",
  "Kharagpur",
  "Vellore",
  "Mahesana",
  "Sambhal",
  "Raiganj",
  "Sirsa",
  "Danapur",
  "Serampore",
  "Sultan Pur Majra",
  "Guna",
  "Jaunpur",
  "Panvel",
  "Shivpuri",
  "Surendranagar Dudhrej",
  "Unnao",
  "Machilipatnam",
  "Shimla",
  "Adoni",
  "Udupi",
  "Katihar",
  "Proddatur",
  "Mahbubnagar",
  "Hajipur",
  "Bhimavaram",
  "Ongole",
  "Deoghar",
  "Bharuch",
  "Haldia",
  "Kishanganj",
  "Osmanabad",
  "Dindigul",
  "Darjeeling",
];

var city = document.querySelector("#inputval");
const options = { method: "GET", headers: { accept: "application/json" } };
var valueof = document.querySelector("#valueof");
var btn = document.querySelector("#btnjarori");
var apikey = "dd877f73b170cbe46f0b46239a6197a8";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  dabba.style.display = "none";
  caliing()

});

   let caliing  =  async function apicall() {
    try {
      if (city.value !== "") {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}`
        );
        var weather = await data.json();
        
        cityshow.innerHTML = weather.name;
        valueof.innerHTML = weather.weather[0].description;

        if (valueof.innerHTML === "overcast clouds") {
          convert.style.backgroundColor = "red";
          valueof.style.color = "black";
        } else {
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
  }
var cityshow = document.querySelector("#city");
var temp = document.querySelector("#temp");
var coolbtn = document.querySelector("#coolbtn");
var warmbtn = document.querySelector("#warmbtn");
var convert = document.querySelector("#convertbtn");
var deg = document.querySelector("#deg");
var dabba = document.querySelector(".dabba");
var dabbaul = document.querySelector(".dabbaul");
var lival = document.querySelectorAll(".name");
var result = [];
var inputval = document.querySelector("#inputval").value;
city.addEventListener("keyup", function () {
  if(city.value == "") {
  dabba.style.display = "none";

  }
  else{

    dabba.style.display = "block";
  }
  if (city.value.length) {
    result = cities.filter((keyword) => {
      return keyword.toLowerCase().includes(city.value.toLowerCase());
    });
    display();

  }
});
function display() {
  const content = result.map((list) => {
    return "<li class = name onclick = copy(this)>" + list + "</li>";
  });
  dabbaul.innerHTML = content.join("");
}
function copy(list) {
  city.value = list.innerHTML;
  dabba.style.display = "none";
caliing() 
}
