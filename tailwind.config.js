/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    backgroundColor: (theme) => ({
      ...theme,
      default: "#0a0a0a",
      component: "#00000065",
      smooth: "#111111",
      card: "#27272790",
    }),
    extend: {
      color: {
        "btn-default": "var(--btn-default)",
        "btn-primary": "var(--btn-primary)",
        "btn-danger": "var(--btn-danger)",
        "btn-secondary": "var(--btn-secondary)",
        "btn-tetriary": "var(--btn-tetriary)",
      },
    },
  },
};
