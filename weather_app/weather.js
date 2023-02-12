const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08c7795a32mshe3a9c4179b4f08dp1fcf29jsnd641d1111616',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
 
let wind_container = document.getElementById('windspeed');
let temp_container = document.getElementById('temperature');
let humid_container = document.getElementById('humidity');
let search = document.getElementById('search');
let input = document.getElementById('input');


search.addEventListener('click', function()
{
    let val = input.value;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${val}`, options)
	.then(response => response.json())
	.then(response => {
        wind_container.innerHTML = `<p class="heading ">Wind &nbsp;Speed</p>
        <p class="content">${response["wind_speed"]}</p>`;
        console.log(response);

        temp_container.innerHTML = `<p class="heading ">Temperature</p>
        <p class="content">${response["temp"]}</p>`;

        humid_container.innerHTML = `<p class="heading ">Humidity</p>
        <p class="content">${response["humidity"]}</p>`;

        
        let utterance1 = new SpeechSynthesisUtterance(`${temp_container.innerText} degree celsius`);
        speechSynthesis.speak(utterance1);

        let utterance2 = new SpeechSynthesisUtterance(`${ wind_container.innerText} kilometer per hour`);
        speechSynthesis.speak(utterance2);

        let utterance3 = new SpeechSynthesisUtterance(`${humid_container.innerText} gram per metre cube`);
        speechSynthesis.speak(utterance3);
    })
	.catch(err => console.error(err));
})
