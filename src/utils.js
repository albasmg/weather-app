import snow from './assets/images/Snow.png';
import sleet from './assets/images/Sleet.png';
import hail from './assets/images/Hail.png';
import thunderstom from './assets/images/Thunderstorm.png';
import heavyRain from './assets/images/HeavyRain.png';
import lightRain from './assets/images/LightRain.png';
import shower from './assets/images/Shower.png';
import heavyCloud from './assets/images/HeavyCloud.png';
import lightCloud from './assets/images/LightCloud.png';
import clear from './assets/images/Clear.png';

export const mapWeatherStatesToImages = (state) => {
  const mapStates = {
    sn: snow,
    sl: sleet,
    h: hail,
    t: thunderstom,
    hr: heavyRain,
    lr: lightRain,
    s: shower,
    hc: heavyCloud,
    lc: lightCloud,
    c: clear,
  };

  return mapStates[state];
};
