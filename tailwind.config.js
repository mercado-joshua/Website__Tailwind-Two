module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mobile-pattern': "url('/img/bg-mobile.svg')",
        'desktop-pattern': "url('/img/bg-desktop.svg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
