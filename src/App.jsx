import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreCencepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  function handleSelect(selectedButton) {}

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreCencepts {...CORE_CONCEPTS[0]} />
            <CoreCencepts {...CORE_CONCEPTS[1]} />
            <CoreCencepts {...CORE_CONCEPTS[2]} />
            <CoreCencepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
