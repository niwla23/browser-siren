module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      keyframes: {
        bgpulse: {
          '0%, 100%': { 'background-color': '#ff0000' },
          '50%': { 'background-color': '#ffee00' },
        },
      },
      animation: {
        'siren-light': 'pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        'bg-pulse': 'bgpulse 2s cubic-bezier(0.43, -0.95, 0.13, 1.96) infinite',
      },
    },
  },
}
