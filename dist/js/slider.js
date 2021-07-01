//video carrousel
new Splide('.splide', {
    height : '47.814rem',
    width: "85rem",
    cover: true,
    lazyLoad: 'sequential',
    type  : 'fade',
    rewind: true,
    breakpoints: {
        '1024':{
            height : '42.751rem',
            width: "76rem",
        },
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