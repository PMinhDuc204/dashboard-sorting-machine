import tailwindcssPrimeui from 'tailwindcss-primeui'

export default {
  plugins: {
    '@tailwindcss/postcss': {
      plugins: [tailwindcssPrimeui],
    },
  },
}
