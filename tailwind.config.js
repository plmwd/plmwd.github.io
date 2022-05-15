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
      cyan: {
        300: '#a6dae3',
        400: '#9ccfd8',
        500: '#7bb8c1',
      },
      red: {
        300: '#f083a2',
        400: '#eb6f92',
        500: '#d84f76',
      },
      blue: {
        300: '#65b1cd',
        400: '#569fba',
        500: '#4a869c',
      },
      green: {
        300: '#b1d196',
        400: '#a3be8c',
        500: '#8aa872',
      },
      magenta: {
        300: '#ccb1ed',
        400: '#c4a7e7',
        500: '#a580d2',
      },
      pink: {
        300: '#f0a6cc',
        400: '#eb98c3',
        500: '#d871a6',
      },
      yellow: {
        300: '#f9cb8c', 
        400: '#f6c177',
        500: '#e6a852',
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
