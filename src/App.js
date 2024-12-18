import { useReducer } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import AppContext from "./contexts/Context";
import { reducer } from "./reducer/reducer";
import { initGameState } from "./constant";

function App() {
  const [appState, dispatch] = useReducer(reducer, initGameState); // useReducer returns an array with exactly two values:

  const providerState = {
    appState,
    dispatch,
  };

  return (
    <AppContext.Provider value={providerState}>
      <div className="App">
        <Board />
        <div
          style={{
            padding: "1rem",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              margin: "0",
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            CHESS GAME -
          </h1>
          <div
            style={{
              fontSize: "larger",
              color: "#fff",
              margin: "1rem 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            Player &nbsp;
            <div
              style={{
                display: "inline-block",
                width: "20px",
                height: "20px",
                background: appState.turn === "w" ? "#fff" : "#000",
                marginRight: "0.5rem",
                border: "1px solid #739552",
              }}
            ></div>
            make your move
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
