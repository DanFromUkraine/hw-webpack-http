const btns = document.querySelectorAll(".btn-js");

function show_p_el(btn) {
    let p = btn.nextElementSibling;
    p.style.display = p.style.display === 'none' ? 'block' : 'none';
}

btns.forEach((btn) => {
    btn.addEventListener("click", function() {
        show_p_el(this);
    });
});