module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        spacing: {
            '1': '8px',
            '2': '16px',
            '3': '24px',
            '4': '32px',
            '5': '40px',
            '6': '48px',
        },
        colors: {
                vuejs: "#49e659",
                k1:"BBDB9B",
                k2:"ABC4A1",
                k3:"9DB4AB",
                k4:"8D9D90",
                k5:"878E76",

            },
        
        },
    },
    plugins: [],
}