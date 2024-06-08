// import { get_img_by_id }  from "./tryToGetImg";
import get_info from "./fetch_module";
export let data = {};
export let participle_data = {}

export function collect_full_data(event) {
  if (event.key === "Enter") {
    let selCV = document.querySelector("select").value;
    let seaCV = document.querySelector("input").value;
    get_info(selCV, { name: seaCV, id: seaCV });
    data = participle_data;
    let dataArray = [];
    for (const key in participle_data) {
       dataArray.push(participle_data[key])
    }
}
}

