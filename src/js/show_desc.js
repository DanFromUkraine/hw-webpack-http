
export default function initBtns() {
    const btns = document.querySelectorAll(".btn-js");
    function show_p_el(btn) {
        let div = btn.nextElementSibling;

        console.log("warn here!!");
        console.dir(btn);

        div.classList.toggle("hidden")
    }
    
    btns.forEach((btn) => {
        btn.addEventListener("click", function() {
            show_p_el(btn);
        });
    });
    
}