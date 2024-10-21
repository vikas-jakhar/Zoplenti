/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': "'Inter', sans-serif"
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        },
      },
      colors: {
        'light-blue': "#33B6FF",
        'off-blue': "#0202021A",
        'off-gray': "#FFFFFF33",
        'off-black': "#000C24",
      },
      backgroundImage: {
        'notification-layer': "url('./assets/images/png/notification-layer.png')"
      },
      boxShadow: {
        '3xl': "0px 0px 12px 0px #02A9E10F",
        '4xl': "0px 0px 11px 0px #02A9F754",
      },
      fontSize: {
        'custom-xl': "56px",
      }
    },
  },
  plugins: [],
}