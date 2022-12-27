function range(start, end, increment = 1)
{
  const count = Math.floor((end - start + increment) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}

const minFontSize = 5;
const maxFontSize = 80;

const minSpacingPixel = 0;
const maxSpacingPixel = 800;
const spacingPixelIncrement = 5;

const vhs = ['10vh', '20vh', '30vh', '40vh', '50vh', '60vh', '70vh', '80vh', '90vh', '100vh'];
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '250px',
      'ss': '500px',
      'sm': '640px', //`@media (min-width: 640px) { ... }`
      'md': '768px',
      'xl': '1024px',
      'lg': '1280px',
      '2xl': '1536px',
    },

    // Extend default configurations
    extend: {
      colors: {
        primary: '#c1d1e8',
        secondary: '#5692e8',
        dark: '#182c47',
        thick: '#0e1a2b',
        yellow: '#ffeb3b'
      },
      container: {
        center: true,
      },
    },

    // Override default configurations
    fontWeight: {
      normal: 500,
      medium: 600,
    },

    fontSize: {
      ...range(minFontSize, maxFontSize).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    spacing: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    maxWidth: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    minWidth: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
    },

    maxHeight: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {}),
    },

    minHeight: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement)
        .reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {}),
      ...vhs.reduce((merged, vh) => ({ ...merged, [vh]: vh }), {}),
    },
  },
  plugins: [],
};