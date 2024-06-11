import { participle_data } from "./collect_data";
// import { add_img_url_to_request_data } from "./add_img_url_to_request_data";
import { add_description_to_requested_data } from "./add_info_to_request";

export default async function get_info(option, { name, id }) {
  async function get_info_by_name(name) {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${name}`;
    let result = await fetch(url)
      .then((res) => res.json())
    participle_data[name] = result.data
    add_description_to_requested_data(participle_data[name]);
  }  
    get_info_by_name(name).data;
  
}
