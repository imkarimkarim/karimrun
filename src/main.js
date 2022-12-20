import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div class="flex-col text-center items-center">
    <div class="sm:flex justify-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
    <h1 class="text-5xl py-6 font-bold">Hello Vite!</h1>
    <div class="card">
      <button class="bg-neutral-900 m-10 px-6 py-3 rounded-lg" id="counter" type="button"></button>
    </div>
    <p class="text-neutral-400 pt-5">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
