<script>
	import logo from '$lib/assets/logo.svg';
	
	let searchQuery = '';
	let searchResults = [];
	let showResults = false;

	// Simulate search - replace with actual API call later
	function handleSearch() {
		if (searchQuery.trim().length < 2) {
			searchResults = [];
			showResults = false;
			return;
		}

		// Mock data - replace with actual search API
		searchResults = [
			{ type: 'herb', name: 'Basil', url: '/herbs/basil' },
			{ type: 'spice', name: 'Cinnamon', url: '/spices/cinnamon' },
			{ type: 'product', name: 'Basil Essential Oil', url: '/shop/basil-oil' },
			{ type: 'blog', name: 'Benefits of Basil', url: '/blog/benefits-of-basil' }
		].filter(item => 
			item.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
		
		showResults = true;
	}

	function handleInputChange() {
		handleSearch();
	}

	function closeResults() {
		setTimeout(() => {
			showResults = false;
		}, 200); // Delay to allow click on result
	}

	function selectResult(url) {
		searchQuery = '';
		searchResults = [];
		showResults = false;
		// Navigation happens via the <a> tag
	}
</script>

<div class="header">
	<a href="/" class="title-link">
		<img src={logo} class="logo" alt="Herbsy Logo" />
		<div class="title">Herbsy</div>
	</a>

	<!-- Search Form -->
	<div class="search-container">
		<form on:submit|preventDefault={handleSearch} class="search-form">
			<input
				type="text"
				bind:value={searchQuery}
				on:input={handleInputChange}
				on:focus={() => searchQuery && (showResults = true)}
				on:blur={closeResults}
				placeholder="Search herbs, spices, products..."
				class="search-input"
			/>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button type="submit" class="search-button">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="11" cy="11" r="8"></circle>
					<path d="m21 21-4.35-4.35"></path>
				</svg>
			</button>
		</form>

		<!-- Search Results Dropdown -->
		{#if showResults && searchResults.length > 0}
			<div class="search-results">
				{#each searchResults as result}
					<a href={result.url} class="search-result-item" on:click={() => selectResult(result.url)}>
						<span class="result-type">{result.type}</span>
						<span class="result-name">{result.name}</span>
					</a>
				{/each}
			</div>
		{:else if showResults && searchQuery.trim().length >= 2}
			<div class="search-results">
				<div class="no-results">No results found</div>
			</div>
		{/if}
	</div>

	<div class="menu">
		<a class="menu-link" href="/blog">Blog</a>
		<a class="menu-link" href="/shop">Shop</a>
		<a class="menu-link" href="/herbs">Herbs</a>
		<a class="menu-link" href="/spices">Spices</a>
	</div>

	<div class="others">
		<button>Create Account</button>
	</div>
</div>

<style>
	.header {
		border-bottom: 1px solid #ccc;
		color: black;
		padding: 20px 90px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
        box-shadow: 0 0 transparent, 0 0 transparent, 0 4px 8px rgba(0, 0, 0, .16);
	}

	.title-link {
		text-decoration: none;
		color: black;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-shrink: 0;
	}

	.title {
		font-size: 1.25rem;
		font-weight: bold;
		cursor: pointer;
		text-decoration: none;
	}

	.logo {
		width: 30px;
		height: 30px;
	}

	/* Search Styles */
	.search-container {
		position: relative;
		flex: 1;
		max-width: 400px;
	}

	.search-form {
		display: flex;
		position: relative;
	}

	.search-input {
		width: 100%;
		padding: 10px 40px 10px 16px;
		border: 1px solid #ccc;
		border-radius: 24px;
		font-size: 0.9rem;
		outline: none;
		transition: border-color 0.2s;
	}

	.search-input:focus {
		border-color: #4caf50;
	}

	.search-button {
		position: absolute;
		right: 8px;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		color: #666;
		cursor: pointer;
		padding: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: background-color 0.2s;
	}

	.search-button:hover {
		background-color: #f0f0f0;
	}

	.search-results {
		position: absolute;
		top: calc(100% + 8px);
		left: 0;
		right: 0;
		background: white;
		border: 1px solid #ccc;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		max-height: 400px;
		overflow-y: auto;
		z-index: 1000;
	}

	.search-result-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 16px;
		text-decoration: none;
		color: black;
		border-bottom: 1px solid #f0f0f0;
		transition: background-color 0.2s;
	}

	.search-result-item:last-child {
		border-bottom: none;
	}

	.search-result-item:hover {
		background-color: #f9f9f9;
	}

	.result-type {
		background-color: #4caf50;
		color: white;
		padding: 4px 8px;
		border-radius: 4px;
		font-size: 0.75rem;
		text-transform: uppercase;
		font-weight: 600;
	}

	.result-name {
		font-size: 0.95rem;
	}

	.no-results {
		padding: 16px;
		text-align: center;
		color: #666;
		font-size: 0.9rem;
	}

	.menu {
		display: flex;
		gap: 1rem;
		flex-shrink: 0;
	}

	.menu-link {
		text-decoration: none;
		color: black;
		font-size: 1rem;
	}

	.menu-link:hover {
		text-decoration: underline;
	}

	.others {
		flex-shrink: 0;
	}

	.others button {
		padding: 8px 16px;
		background-color: #4caf50;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.others button:hover {
		background-color: #45a049;
	}
</style>