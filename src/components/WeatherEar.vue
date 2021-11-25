<template>
  <div class="forecast" :class="{ focus: attention }">
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512">
      <title>Today's weather: {{ weather.temperature | fahrenheit }}&thinsp;°F and {{ weather.description }}</title>
      <g v-if="weather.description = 'Clear'">
        <path v-if="time == 'day'" fill="#1d1d1b" fill-rule="evenodd" d="M256 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224zm0 192a80 80 0 1 1 0-160 80 80 0 0 1 0 160zm0-224c9 0 16-7 16-16V64a16 16 0 0 0-32 0v32c0 9 7 16 16 16zm0 288c-9 0-16 7-16 16v32a16 16 0 0 0 32 0v-32c0-9-7-16-16-16zm124-246 23-22a16 16 0 1 0-23-23l-22 23a16 16 0 1 0 22 22zM132 358l-23 22a16 16 0 1 0 23 23l22-23a16 16 0 1 0-22-22zm-20-102c0-9-7-16-16-16H64a16 16 0 0 0 0 32h32c9 0 16-7 16-16zm336-16h-32a16 16 0 0 0 0 32h32a16 16 0 0 0 0-32zm-316-86a16 16 0 1 0 22-22l-22-23a16 16 0 1 0-23 23l23 22zm248 204a16 16 0 1 0-22 22l22 23a16 16 0 1 0 23-23l-23-22z"/>
        <path fill="#1d1d1b" d="M350 343a128 128 0 1 1-133-211 16 16 0 0 1 20 21 95 95 0 0 0 122 122c6-2 13-1 17 4 4 4 6 11 4 16-7 19-17 35-30 48zM191 185a96 96 0 1 0 143 127 127 127 0 0 1-134-134l-9 7z"/>
        <path v-if="time == 'night'" fill="#c4c4c4" fill-rule="evenodd" d="M248 264c-31-32-40-77-26-117a111 111 0 0 0-42 185 112 112 0 0 0 185-42c-40 14-85 5-117-26z" clip-rule="evenodd"/>
      </g>
      <g v-else-if="weather.description == 'Partly Cloudy'">
        <path v-if="time == 'day'" fill="#1d1d1b" d="M208 64c9 0 16-7 16-16V16a16 16 0 0 0-32 0v32c0 9 7 16 16 16zm124 42 23-22a16 16 0 1 0-23-23l-22 23a16 16 0 1 0 22 22zM16 224h32a16 16 0 0 0 0-32H16a16 16 0 0 0 0 32zm336-16c0 9 7 16 16 16h32a16 16 0 0 0 0-32h-32c-9 0-16 7-16 16zM84 106a16 16 0 1 0 22-22L84 61a16 16 0 1 0-23 23l23 22zm316 150-16 1c-17-23-39-40-64-51a112 112 0 0 0-224 2c0 17 4 34 12 48a112 112 0 1 0 44 217 158 158 0 0 0 208 0 112 112 0 1 0 40-217zM208 128c40 0 73 29 79 67a157 157 0 0 0-149 50c-6-11-10-23-10-37 0-44 36-80 80-80zm192 320c-17 0-33-5-46-15a127 127 0 0 1-196 0 80 80 0 1 1-24-142l8 3a130 130 0 0 1 143-66 129 129 0 0 1 84 66 80 80 0 0 1 111 74c0 44-36 80-80 80z"/>
        <path v-if="time == 'night'" fill="#1d1d1b" d="m435 262 14-11c13-14 24-30 30-48 2-6 1-13-4-17-4-4-11-6-16-4A95 95 0 0 1 337 60a16 16 0 0 0-21-20 127 127 0 0 0-80 153c-43 6-82 29-108 64l-16-1a112 112 0 1 0 40 217 158 158 0 0 0 208 0 112 112 0 0 0 152-105c0-49-32-91-77-106zM291 92l8-7a127 127 0 0 0 135 135 93 93 0 0 1-53 33c-28-35-68-57-112-60-12-34-5-74 22-101zm109 356c-17 0-33-5-46-15a127 127 0 0 1-196 0 80 80 0 1 1-15-139c20-39 59-67 106-69l7-1a127 127 0 0 1 110 63l4 7a80 80 0 0 1 110 74c0 44-36 80-80 80z"/>
      </g>
      <g v-else-if="weather.description = 'Fog/Mist'">
        <path v-if="time == 'day'" fill="#1d1d1b" d="M495 223h-82a144 144 0 0 0-262-64H47a16 16 0 0 0 0 32h89c-4 10-6 21-7 32H79a16 16 0 0 0 0 32h50c1 11 3 22 7 32H50c-11 0-19 7-19 16s8 16 19 16h101a144 144 0 0 0 240 0h37c11 0 19-7 19-16s-8-16-19-16h-22c4-10 6-21 7-32h82a16 16 0 0 0 0-32zm-325-32h101a16 16 0 0 0 0-32h-78a112 112 0 0 1 188 64H161c1-11 4-22 9-32zm101 160c-30 0-58-12-78-32h156c-20 20-48 32-78 32zm101-64H170c-5-10-8-21-9-32h220c-1 11-4 22-9 32z"/>
        <path v-if="time == 'night'" fill="#1d1d1b" d="M495 223h-82a144 144 0 0 0-262-64H47a16 16 0 0 0 0 32h89c-4 10-6 21-7 32H79a16 16 0 0 0 0 32h50c1 11 3 22 7 32H50c-11 0-19 7-19 16s8 16 19 16h101a144 144 0 0 0 240 0h37c11 0 19-7 19-16s-8-16-19-16h-22c4-10 6-21 7-32h82a16 16 0 0 0 0-32zm-325-32h101a16 16 0 0 0 0-32h-78a112 112 0 0 1 188 64H161c1-11 4-22 9-32zm101 160c-30 0-58-12-78-32h156c-20 20-48 32-78 32zm101-64H170c-5-10-8-21-9-32h220c-1 11-4 22-9 32z"/>
      </g>
      <g v-else-if="weather.description = 'Rain'">
        <path fill="#1d1d1b" d="m400 64-16 1a159 159 0 0 0-256 0l-16-1a112 112 0 1 0 40 217 158 158 0 0 0 208 0 112 112 0 1 0 40-217zm0 192c-17 0-33-5-46-15a127 127 0 0 1-196 0 80 80 0 1 1-15-139 127 127 0 0 1 227 0 80 80 0 0 1 110 74c0 44-36 80-80 80zM225 480a32 32 0 1 0 64 0c0-18-32-64-32-64s-32 46-32 64zm127-32a32 32 0 1 0 64 0c0-18-32-64-32-64s-32 46-32 64zM96 384a32 32 0 1 0 64 0c0-18-32-64-32-64s-32 46-32 64z"/>
      </g>
      <g v-else>
        <path fill="#1d1d1b" d="M350 343a128 128 0 1 1-133-211 16 16 0 0 1 20 21 95 95 0 0 0 122 122c6-2 13-1 17 4 4 4 6 11 4 16-7 19-17 35-30 48zM191 185a96 96 0 1 0 143 127 127 127 0 0 1-134-134l-9 7z"/>
      </g>
    </svg>
    <span class="current" v-show="weather.temperature">{{ weather.temperature | fahrenheit | integer }}&thinsp;<abbr title="degrees Fahrenheit">&deg;F</abbr></span>
    <span class="range">{{ weather.high | fahrenheit | integer }}&thinsp;&deg; <span class="low" v-show="weather.low">{{ weather.low | fahrenheit }}&deg;</span></span>
  </div>
</template>

<script>
import axios from 'axios'
import SunCalc from 'suncalc'

export default {
  data () {
    return {
      timer: '',
      midnight: null,
      sunrise: null,
      sunset: null,
      time: null,
      weather: {
        description: null,
        temperature: null,
        high: null,
        low: null
      },
      weather_types: [
        "Clear",
        "Partly Cloudy",
        "Fog/Mist"
      ]
    }
  },
  props: {
    attention: Boolean
  },
  created () {
    this.setSunrise();
    this.setSunset();
    this.minutesToMidnight();
    this.timer = setInterval(function() {
      this.getWeather()
      this.minutesToMidnight()
    }.bind(this), 300000); // 1000ms * 60 * 5
  },
  beforeMount () {
    this.setPeriod()
  },
  mounted () {
    this.getWeather()
    this.getForecast()
  },
  watch: {
    attention: function (val, oldVal) {
      if ( val === true ) {
        this.setPeriod()
        this.getWeather()
      }
    }
  },
  methods: {
    minutesToMidnight () {
      let time = new Date();
      const midnight = new Date().setHours( 24, 0, 0, 0 );
      const minToMidnight = ( midnight - time.getTime() ) / 1000 / 60;
      this.midnight = minToMidnight;
      if ( 1440 > minToMidnight > 1435 ) {
        this.setSunrise()
        this.setSunset()
        this.getForecast()
      }
    },
    setPeriod () {
      let d = new Date()
      if ( this.sunset >= d.getTime() > this.sunrise ) {
        return this.time = 'day'
      } else {
        return this.time = 'night'
      }
    },
    setSunrise: function () {
      // get today's sunlight times for London
      var times = SunCalc.getTimes(new Date(), 34.125278, -118.398889);
      // format sunrise time from the Date Object
      var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();

      this.sunrise = sunriseStr;
      return sunriseStr;
    },
    setSunset: function () {
      // get today's sunlight times for London
      var times = SunCalc.getTimes(new Date(), 34.125278, -118.398889);
      // format sunrise time from the Date Object
      var sunsetStr = times.sunset.getHours() + ':' + times.sunset.getMinutes();

      this.sunset = sunsetStr;
      return sunsetStr;
    },
    async getWeather () {
      try {
        const results = await axios.get(
          'https://api.weather.gov/stations/ksmo/observations/latest'
        )

        this.weather.description = results.data.properties.textDescription
        if ( results.data.properties.temperature.value != null ) {
          this.weather.temperature = results.data.properties.temperature.value
        } else if ( results.data.properties.temperature.value === null && this.weather.temperature !== null ) {
          return
        } else {
          this.weather.temperature = -160/9
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getForecast () {
      try {
        const results = await axios.get(
          'https://api.weather.gov/gridpoints/LOX/149,48'
        )

        this.weather.high = results.data.properties.maxTemperature.values[0].value
        this.weather.low = results.data.properties.minTemperature.values[0].value
      } catch (error) {
        console.log(error)
      }
    },
    cancelAutoUpdate () {
      clearInterval(this.timer);
    }
  },
  beforeDestroy () {
    this.cancelAutoUpdate();
  },
  filters: {
    fahrenheit: function ( value ) {
      if ( !value ) return ''
      return ( value * 1.8 ) + 32
    },
    integer: function ( value ) {
      if ( !value ) return ''
      return Math.round( value )
    }
  }
}
</script>

<style lang="scss" scoped>
.forecast {
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: justify;
  justify-content: space-between;
  max-width: 112px;
  font-size: 0.625rem;
  color: #121212;
}

.current {
  font-weight: bold;
  font-size: 0.8125rem;
}

.low {
  margin-left: 2px;
  color: rgb(153, 153, 153);
}
</style>
