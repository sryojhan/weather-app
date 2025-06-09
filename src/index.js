import "./styles.css"

import { QueryLocation } from "./scripts/visualCrossing";



const temperature = document.querySelector('.temperature');
const temperatureRange = document.querySelector('.temperature-range');
const location = document.querySelector('.location');
const weather = document.querySelector('.weather');



const UnpackdData = async function (queryLocation){
    
    const data = await QueryLocation(queryLocation);
    console.log(data);

    temperature.textContent = `${data.currentConditions.temp}°C`;

    temperatureRange.textContent = `${data.days[0].tempmin}° - ${data.days[0].tempmax}°`;

    location.textContent = data.resolvedAddress;

    weather.textContent = data.currentConditions.conditions;
}



const locationQuery = document.querySelector('#location-query');

const submitButton = document.querySelector('#submit-query');


const UpdatePage = function(){

    UnpackdData(locationQuery.value);
}

locationQuery.addEventListener('keydown', (e)=>{

    if(e.key === "Enter"){

        UpdatePage();
        locationQuery.blur();
    }

});

locationQuery.addEventListener('submit', ()=>{

    UpdatePage();
});

submitButton.addEventListener('click', ()=>{

    UpdatePage();
});


