import { useState } from "react";
import qrLogo from "./assets/image-qr-code.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App">
      <section className="main-ctn">
        <section className="qr-ctn">
          <img src={qrLogo} alt="qr-logo" />
        </section>
        <section className="text-ctn">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take you coding skills
            to the next level
          </p>
        </section>
      </section>
    </main>
  );
}

export default App;
