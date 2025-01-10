import type { Config } from 'tailwindcss'
// @ts-expect-error type
import primeui from 'tailwindcss-primeui'

export default <Partial<Config>>{
  darkMode: ['selector', '.dark-mode'],
  plugins: [primeui],
}
