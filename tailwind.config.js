module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.563rem', { lineHeight: '0.875rem ' }],
        '3xs': ['0.438rem', { lineHeight: '0.688rem ' }],
      },
      colors: {
        body: '#FAFAFB',
        primary: '#FCCF10',
        secondary: '#FFF0B3',
        dark: {
          50: '#EEEEEE',
          100: '#D3D3D3',
          150: '#F5F5F5',
          200: '#B2B2B2',
          250: '#969696',
          300: '#686868',
          350: '#5D5D5D',
          400: '#878EA1',
          450: '#CCCCCC',
          500: '#B5B5B5',
          550: '#9C9C9C',
          600: '#313131',
          650: '#848484',
          700: '#202020',
          750: '#'
        },
      },
      opacity: {
        13: '0.13',
      },
      container: {
        center: true,
        screens: {
          xs: '100%',
          sm: '600px',
          lg: '1280px',
        },
      },
      width: {
        '29': '7.375rem',
        '53': '13.625rem',
        '95': '23.313rem',
      },
      minWidth: {
        '95': '23.313rem',
      },
      lineHeight: {
        '4.5': '1.125rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
