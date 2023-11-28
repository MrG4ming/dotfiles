export async function load(context) {
    const { fetch } = context;
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