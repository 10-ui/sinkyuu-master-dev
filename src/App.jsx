import { useState } from "react";
import Header from "./components/Header";
import Fv from "./components/Fv";
import Footer from "./components/Footer";
import Bfaf from "./components/Bfaf";
import Letgo from "./components/Letgo";
import Hamon from "./components/Hamon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hamon />
      <main>
        <Fv />
        <Bfaf />
        <Letgo />
      </main>
      <Footer />
    </>
  );
}

export default App;
