import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./layout/Header";
import { PageContent } from "./layout/PageContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PageContent />
    </>
  );
}

export default App;
