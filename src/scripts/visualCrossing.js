

const QueryLocation = async function (location) {


    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=AM3R2BG7ZE9S79L5AVUJ3NGR7&contentType=json`);

    if(!response.ok) return null;

    const data = await response.json();

    return data;
}



export {QueryLocation}