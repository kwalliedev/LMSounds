//video carrousel
new Splide('#video', {
    height: '42.75rem',
    width: "85rem",
    cover: true,
    lazyLoad: 'sequential',
    type: 'fade',
    rewind: true,
    breakpoints: {
        '1024': {
            height: '42.751rem',
            width: "76rem",
        },
        '640': {
            height: '19.6rem',
            width: "35rem",
        },
        '480': {
            height: '14rem',
            width: "25rem",
        },
    },
    video: {
        autoplay: false
    },
}).mount(window.splide.Extensions);

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