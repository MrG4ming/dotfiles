export async function load({ fetch, params }) {
    /* const { fetch, page } = context; */
    const id = params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const guides = await res.json();

    /* console.log(res.status); */
    if(res.ok) {
        return {
            guides: guides
        }
    }

    return {
        status: res.status,
        error: new Error('Could not fetch guides data!')
    }
}