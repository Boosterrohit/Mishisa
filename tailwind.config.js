/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "custom-input": "590px",
        "custom-slide-image": "390px",
        "mobile-slide-image-width": "320px",
      },
      margin: {
        "custom-margin": "1.5px 0 0 0",
      },
      minHeight: {
        "custom-min-height": "352px",
        "mobile-min-height": "216px",
      },
    },
  },
  plugins: [],
};
