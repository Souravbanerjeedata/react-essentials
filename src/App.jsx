import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreCencepts from "./components/CoreConcepts.jsx";

function App() {
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
      </main>
    </div>
  );
}

export default App;
