

export async function get_description(api_url) {
let text = await fetch(api_url).then(resp => resp.json()).catch(e=>{throw e})
console.log(text);
}