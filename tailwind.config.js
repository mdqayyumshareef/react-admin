module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.{js,jsx,ts,tsx,css,scss}', 
        './public/index.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding:'2rem'
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
