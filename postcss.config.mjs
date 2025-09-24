const config = {
  theme: {
    extend: {
      colors: {
        accent: "var(--accentColor)",
        background: "var(--backgroundColor)",
        title: "var(--titleColor)",
        text: "var(--textColor)",
      },
      gradientColorStops: {
        stripe0: "var(--gradientColorZero)",
        stripe1: "var(--gradientColorOne)",
        stripe2: "var(--gradientColorTwo)",
        stripe3: "var(--gradientColorThree)",
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
