module.exports = {
    content: [
       './src/js/**/*.vue',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        borderWidth: {
          '3': '3px',
        },
        inset: {
          full: '100%',
          "1": '0.25rem',
          "2": '0.5rem',
          "3": '0.75rem',
          "4": '1rem',
          "6": '1.5rem',
          "8": '2rem'
        },
        maxHeight: {
          '0': '0',
          '64': '16rem'
        },
        opacity: {
          "10": '0.1',
          "20": '0.2',
          "30": '0.3',
          "40": '0.4',
          "60": '0.6',
          "70": '0.7',
          "80": '0.8',
          "90": '0.9'
        },
        spacing: {
          "2px": '2px',
          "7": '1.75rem', 
          '28': '7rem',
          '36': '9rem'
        },
        transformOrigin: {
          "0": "0%",
        },
        zIndex: {
          '-10': '-10',
          '-20': '-20',
          '-30': '-30',
          '-40': '-40',
          '-50': '-50'
        },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
  
        black: '#000000',
        white: '#ffffff',
  
        gray: {
          lightest: '#f2f2f2',
          lighter: '#e5e5e5',
          light: '#c5c5c5',
          DEFAULT: '#7e7e7e',
          dark: '#8c8c8c',
          darker: '#616161',
          darkest: '#333333'
        },
        red: {
          DEFAULT: '#e02128'
        },
      },
      screens: {
        '-sm': {max: '639px'},
        'sm': '640px',
        'sm-md': {min: '640px', max: '767px'},
        '-md': {max: '767px'},
        'md': '768px',
        'md-lg': {min: '768px', max: '1023px'},
        '-lg': {max: '1023px'},
        'lg': '1024px'
      },
      transitionDuration: {
        '100': '100ms',
        '250': '250ms',
        '500': '500ms',
        '750': '750ms',
        '1000': '1s',
        '1500': '1.5s',
        '2000': '2s',
        '2500': '2.5s',
        '3000': '3s'
      },
      transitionProperty: {
        DEFAULT: 'all',
        area: 'height, width, padding, margin',
        colors: 'background-color, border-color, color',
        'max-size': 'max-height, max-width',
        opacity: 'opacity',
        size: 'height, width',
        spacing: 'padding, margin',
        transform: 'transform'
      },
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
  }
  