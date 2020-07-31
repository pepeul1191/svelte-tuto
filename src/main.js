import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		beltColor: 'red',
	}
});

export default app;