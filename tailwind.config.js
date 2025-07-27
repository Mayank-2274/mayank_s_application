module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--bg-primary)",
          text: "var(--text-primary)",
          text75: "var(--text-primary-75)",
          text80: "var(--text-primary-80)"
        },
        secondary: {
          background: "var(--bg-secondary)",
          text: "var(--text-secondary)"
        },
        accent: {
          background: "var(--bg-accent)",
          text: "var(--text-accent)"
        },
        light: {
          background: "var(--bg-light)"
        },
        neutral: {
          background: "var(--bg-neutral)"
        },
        white: {
          background: "var(--bg-white)",
          text: "var(--text-white)",
          text50: "var(--text-white-50)",
          text70: "var(--text-white-70)",
          text80: "var(--text-white-80)"
        },
        muted: {
          text: "var(--text-muted)"
        }
      }
    }
  },
  plugins: []
};