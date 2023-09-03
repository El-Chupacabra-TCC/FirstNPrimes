<script lang="ts">
  import { ChatGptStrategy } from "../PrimeDiscoveryStrategies/ChatGptStrategy";

  let howManyToCalc: number = 10
  let primes: number[] = []
  let txtAreaCols: number = 30
  let txtAreaRows: number = 10

  const calculatePrimes = () => {
    primes = new ChatGptStrategy().getFirstNPrimeNumbers(howManyToCalc)
    txtAreaRows = Math.max(Math.sqrt(primes.length), 5)
    txtAreaCols = primes.length <= 1000 ? 30 : Math.sqrt(primes.length)
  }
</script>

<main>
  <div class="flex-container">
    <div class="input-container">
      <label for="inputNumber">How many prime numbers:</label>
      <input type="number" id="inputNumber" bind:value={howManyToCalc}>
    </div>
    <div id="button">
      <button on:click={calculatePrimes}>Calculate Prime Numbers</button>
    </div>
  </div>

  {#if primes.length > 0}
    <textarea name="Prime Numbers" id="primeNumbers" cols={txtAreaCols} rows={txtAreaRows} disabled>{primes}</textarea>
  {/if}
</main>

<style>

  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    margin-bottom: 0.5rem;
  }

  input {
    margin-bottom: 1rem;
  }

  #button {
    padding-bottom: 0.5rem;
  }

  #primeNumbers {
    margin: 1rem;
    overflow: auto;
    width: 100%;
  }

  @media (min-width: 768px) {

    .flex-container {
      flex-direction: row;
    }

    .input-container {
      margin-right: 2rem; /* Adjust as needed for spacing between elements */
    }
  }
</style>
