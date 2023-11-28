export async function load({ fetch, params }) {
    /* const { fetch, params } = context; */

    const id = params.id;

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const guide = await res.json();

    /* console.log(res.status); */
    if(res.ok) {
        return {
            guide: guide
        }
    }

    return {
        /* status: res.status,
        error: new Error('Could not fetch guide data!') */
        status: 301,
        redirect: "/guides"
    }
}