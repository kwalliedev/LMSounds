const modal_overlay = document.querySelector('#modal_overlay');
const modal = document.querySelector('#modal');

//toggle modal
function openModal(value, src, alt, tekst) {
    const modalCl = modal.classList
    const overlayCl = modal_overlay

    if (value && src !== undefined) {
        document.getElementById("image").setAttribute("src", src);
        document.getElementById("image").setAttribute("alt", alt);
        document.getElementById("tekst").innerHTML = tekst;
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

//keys to close modal
document.onkeydown = function (e) {
    if (e.key === "Escape" || e.key === "Backspace") {
        openModal(false);
    }
}

openModal(false)