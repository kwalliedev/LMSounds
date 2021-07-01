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
            },
            colors: {
                gray: {
                    250: 'rgba(221,221,221,0.92)'
                }
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
        require('@tailwindcss/forms'),
        // ...
    ]
}
