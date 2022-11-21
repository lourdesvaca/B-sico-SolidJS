import { render } from "solid-js/web";
import { createSignal } from "solid-js";

const name = "clase de web 1";
function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main>
       <a href="https://www.solidjs.com" target="_blank">
          <img
            id="logoSolid"
            src="../src/images/solid.png"
            alt="logo SolidJS"
          />
        </a>
      <div class="main-container">
        <noscript>Welcome to SolidJS</noscript>
        <div id="root"></div>
        <div class="container">
        <div>
          <h1>Buenas noches {name}</h1>
        </div>
          <h1 class="main-title">Contador con SolidJS: {count()}</h1>
          <button
            class="btn contador"
            onClick={() => {
              setCount(count() + 1);
            }}
          >
            Incrementar
          </button>
          <button
            class="btn decrementar"
            onClick={() => {
              setCount(count() - 1);
            }}
          >
            Decrementar
          </button>
          <button
            class="btn reinicio"
            onClick={() => {
              setCount(count() == 0);
            }}
          >
            Reiniciar
          </button>
        </div>
      </div>
      <script src="src/index.jsx" type="module"></script>
    </main>
  );
}

export default App;
