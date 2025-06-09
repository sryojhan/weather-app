import "./styles.css"

import { QueryLocation } from "./scripts/visualCrossing";



const temperature = document.querySelector('.temperature');
const temperatureRange = document.querySelector('.temperature-range');
const location = document.querySelector('.location');
const weather = document.querySelector('.weather');
const icon = document.querySelector('#icon');



document.addEventListener('DOMContentLoaded', () => {


    setTimeout(() => {

        document.body.classList.add('transition');
    }, 1000);
})


const UnpackdData = async function (queryLocation) {

    const data = await QueryLocation(queryLocation);
    console.log(data);

    temperature.textContent = `${data.currentConditions.temp}°`;

    temperatureRange.textContent = `${data.days[0].tempmin}° - ${data.days[0].tempmax}°`;

    location.textContent = data.resolvedAddress;

    weather.textContent = data.currentConditions.conditions;

    import(`./images/Icons/1st Set - Monochrome/${data.currentConditions.icon}.svg`).then((img) => {

        icon.src = img.default;
    })


    ChooseBodyTheme(data.currentConditions.icon);
}


const ChooseBodyTheme = function (theme) {


    switch (theme) {
        case 'overcast':
            theme = 'cloudy';
            break;
        case 'thunder':
            theme = 'rain';
            break;
        case 'showers':
            theme = 'rain';
            break;
        case 'fog':
            theme = 'snow';
            break;
        case 'wind':
            theme = 'snow';
            break;
    }


    const last = document.querySelector('.visible-background');

    if (last)
        last.classList.remove('visible-background');

    document.querySelector(`.${theme}`).classList.add('visible-background');


    document.body.classList.remove('white-text');
    if(theme !== 'snow'){

        document.body.classList.add('white-text');
    }

}



const locationQuery = document.querySelector('#location-query');

const submitButton = document.querySelector('#submit-query');


const UpdatePage = function () {


    UnpackdData(locationQuery.value);
    locationQuery.value = "";
}

locationQuery.addEventListener('keydown', (e) => {

    if (e.key === "Enter") {

        UpdatePage();
        locationQuery.blur();
    }

});

locationQuery.addEventListener('focus', () => {

    //document.body.classList.remove('visible-background');
});

locationQuery.addEventListener('submit', () => {

    UpdatePage();
});

submitButton.addEventListener('click', () => {

    UpdatePage();
});


