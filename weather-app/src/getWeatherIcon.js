import ClearGif from './gifs/sunny.gif'
import RainGif  from './gifs/rain.gif'
import CloudGIf  from './gifs/partly-cloudy-day.gif'
import SnowGif  from './gifs/snowy.gif'
import StormGif  from './gifs/lightning.gif'

const getWeatherIcon = (code) => {
    switch(code){
        case 'Clear': return ClearGif
        case 'Rain': return RainGif
        case 'Clouds': return CloudGIf
        case 'Snow': return SnowGif
        case 'Thunderstorm': return StormGif
        default: return ''
    }
}

export default getWeatherIcon