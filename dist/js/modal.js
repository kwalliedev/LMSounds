const modal_overlay = document.querySelector('#modal_overlay');
const modal = document.querySelector('#modal');

function openModal(value, src, alt) {
    const modalCl = modal.classList
    const overlayCl = modal_overlay

    if (value && src !== undefined) {
        document.getElementById("image").setAttribute("src", src)
        document.getElementById("image").setAttribute("alt", alt)
        overlayCl.classList.remove('hidden')
        setTimeout(() => {
            modalCl.remove('opacity-0')
            modalCl.remove('-translate-y-full')
            modalCl.remove('scale-150')
        }, 100);
    } else {
        modalCl.add('-translate-y-full')
        setTimeout(() => {
            modalCl.add('opacity-0')
            modalCl.add('scale-150')
        }, 100);
        setTimeout(() => overlayCl.classList.add('hidden'), 300);
    }
}

openModal(false)