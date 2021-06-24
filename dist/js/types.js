const types = document.getElementsByClassName('types')[0];
if (types) {
    let types_strings = types.getAttribute('data-types-items')
    types_strings = types_strings.split(',')
    new Typed('.types', {
        strings: types_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}