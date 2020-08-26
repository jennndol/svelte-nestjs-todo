<script>
	import { setClient } from "svelte-apollo";
	import apolloClient from './connection';
	import Nav from "./components/Nav.svelte";
	import Create from "./components/Create.svelte";
	import Todos from "./components/Todos.svelte";

	setClient(apolloClient);
	export let name;
	
</script>

<Nav name={name} />
<Todos />
<Create />

<style>
	
</style>