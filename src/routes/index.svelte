<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<svelte:head>
  <title>Svelte template</title>
  <meta name="description" content="My personal sveltekit template"/>
</svelte:head>

<div class="flex min-h-screen bg-base-200 p-5 text-center justify-center items-center">
		<div class="max-w-xl w-full">
      <pre class="text-8xl pb-6 pointer-events-none select-none">🎉</pre>
			<h1 class="text-5xl font-bold">Hey, It works!</h1>
			<p class="py-6">
				My svelte template for rapidly make web apps. It's a sveltekit template that have many things configured, like tailwindcss, 
        theme-change, daisyUI, rubik fonts from fontsource, no tests out-of-the-box (add ur own), less boilerplate. Ready to deploy anywhere without any extra config.
			</p>
			<div class="mockup-code text-left mb-6 min-w-0">
				<pre data-prefix="$"><code>npx degit NoCrypt/s-template {"<APP_NAME>"} </code></pre>
        <pre data-prefix="$"><code>cd {"<APP_NAME>"}</code></pre>
        <pre data-prefix="$"><code>pnpm i && code .</code></pre>
			</div>
			<button data-toggle-theme="night,light" data-act-class="ACTIVECLASS" class="btn btn-primary"
				>Change Theme</button
			>
		</div>
</div>
