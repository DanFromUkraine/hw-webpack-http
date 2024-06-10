
export async function get_author(api_url) {
    const author = await fetch(api_url)
      .then((resp) => resp.json())
      .then((resp) => resp.data.artist_title);
    console.log(author);
    return author;
}