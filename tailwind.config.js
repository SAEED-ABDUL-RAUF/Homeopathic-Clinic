/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./Pharmacy_d3/images/*.{jpg,png,jpeg}",
    "./Pharmacy_d3/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/tailwind_setup/Pharmacy_d3/images/bg-1.png')",
        'about1': "url('/tailwind_setup/Pharmacy_d3/images/f.jpg')",
        'about2': "url('/tailwind_setup/Pharmacy_d3/images/image.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

