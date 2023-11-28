<script>
    import { page } from "$app/stores";
</script>

<div class="content">
    <h1>Error { $page.status} </h1>
    <p> Ziemlich leer hier. { $page.error?.message }</p>
</div>