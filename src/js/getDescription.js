export async function get_description(api_url) {
    const description = await fetch(api_url)
      .then((resp) => resp.json())
      .then((resp) => resp.data.description);
    return description;
}