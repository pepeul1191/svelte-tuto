<script>
	import Modal from './Modal.svelte';
	import AddPersonForm from './AddPersonForm.svelte';

	export let name;
	let beltColor = 'black';
	let firstName = 'Pepe';
	let lastName = 'Valdivia';
	let show = false;

	$: fullName = `${firstName} ${lastName}`;
	$: {
		console.log(beltColor);
		console.log(fullName);
	};

	const toggleModal = () => {
		show = !show;
	};

	const handleClick = () => {
		beltColor  = 'orange';
	};

	const handleInput = (e) => {
		beltColor = e.target.value;
	};

	let people = [
		{name: 'yoshi', beltColor: 'black', age: 5, id: 1},
		{name: 'mario', beltColor: 'red', age: 45, id: 2},
		{name: 'luigi', beltColor: 'blue', age: 35, id: 3},
	];

	const handleClickPerson = (e, id) => {
		// console.log(id);
		console.log(e);
		people = people.filter((person) => person.id != id);
	};

	const addPerson = (e) => {
		console.log('App.svelte', e.detail);
		const person = e.detail;
		people = [person, ...people];
		show = false;
	};
</script>

<Modal 	message="hey, i am a prop value" 	isPromo={false} {show} on:click={toggleModal}>
	<h3>Add a new person</h3>
	<div slot="form-slot">
		<AddPersonForm on:addPerson={addPerson}/>
	</div>
</Modal>
<main>
	<h1>Hello {name}!</h1>
	<h2 style="color: {beltColor}">{fullName} - {beltColor} belt</h2>
	<button on:click={handleClick}>update belt colour</button>
	<p>Visit the <a href="https://svelte.dev /tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}>
	<input type="text" bind:value={beltColor}>
	<input type="text" on:input={handleInput} bind:value={beltColor}>
	<hr>
	{#each people as person (person.id)}
		<div>
			<h4>{person.name}</h4>
			<p>{person.age} years old, {person.beltColor} belt</p>
			{#if person.age < 18}
				<p class="edad">es menor de edad</p>
			{:else if person.age >= 18}
				<p class="edad">es mayor de edad</p>
			{/if}
			<button on:click={(e) => handleClickPerson(e, person.id)}>borrarsh</button>
		</div>
		{:else}
		<p>Lista vacía XD</p>
	{/each}
	<button on:click={toggleModal}>Show Modal</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.edad{
		color: blueviolet;
	}
</style>