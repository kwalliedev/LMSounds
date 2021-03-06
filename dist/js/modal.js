const modal_overlay = document.querySelector('#modal_overlay');
const modal = document.querySelector('#modal');

//toggle modal
function openModal(value, src, alt) {
    const modalCl = modal.classList
    const overlayCl = modal_overlay

    if (value && src !== undefined) {
        document.getElementById("image").setAttribute("src", src);
        document.getElementById("image").setAttribute("alt", alt);
        overlayCl.classList.remove('hidden');
        setTimeout(() => {
            modalCl.remove('opacity-0');
            modalCl.remove('-translate-y-full');
            modalCl.remove('scale-75');
        });
    } else {
        modalCl.add('-translate-y-full');
        setTimeout(() => {
            modalCl.add('opacity-0');
            modalCl.add('scale-75');
        });
        setTimeout(() => overlayCl.classList.add('hidden'));
    }
}

//keys to close modal
document.onkeydown = function (e) {
    if (e.key === "Escape" || e.key === "Backspace") {
        openModal(false);
    }
}

openModal(false)