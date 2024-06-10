import { data } from "./collect_data";
import { participle_data } from "./collect_data";

const main_placeholder = document.querySelector(".main");

document.querySelector(".clear-js").addEventListener("click", function() {
    data = {};
    participle_data = {};
    main_placeholder.innerHTML = ""
})