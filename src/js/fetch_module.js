import { participle_data } from "./collect_data";
import { add_img_url_to_request_data } from "./add_img_url_to_request_data";

export default async function get_info(option, { name, id }) {
  async function get_info_by_name(name) {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${name}`;
    let result = await fetch(url)
      .then((res) => res.json())
      .catch((err) => console.warn(err))
      .finally((_) => console.log("end of output"));
    participle_data[name] = result.data
    add_img_url_to_request_data(participle_data[name]);
    console.log(participle_data);
      return result;

  }

  async function get_info_by_id(id) {
    const url = `https://api.artic.edu/api/v1/artworks/${id}`;
    let result = await fetch(url)
      .then((res) => res.json())
      .catch((err) => console.warn(err))
      .finally((_) => console.log("end of output"));
      participle_data[id] = result.data
    return result;
  }

  if (option === "op1") {
    get_info_by_id(id).data;
  } else {
    get_info_by_name(name).data;
  }
}
