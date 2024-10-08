const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[0].textContent = `©️ ${currentYear} ⭐ Martin Kasike. Designer ⭐ Tanzania`;
footerParagraphs[1].textContent = `Last modified: ${lastModifiedDate}`;


function calculateWindChill(temperature, windSpeed, units) 
{
  if (units == "C") 
    if (temperature <= 20 && windSpeed >= 5.8)
    {
      return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    }
    else {
      return "25.3"
    }
  else if (tempUnit == "F")
  {
    if (temperature <=50 && windSpeed > 3)
    {
      return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    }
    else 
    {
      return "25.3"
    }
  }
  
}  


let temperatureCelsius = 27;
let windSpeedKmPerHour = 6.8;
let tempUnit = "C";

let windChill = calculateWindChill(temperatureCelsius, windSpeedKmPerHour, tempUnit);
let weatherSection = document.getElementById("windChill");
weatherSection.innerHTML = Math.round(windChill);