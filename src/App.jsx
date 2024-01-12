import { useState } from "react";
import logo from "../public/logo.svg";
import "./App.css";
import Datos from "./components/Datos/Datos";
import Resultados from "./components/Resultados/Resultados";

function App() {
  const valorInicial = 0;
  const [billAmount, setBillAmount] = useState(valorInicial);
  const [people, setPeople] = useState(1);
  const [botonPorcentaje, setPorcentaje] = useState(0);

  const cambioManual = (value) => {
    setBillAmount(value);
  };

  const handlePorcentaje = (percentage) => {
    setPorcentaje(percentage);
  };

  const handleReset = () => {
    setBillAmount(valorInicial);
    setPeople(1);
    setPorcentaje(0);
  };

  return (
    <>
      <header>
        <img src={logo} alt="" />
      </header>

      <div className="principalContainer">
        <Datos
          billAmount={billAmount}
          cambio={cambioManual}
          people={people}
          cambioPorcentaje={handlePorcentaje}
        />
        <Resultados
          billAmount={billAmount}
          botonPorcentaje={botonPorcentaje}
          people={people}
          onReset={handleReset}
        />
      </div>
    </>
  );
}

export default App;
