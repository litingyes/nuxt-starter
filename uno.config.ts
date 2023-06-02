import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetTypography(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetUno(),
  ],
  theme: {
    breakpoints: {
      sm: '480px',
      md: '960px',
      lg: '1440px',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  rules: [
    ['font-smiley', {
      'font-family': 'SmileySans',
    }],
  ],
})
