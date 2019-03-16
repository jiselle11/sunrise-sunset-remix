//13.123379, -59.630356;

let request = new XMLHttpRequest();
let url = "https://api.sunrise-sunset.org/json?lat=13.123379&lng=-59.630356";
request.open("GET", url, true);
request.onload = function() {
  let data = JSON.parse(this.response);  
  
  let sunrise = document.getElementById('sunrise');
  let sunset = document.getElementById('sunset');
  
  if (request.status >= 200 && request.status < 400) {
      sunrise.textContent = convertToEST(data.results.sunrise);
      sunset.textContent = convertToEST(data.results.sunset)
      
      ;
  }
  
};

request.send();

function convertToEST(utc) {
    
    let utcHours = utc.substr(0, utc.indexOf(":"));
    let utcMinSec = utc.substr(utc.indexOf(":")+1);
    
    let est = parseInt(utcHours, 10) - 5;
    est += ":" + utcMinSec;
    
    return est;
}
