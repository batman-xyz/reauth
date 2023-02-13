/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(farthest-side, #161616, #1010107a, transparent)",
        "gradient-radial-secondary": "radial-gradient(closest-side, #a8d9f124, #25353d3d, transparent)"
      },
      keyframes: {
        "slide-down-fade": {
          "0%": {
            opacity: 0,
            transform: "translateY(-12px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "slide-up-fade": {
          "0%": {
            opacity: 0,
            transform: "translateY(12px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.9,0.9,0.9)",
            "transform-origin": "center",
          },
          "100%": {
            opacity: 1,
            transform: "scale3d(1,1,1)",
            "transform-origin": "center",
          },
        },
      },
      animation: {
        "slide-down-fade": "slide-down-fade 1s ease-in-out",
        "slide-up-fade": "slide-up-fade 2s ease-in-out",
        "scale-in": "scale-in 2s ease-in-out",
      },
    },
    screens: {
      mobile: "375px",
      tablet: "600px",
      desktop: "1280px",
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
