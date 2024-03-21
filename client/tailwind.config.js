/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': "url(./assets/images/login_image3.jpg)",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
    // ...
  ],

}