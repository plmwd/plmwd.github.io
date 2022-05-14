module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './index.html',
  ],
  safelist: [
    {
      pattern: /text-.+/
    },
    {
      pattern: /fill-.+/
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code'],
      },
    },
    colors: {
      'eerie-black': '#191726',
      'dark-gunmetal': '#232136',
      'gunmetal': '#2d2a45',
      'independence': '#4b4673',
      'light-lavendar': '#eae8ff',
      'lavendar': '#e0def4',
      'light-periwinkle': '#cdcbe0',
      'old-lavendar': '#6e6a86',
      'pale-cerulean': '#9CCFD8',
      white: {
        300: '#eae8ff',
        400: '#e0def4',
        500: '#cdcbe0',
      },
      gray: {
        200: '#4b4673',
        300: '#2d2a45',
        400: '#232136',
        500: '#191726',
      },
      blue: {
        300: '#65b1cd',
        400: '#569fba',
        500: '#4a869c',
      },
      orange: {
        300: '#f0a4a2',
        400: '#ea9a97',
        500: '#d6746f',
      },
    }
  },
  plugins: [],
}
