<script>
  import { createEventDispatcher } from 'svelte';

  let dispatch = createEventDispatcher();
  let name;
  let beltColor;
  let age;
  /*let fighitng = false;
  let sneaking = false;
  let running = false;*/
  let skills = [];

  const handleSubmit = () => {
    console.log('AddPersonForm.svelte', name, beltColor, age, skills);
    const person = {
      name,
      beltColor,
      age,
      skills,
      id: Math.random(),
    };
    dispatch('addPerson', person);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="name" bind:value={name}>
  <input type="number" placeholder="age" bind:value={age}>
  <label>Skills</label>
  <!--
  <input type="checkbox" bind:checked={fighitng}>fighitng <br>
  <input type="checkbox" bind:checked={sneaking}>sneaking <br>
  <input type="checkbox" bind:checked={running}>running <br>
  -->
  <input type="checkbox" bind:group={skills} value="fighitng">fighitng <br>
  <input type="checkbox" bind:group={skills} value="sneaking">sneaking <br>
  <input type="checkbox" bind:group={skills} value="running">running <br>
  <label>Belt color</label>
  <select bind:value={beltColor}>
    <option value="black">black</option>
    <option value="orange">orange</option>
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="yellow">yellow</option>
  </select>
  <button>Add Person</button>
</form>

<style>
</style>