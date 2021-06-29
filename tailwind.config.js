module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                '3xl': '2000px',
            },
            animation: {
                'bounce': 'bounce 2s infinite',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        // ...
        require('tailwindcss'),
        require('autoprefixer'),
        // ...
    ]
}
