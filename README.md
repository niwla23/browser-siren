# browser-siren
This is a siren system based on MQTT. You give it a config and it will play a sound and flash when it receives a MQTT message.
Useful for calling people or inform you when stuff goes wrong.

## Installation
Download the latest release, unpack it and serve it with a web browser of your choice. Alternatively there is a docker nginx image available
with the files built in.

## Configuration
All config is stored in config/config.yaml. You can edit it without having to rebuild the project.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
