import { defineConfig, presetAttributify, presetIcons, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify({
      prefix: 'uno-',
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
      },
      autoInstall: true,
    }),
  ],
})
