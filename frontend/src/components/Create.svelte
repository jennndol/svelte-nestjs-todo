<script>
    import { getClient, mutate } from "svelte-apollo";
	import { ADD_TODO } from '../queries';

    let newTask = '';
    
    async function createTodo(e){
        e.preventDefault();
	    const client = getClient();
        await mutate(client, { mutation: ADD_TODO, variables: {
            content: newTask
        }});
        window.location.href = "/";
    }

</script>

<div class="container">
    <form class="form-inline">
        <div class="form-group mb-2 mt-2">
            <label for="content" class="sr-only">Task</label>
            <input bind:value={newTask} type="text" class="form-control" id="idContent" placeholder="Task">
        </div>
        <button type="submit" class="btn btn-success mb-2 mt-2 ml-2" on:click={(e) => createTodo(e)}>Add</button>
    </form>
</div>

<style>
    .container{
        display: flex;
        justify-content: center;
    }
</style>