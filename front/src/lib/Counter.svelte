<script lang="ts">
  import { EasyElc, ExecutionProfiles, Persisters, Metrics } from "el-chupacabra"
  import type { IPrimalityTestStrategy } from "../PrimeDiscoveryStrategies/IPrimalityTestStrategy";
  import { NaiveStrategy } from "../PrimeDiscoveryStrategies/NaiveStrategy";
  import { MillerRabinStrategy } from "../PrimeDiscoveryStrategies/MillerRabinStrategy";

  let howManyToCalc: number = 10
  let primes: number[] = []
  let txtAreaCols: number = 30
  let txtAreaRows: number = 10
  const easyElc = new EasyElc(
    new ExecutionProfiles.BrowserExecutionProfile(),
    new Persisters.SheetsonPersister(
      import.meta.env.VITE_SHEET_TAB_NAME,
      import.meta.env.VITE_API_KEY,
      import.meta.env.VITE_SHEET_ID
    )
  );

  const primalityTestStrategies: Record<string, IPrimalityTestStrategy> = {
    "Naive approach": new NaiveStrategy(),
    "Miller-Rabin probabilistic algorithm": new MillerRabinStrategy()
  }

  let selectedStrategy = Object.keys(primalityTestStrategies)[0]
  let isAdvancedSettingsOpen = false;

  const calculatePrimes = () => {
    let strategy: IPrimalityTestStrategy = primalityTestStrategies[selectedStrategy]

    const profilerController = easyElc.startProfiling(selectedStrategy, [new Metrics.DeltaTimeMetric()])
    primes = strategy.getFirstNPrimeNumbers(howManyToCalc)
    profilerController.finish({ numberOfCalculatedNumbers: howManyToCalc })

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
      {#each Object.keys(primalityTestStrategies) as strategyKey}
        <label>
          <input type="radio" bind:group={selectedStrategy} value={strategyKey}> {strategyKey}
        </label>
      {/each}
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
