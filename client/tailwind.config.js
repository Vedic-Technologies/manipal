/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': "url(./assets/images/spine.jpg)",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}