<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import donald from '/just-duck-logo.png'
</script>

<main>
  <div>
    <img src={donald} class="logo" alt="FirstNPrimes logo" />
  </div>
  <h1>First n Primes Calculator</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="#" target="_blank" rel="noreferrer">El Chupacabra</a>, the official framework for gathering performance metrics on client side!
  </p>

  <footer class="read-the-docs">
    @Powered by El Chupa LTDA 2023
  </footer>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    scale: 2;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
