const API_KEY = 
const BASE_URL = 'http"//rapidapi.com/ajith/api/love-calculator'
	
	//"url": "http"//rapidapi.com/ajith/api/love-calculator"

//EventListeners
window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove)
    console.log(calculateLove)
}



//Functions
function calculateLove(){
    
    let yourName = document.getElementById('your-name').value
    let loversName = document.getElementById('lovers-name').value 
    


    if (yourName != "" && loversName != "") {
    let percentage = Math.floor(Math.random() * 100);
    document.getElementById("result-message").innerText = yourName + " and " + loversName + " chance of love: "
    document.getElementById("result-percentage").innerText = percentage.toString() + "%"

    if (percentage < 35) {
        alert("Can choose someone better!!")
    } else {
        alert("You have the perfect match!!")
    }
    }
}



const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2978f26e34msh5a5fc34c35208c3p18d3c1jsn110a71f21703",
		"X-RapidAPI-Host": "love-calculator.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});





    

