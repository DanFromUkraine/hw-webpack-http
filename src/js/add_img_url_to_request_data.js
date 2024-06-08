
import { get_img_by_id } from "./tryToGetImg";
export function add_img_url_to_request_data(request) {
    for (let request_el of request) {
        request_el.img_url = get_img_by_id(request_el.api_link);
    }
}