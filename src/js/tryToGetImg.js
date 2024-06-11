
export async function get_img_by_id(api_link) {
    let url = `https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg`;
    const _img_id = await fetch(api_link)
      .then((resp) => resp.json())
      .then((resp) => resp.data.image_id);
    const url1 = `https://www.artic.edu/iiif/2/${_img_id}/full/843,/0/default.jpg`;
    return _img_id;
  }
  