export default {
  plugins: {
    // Explicitly point to the config file
    '@tailwindcss/postcss': { config: './tailwind.config.ts' },
    autoprefixer: {},
  },
};
