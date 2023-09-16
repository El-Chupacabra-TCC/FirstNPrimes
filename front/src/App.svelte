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
    We use 
    <a href="https://github.com/El-Chupacabra-TCC/el-chupacabra" target="_blank" rel="noreferrer">El Chupacabra</a>! 
    For collecting performance metrics.
  </p>

  <p>
    All collected data can be found 
    <a href="https://docs.google.com/spreadsheets/d/103Hwf4Xm26OctupZV0D4rujSN4S5gxjIgnxgLCMXBhU/edit?usp=sharing" target="_blank" rel="noreferrer">here</a>.
  </p>

  <footer class="read-the-docs">
    @Powered by El Chupa &#x1F410;
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
