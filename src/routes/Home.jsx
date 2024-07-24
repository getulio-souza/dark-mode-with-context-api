import React from "react";

import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  //aqui acessamos as propriedades do nosso objeto criado no themeContext.jsx
  //e fazemos uma destruturacao
  // acessamos o useContext passando o contexto que criamos (no caso, themeContext)
  const { theme, toogleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>pagina inicial</h1>
      <p>o tema atual eh: {theme}</p>
      <button
        style={{
            padding: "5px 10px",
            borderRadius: "5px",
            marginTop: "10px",
            fontWeight: "bold",
            cursor: "pointer",
        }}
        onClick={toogleTheme}
      >
        mudar tema
      </button>
    </div>
  );
};

export default Home;
