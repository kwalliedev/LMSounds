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
                    250: 'rgba(245,245,245,0.92)'
                }
            },
            backgroundImage: theme => ({
                'home': "url('../assets/img/bubble.jpg')",
            }),
            maxWidth: {
                '8xl': '85rem'
            },
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
