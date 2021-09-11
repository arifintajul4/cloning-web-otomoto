const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                lg: "5rem",
                none: "0rem",
            },
            center: true,
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            blue: colors.blue,
            green: {
                light: "#83e8eb",
                DEFAULT: "#6ee0e0",
                dark: "#569dbc",
            },
            navy: "#1e3559",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
