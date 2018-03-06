const wundergroundKey = 'abd241a01af7a2a0';



let getWeather = () => {
  const url = `http://api.wunderground.com/api/${wundergroundKey}/conditions/q/CA/San_Francisco.json`;
  let data = '';
  fetch(url)
  .then((response) => response.json())
  .then(data => {
    document.write(data.current_observation);


  });
}

getWeather();
