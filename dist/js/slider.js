new Splide('.splide', {
    height : '40.501rem',
    width: "72rem",
    cover: true,
    lazyLoad: 'sequential',
    type  : 'fade',
    rewind: true,
    breakpoints: {
        '640': {
            height : '19.6rem',
            width: "35rem",
        },
        '480': {
            height : '14rem',
            width: "25rem",
        },
    }
}).mount(window.splide.Extensions);