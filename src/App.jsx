import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Letgo from "./components/Letgo";
import Hamon from "./components/Hamon";
import Rain from "./components/Rain";
// import Insuta from "./components/insuta";
import Top from "./components/Top";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hamon />
      <main>
        <Top/>
        <Rain/>
        {/* <Fv />
        <Bfaf /> */}
        <Letgo />
        {/* <Insuta/> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
