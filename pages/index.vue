<template>
  <main class="grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
    <button
      v-for="(siren, siren_id) in config.sirens"
      :key="siren_id"
      class="bg-green-600 w-full h-64 p-4 roundend-lg"
      @click="$router.push(siren_id)"
    >
      <p class="text-xl text-white font-bold">{{ siren.name }}</p>
    </button>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import yaml from 'yaml'
import { Config } from '@/types/config'

export default Vue.extend({
  async asyncData({ $axios }) {
    const resp: string = await $axios.$get('/config.yaml')
    const config = yaml.parse(resp)
    return { config }
  },
  data() {
    return {
      config: null as Config | null,
    }
  },
})
</script>
