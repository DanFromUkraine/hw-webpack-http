import get_info from "./fetch_module";
export let data = {};
export let participle_data = {}
import mainTPL from "./../handlebars-src/template.hbs"
import clear from "./clearMainplaceholderHTML";
import initBtns from "./show_desc";

const main_placeholder = document.querySelector(".main");

export async function collect_full_data(event) {
  try {
    if (event.key === "Enter") {
      let selCV = document.querySelector("select").value;
      let seaCV = document.querySelector("input").value;
      await get_info(selCV, { name: seaCV, id: seaCV });
      data = participle_data; // такі перетворення були зайві, проте що зроблено, то зроблено... Колись буду рефакторити, а поки хочби запрацювало
      console.log(participle_data);
      let dataArray = Object.values(data).flat(Infinity);
      let html_code = mainTPL(dataArray);
      main_placeholder.innerHTML = html_code;
      setTimeout(initBtns(), 2);
  }
  } catch {}
 
}

