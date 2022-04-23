<template>
  <div
    class="bg-green-600 w-full h-full grid place-items-center"
    :class="{ 'animate-bg-pulse': alarmOn }"
  >
    <main class="p-4 rounded-lg w-4/6 md:w-2/6">
      <svg
        version="1.1"
        viewBox="0 0 331.79 375.68"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="n"
            x1="189.25"
            x2="404.57"
            y1="267.88"
            y2="267.88"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#c20101" offset="0" />
            <stop stop-color="#ef4343" offset=".25" />
            <stop stop-color="#df4141" offset=".5" />
            <stop stop-color="#c90000" offset="1" />
          </linearGradient>
          <linearGradient
            id="m"
            x1="181.9"
            x2="409.78"
            y1="416.01"
            y2="414.58"
            gradientTransform="matrix(1 0 0 .74865 0 87.154)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop stop-color="#242424" offset=".125" />
            <stop offset=".25" />
            <stop stop-color="#242424" offset=".5" />
            <stop offset="1" />
          </linearGradient>
          <radialGradient
            id="o"
            cx="293.95"
            cy="162.92"
            r="42.926"
            gradientTransform="matrix(1 0 0 .25874 0 120.77)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#a00" offset="0" />
            <stop stop-color="#a00" stop-opacity="0" offset="1" />
          </radialGradient>
          <filter id="i" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="1.8887245" />
          </filter>
          <filter id="j" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="4.1120319" />
          </filter>
          <radialGradient
            id="p"
            cx="303.21"
            cy="280.73"
            r="40.604"
            gradientTransform="matrix(1 0 0 1.549 0 -154.13)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#faa" offset="0" />
            <stop stop-color="#faa" stop-opacity="0" offset="1" />
          </radialGradient>
          <filter id="k" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="6.804775" />
          </filter>
          <filter
            id="l"
            x="-.019695"
            y="-.1222"
            width="1.0394"
            height="1.2444"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur stdDeviation="1.3481196" />
          </filter>
        </defs>
        <g transform="translate(-125.04 -88.981)">
          <path
            d="m297.21 142.35c-35.503-0.71229-80.155 4.4045-83.643 30.732l-23.812 179.75c1e-3 0.0103-1e-3 0.0209 0 0.0312 2.5016 22.599 49.517 40.594 107.16 40.594 57.77 0 104.85-18.08 107.16-40.75l-21.938-176.78c-2.6962-21.727-44.106-32.757-84.92-33.576z"
            :fill="capColor"
          />
          <path
            transform="matrix(.95649 0 0 .98661 11.657 4.5982)"
            d="m297.21 142.35c-35.503-0.71229-80.155 4.4045-83.643 30.732l-23.812 179.75c1e-3 0.0103-1e-3 0.0209 0 0.0312 2.5016 22.599 49.517 40.594 107.16 40.594 57.77 0 104.85-18.08 107.16-40.75l-21.938-176.78c-2.6962-21.727-44.106-32.757-84.92-33.576z"
            fill="none"
            filter="url(#j)"
            stroke="#500"
            stroke-opacity=".46275"
            stroke-width="4.7"
          />

          <!-- bottom -->
          <path
            d="m189.68 346.74c-4.1319 0.46332-7.2812 3.1137-7.2812 6.3401v75.403c40.148 31.788 191.04 29.492 229.03 0v-75.403c0-3.2264-3.1493-5.8768-7.2812-6.3401-1.0558 17.306-48.669 31.233-107.25 31.233s-106.16-13.926-107.22-31.233z"
            fill="url(#m)"
            stroke="#333"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.2979"
          />
          <path
            transform="translate(-6.3037 -.71429)"
            d="m339.29 280.73c0 32.234-16.15 58.365-36.071 58.365-19.922 0-36.071-26.131-36.071-58.365s16.15-58.365 36.071-58.365c19.922 0 36.071 26.131 36.071 58.365z"
            fill="url(#p)"
            filter="url(#i)"
            opacity=".33"
          />
          <path
            d="m336.38 162.92c0 5.8579-18.995 10.607-42.426 10.607s-42.426-4.7487-42.426-10.607c0-5.8579 18.995-10.607 42.426-10.607s42.426 4.7487 42.426 10.607z"
            fill="url(#o)"
            opacity=".34409"
          />
          <path
            v-if="alarmOn"
            class="animate-siren-light"
            transform="matrix(1.3303 0 0 1.3303 -54.357 -32.944)"
            d="m335.71 289.51-62.34-55.447 37.501 74.527-43.227-71.358 13.868 82.27-20.274-80.93-10.997 82.702 4.4815-83.31-34.886 75.787 28.838-78.288-55.674 62.137 50.633-66.309-71.516 42.966 67.928-48.439-81.003 19.977 79.188-26.265-83.293-4.7864 83.412-1.7568-78.182-29.125 80.224 22.907-66.124-50.875 69.908 45.536-48.19-68.105 53.38 64.119-25.975-79.284 32.109 77.004-1.4515-83.418 7.9852 83.047 23.201-80.14-16.848 81.711 45.792-69.741-40.185 73.115 64.314-53.145-59.95 58.022 77.121-31.827-74.389 37.774 83.076-7.6812-82.218 14.169 81.649 17.147-82.742-10.695 72.968 40.452-75.914-34.608z"
            fill="#faa"
            filter="url(#k)"
            opacity=".9"
          />
          <path
            transform="matrix(.94571 0 0 1 16.647 2.0203)"
            d="m215 161.12c0.3051 13.868 36.696 25.672 81.719 26.438 45.36 0.77088 82.325-9.9664 82.562-23.969 0.0141-0.83139-0.10404-1.6536-0.34375-2.4688l-1.1964 0.17857c0.23907 0.7811 1.5e-4 1.3992-0.0134 2.1964-0.21956 12.919-39.127 22.805-80.978 22.094-41.615-0.70723-80.182-12.358-80.344-24.469z"
            fill="#faa"
            filter="url(#l)"
            opacity=".8172"
          />
        </g>
      </svg>
      <p class="text-center mt-4">{{ sirenConfig ? sirenConfig.name : '' }}</p>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mqtt from 'mqtt'
import yaml from 'yaml'
import { Config } from '@/types/config'

const alarmSuffix = 'alarm'
const availabilitySuffix = 'available'

export default Vue.extend({
  async asyncData({ $axios }) {
    const resp: string = await $axios.$get('/config.yaml')
    const config = yaml.parse(resp)
    return { config }
  },
  data: () => {
    return {
      client: null as null | mqtt.MqttClient,
      alarmOn: false,
      alarmPlayer: new Audio('/sound/alarm.mp3') as HTMLAudioElement,
      config: null as null | Config,
    }
  },
  computed: {
    availabilityTopic() {
      return `${this.config?.prefix}/${this.$route.params.id}/${availabilitySuffix}`
    },
    alarmTopic() {
      return `${this.config?.prefix}/${this.$route.params.id}/${alarmSuffix}`
    },
    capColor() {
      if (this.alarmOn) {
        return 'url(#n)'
      } else {
        return 'rgba(30,0,0,0.7)'
      }
    },
    deviceId() {
      return this.$route.params.id
    },
    sirenConfig() {
      if (this.config == null) {
        return null
      }
      return this.config.sirens[this.$route.params.id]
    },
  },
  watch: {
    alarmOn() {
      this.alarmPlayer.currentTime = 0
      if (this.alarmOn) {
        this.alarmPlayer.play()
      } else {
        this.alarmPlayer.pause()
      }
    },
  },
  async mounted() {
    if (!this.sirenConfig) {
      await this.$swal('Not found', 'No siren with that name found', 'error')
      this.$router.push('/')
      return
    }

    await this.$swal('Please press ok so this app can play sound')

    this.alarmPlayer = new Audio(this.sirenConfig?.soundUrl)

    this.client = mqtt.connect(this.sirenConfig.mqttConnectionString, {
      will: {
        topic: this.availabilityTopic,
        payload: 'offline',
        retain: true,
        qos: 1,
      },
    })
    this.client.subscribe(this.alarmTopic)
    this.client.on('message', this.handleMessage)
    this.client.publish(this.availabilityTopic, 'online', {
      qos: 1,
      retain: true,
    })

    this.alarmPlayer.load()
    this.alarmPlayer.loop = true
    navigator.mediaSession.setActionHandler('play', function () {}) // @ts-ignore
    navigator.mediaSession.setActionHandler('pause', function () {}) // @ts-ignore
    navigator.mediaSession.setActionHandler('stop', function () {}) // @ts-ignore
  },
  beforeDestroy() {
    this.alarmPlayer.pause()
  },
  methods: {
    handleMessage(topic: string, message: Buffer) {
      if (topic === this.alarmTopic) {
        this.alarmOn = message.toString().toLowerCase() === 'on'
      }
    },
  },
})
</script>
