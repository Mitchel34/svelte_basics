<script>
  let name = 'world';
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>Welcome to your first Svelte app.</p>
  <input bind:value={name} placeholder="Enter your name" />
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
    font-size: 2em;
  }

  input {
    padding: 0.5em;
    font-size: 1em;
  }
</style>