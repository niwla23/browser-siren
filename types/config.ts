interface Siren {
  name: string
  mqttConnectionString: string
  soundUrl: string
}

interface Sirens {
  [index: string]: Siren
}

interface Config {
  sirens: Sirens
  prefix: string
}

export { Siren, Config }
