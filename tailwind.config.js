module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'mock-up': "url('../images/Logo_mockup.jpg')",
      },
      height: {
        '130':'38rem',
        '128':'36rem',
        '100':'25rem',
        '105':'28rem',
        '110':'30rem',
        '120':'32rem',
      },
      spacing:{
        '145':'50rem',
        '130':'38rem',
        '128':'36rem',
        '100':'25rem',
        '101':'26rem',
        '105':'28rem',
        '110':'30rem',
        '115':'28.5rem',
        '120':'32rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
