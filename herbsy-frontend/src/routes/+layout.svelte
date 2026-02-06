<script>
	import logo from '$lib/assets/logo.svg';
	import Header from '$lib/components/header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>
<Header />

{@render children()}
