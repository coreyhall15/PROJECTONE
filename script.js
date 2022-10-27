const API_KEY = "2978f26e34msh5a5fc34c35208c3p18d3c1jsn110a71f21703"
const BASE_URL = 'http"//rapidapi.com/ajith/api/love-calculator'
	
	//"url": "http"//rapidapi.com/ajith/api/love-calculator"

//Event Listeners
window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove)
    console.log(calculateLove)

//$.ajax(settings).done(function (response) {
//	console.log(response);
//});

//Functions
function calculateLove(){
    
    let yourName = document.getElementById("your-name").value
    let loversName = document.getElementById("lovers-name").value 
    //let getPercentage = document.getElementById("getpercentage").value

    if (yourName != "" && loversName != "") {
    let percentage = Math.floor(Math.random() * 100);
    document.getElementById("result-message").innerText = yourName + " and " + loversName + " chance of love: "
    document.getElementById("result-percentage").innerText = percentage.toString() + "%"
}
}
function getData() {
    $.ajax(BASE_URL + 'q=Alice&fname=John=' + API_KEY)
    .then(function(data) {
        console.log('Data:', data)
    }, function(error){
        console.log('Error: ', error)
    })
}








    
}
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John");
xhr.setRequestHeader("X-RapidAPI-Key", "2978f26e34msh5a5fc34c35208c3p18d3c1jsn110a71f21703");
xhr.setRequestHeader("X-RapidAPI-Host", "love-calculator.p.rapidapi.com");

xhr.send(data);
