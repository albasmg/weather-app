const API_URL = 'https://www.metaweather.com/api/location';

export const getLocation = (city) =>
  fetch(`${API_URL}/search/?query=${city}`).then((response) => {
    return response.json();
  });

export const getWeatherLocation = (id) =>
  fetch(`${API_URL}/${id}`).then((response) => {
    return response.json();
  });
