module.exports = {
    // purge: {
    //     enabled: true,
    //     content: [
    //         './dist/*.html',
    //         './dist/error/*.html',
    //     ],
    // },
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
                },
                kleur: '#0E0E28'
            },
            backgroundImage: theme => ({
                'home': "url('../assets/img/Home.jpg')",
                'contact': "url('../assets/img/draaiend.jpg')",
            }),
            maxWidth: {
                '8xl': '85rem'
            },
            minHeight: {
                '50': '50vh'
            },
            inset: {
                '2/5': '40%'
            },
        },
        fontFamily: {
            'titel': ['"STIX Two Text"', 'serif'],
            'body': ['Poppins', 'sans-serif']
        }
    },
    variants: {
        extend: {
            borderWidth: ['hover', 'focus', 'active', 'visited'],
        },
    },
    plugins: [
        // ...
        require('tailwindcss'),
        require('autoprefixer'),
        require('@tailwindcss/forms'),
        // ...
    ]
}
