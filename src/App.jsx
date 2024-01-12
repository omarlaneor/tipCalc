import { useState } from "react";
import logo from "../public/logo.svg";
import favicon from "../public/favicon-32x32.png";
import dollar from "../public/icon-dollar.svg";
import person from "../public/icon-person.svg";
import "./App.css";
import Datos from "./components/Datos/Datos";
import Resultados from "./components/Resultados/Resultados";

function App() {
  const valorInicial = 0;
  const [billAmount, setBillAmount] = useState(valorInicial);
  const [people, setPeople] = useState(1);

  const cambioManual = (value) => {
    setBillAmount(value);
    setPeople(value);
  };

  const handleReset = () => {
    setBillAmount(valorInicial);
    setPeople(1);
  };

  return (
    <>
      <header>
        <img src={logo} alt="" />
      </header>

      <div className="principalContainer">
        <Datos billAmount={billAmount} cambio={cambioManual} people={people} />
        <div className="result">
          <Resultados
            billAmount={billAmount}
            onReset={handleReset}
            people={people}
          />
        </div>
      </div>
    </>
  );
}

export default App;
