/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-bg': '#F5F3ED',
                'brand-text': '#000000',
                'brand-blue': '#104E84',
                'brand-accent': '#3E5870',
                'brand-light': '#A4BAC5',
            },
            fontFamily: {
                serif: ['Oranienbaum', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
                script: ['Pinyon Script', 'cursive'],
                body: ['Cormorant Garamond', 'serif'],
            },
        },
    },
    plugins: [],
}
