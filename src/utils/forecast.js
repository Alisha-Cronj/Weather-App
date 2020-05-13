const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=d9e9509cb749b92dbf5759fa2f67d7c5&query=' +
    latitude +
    ',' +
    longitude +
    '&units-f';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ' It is currently ' +
          body.current.temperature +
          ' degress out. There is a ' +
          body.current.precip +
          ' % chance of rain.'
      );
    }
  });
};

module.exports = forecast;
