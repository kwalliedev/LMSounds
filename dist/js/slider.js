new Splide('#galerijFoto', {
    type: 'loop',
    perPage: 2,
    gap: '2rem',
    width: '60rem',
    height: '32.5rem',
    autoplay: true,
    lazyLoad: 'nearby',
    breakpoints: {
        '1024':{
            perPage: 1,
            gap: '2rem',
            height: '30rem'
        },
        '768': {
            perPage: 1,
            gap: '2rem',
            height: '40rem'
        },
        '480': {
            perPage: 1,
            gap: '1rem',
            height: '22rem',
        }
    }
}).mount();
