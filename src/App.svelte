<script lang="ts">
  import { generatePassword, generateCharset } from "./lib/password";

  // Options for generating passwords
  let useUpperCaseLetters = true;
  let useLowerCaseLetters = true;
  let useNumbers = true;
  let useSymbols = true;
  let maxlength = 16;

  $: password = generatePassword(charset, maxlength);
  $: charset = generateCharset({
    useLowerCaseLetters,
    useUpperCaseLetters,
    useNumbers,
    useSymbols,
  });

  function regenerate() {
    password = generatePassword(charset, maxlength);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(password);

    // TODO: Show tooltip with nice animation and text "Copied"
  }
</script>

<main>
  <h1 id="title">Password Generator</h1>

  <h2 id="password" on:click={copyToClipboard} title="Copy to Clipboard">
    {password}
  </h2>

  <div id="generator">
    <div id="boxes">
      <div class="checkbox">
        <label for="lowercase-letter">Lowercase letters</label>
        <input
          type="checkbox"
          id="lowercase-letters"
          bind:checked={useLowerCaseLetters}
        />
      </div>
      <div class="checkbox">
        <label for="uppercase-letters">Uppercase letters</label>
        <input
          type="checkbox"
          id="uppercase-letters"
          bind:checked={useUpperCaseLetters}
        />
      </div>
      <div class="checkbox">
        <label for="numbers">Use numbers</label>
        <input type="checkbox" id="numbers" bind:checked={useNumbers} />
      </div>
      <div class="checkbox">
        <label for="symbols">Use symbols</label>
        <input type="checkbox" id="symbols" bind:checked={useSymbols} />
      </div>
    </div>

    <div id="range">
      <input type="range" min="6" max="40" bind:value={maxlength} />
      <label for="maxlength">Max length = {maxlength}</label>
    </div>

    <button class="btn-regenerate" on:click={regenerate}
      >Regenerate Password</button
    >
  </div>
</main>

<style lang="scss">
  $background: #202734;
  $foreground: #ffffff;
  $primary: #ffa759;

  $small: 430px;
  $medium: 720px;
  $big: 1200px;

  main {
    background: $background;
    color: $foreground;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  #title {
    text-align: center;
  }

  #password {
    text-align: center;
    cursor: pointer;

    &:hover {
      color: $primary;
    }
  }

  #generator {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    #boxes {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }

    #range {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    button.btn-regenerate {
      width: 50%;
      border: 1px transparent;
      background: $primary;
      padding: 14px;
      border-radius: 10px;
      font-size: larger;
      color: $background;
      cursor: pointer;
      transition: all 0.3s ease;
      transition-property: box-shadow;

      &:hover {
        box-shadow: 0 5px 10px 5px rgba($color: #000, $alpha: 0.25);
      }

      &:active {
        box-shadow: 0 3px 1px 1px rgba($color: #000, $alpha: 0.25);
      }

      @media screen and (min-width: $medium) {
        width: 30%;
      }
    }
  }
</style>
