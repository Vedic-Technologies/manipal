/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': "url(./assets/images/login/login_back.jpg)",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}