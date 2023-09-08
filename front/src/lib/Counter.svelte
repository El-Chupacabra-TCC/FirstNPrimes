<script lang="ts">
  import type { IPrimalityTestStrategy } from "../PrimeDiscoveryStrategies/IPrimalityTestStrategy";
  import { NaiveStrategy } from "../PrimeDiscoveryStrategies/NaiveStrategy";
  import { WikiStrategy } from "../PrimeDiscoveryStrategies/WikiStrategy";

  let howManyToCalc: number = 10
  let primes: number[] = []
  let txtAreaCols: number = 30
  let txtAreaRows: number = 10

  let selectedStrategy = 'Wikipedia'
  let isAdvancedSettingsOpen = false;

  const calculatePrimes = () => {
    let strategy: IPrimalityTestStrategy = new WikiStrategy()

    if (selectedStrategy === 'ChatGPT') {
      strategy = new NaiveStrategy()
    } else if (selectedStrategy === 'Wikipedia') {
      strategy = new WikiStrategy()
    }
  
    primes = strategy.getFirstNPrimeNumbers(howManyToCalc)
    txtAreaRows = Math.max(Math.sqrt(primes.length), 5)
    txtAreaCols = primes.length <= 1000 ? 30 : Math.sqrt(primes.length)
  }

  const toggleAdvancedSettings = () => {
    isAdvancedSettingsOpen = !isAdvancedSettingsOpen;
  };
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

  <div class="advanced-settings">
    <h5>
      <button on:click={toggleAdvancedSettings}>
        Advanced Settings {isAdvancedSettingsOpen ? '▼' : '▶'}
      </button>
    </h5>
    {#if isAdvancedSettingsOpen}
      <label>
        <input type="radio" bind:group={selectedStrategy} value="Wikipedia"> Wikipedia Strategy
      </label>
      <label>
        <input type="radio" bind:group={selectedStrategy} value="ChatGPT"> ChatGPT Strategy
      </label>
    {/if}
  </div>
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

  .advanced-settings {
    text-align: center;
    margin-top: 1rem;
  }

  .advanced-settings h5 button {
    cursor: pointer;
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
