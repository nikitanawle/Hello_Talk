module.exports = {
    theme: {
      extend: {
        keyframes: {
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
        animation: {
          'fade-in-slow': 'fade-in 5s ease-in-out',
        },
      },
    },
    plugins: [],
  };
  