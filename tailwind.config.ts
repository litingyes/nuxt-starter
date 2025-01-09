import type { Config } from 'tailwindcss'
import { addDynamicIconSelectors } from '@iconify/tailwind'

export default <Partial<Config>>{
  plugins: [
    addDynamicIconSelectors(),
  ],
}
