import { useState } from "react";
import Header from "./components/Header";
// import Fv from "./components/Fv";
import Footer from "./components/Footer";
// import Bfaf from "./components/Bfaf";
import Letgo from "./components/Letgo";
import Hamon from "./components/Hamon";
import Rain from "./components/Rain";
import Insuta from "./components/insuta";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hamon />
      <main>
        <Rain/>
        {/* <Fv />
        <Bfaf /> */}
        <Letgo />
        <Insuta/>
      </main>
      <Footer />
    </>
  );
}

export default App;
