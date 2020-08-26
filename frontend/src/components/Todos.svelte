<script>
	import { getClient, query } from "svelte-apollo";
	import { GET_TODOS } from '../queries';

	const client = getClient();

	function getTodos(){
		return query(client, { query: GET_TODOS });
	}

	const todos = getTodos();
</script>

<div class="container">
	<ul class="list-group">
		{#await $todos}
			Loading...
		{:then result}
		{#each result.data.todos as todo}
			<li class="list-group-item list-group-item-action" >{todo.content}</li>
		{/each}
		{:catch error}
			Error: {error}
		{/await}
	</ul>
</div>

<style>
	.container{
		max-height: calc(100vh - 110px);
        overflow-x: scroll;
	}
</style>