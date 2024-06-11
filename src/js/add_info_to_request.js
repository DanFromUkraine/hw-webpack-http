import { get_description } from "./getDescription"
import { get_author } from "./get_author"
import { get_img_by_id } from "./tryToGetImg";


export async function add_description_to_requested_data(request) {
    for (let request_el of request) {
        request_el["description"] = await get_description(request_el.api_link);
        request_el["author"] = await get_author(request_el.api_link);

        let img_id = await get_img_by_id(request_el.api_link);
        request_el.img_url = `https://www.artic.edu/iiif/2/${img_id}/full/843,/0/default.jpg`

    }
}