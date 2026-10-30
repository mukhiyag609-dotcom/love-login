
import React, { useState } from "react";
import "./App.css";

function App() {
  const [yes, setYes] = useState(false);
  const [noPosition, setNoPosition] = useState({
    top: "60%",
    left: "60%",
  });

  const moveNo = () => {
    const randomTop = Math.random() * 75 + 10;
    const randomLeft = Math.random() * 75 + 5;

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  return (
    <div className="container">
      <div className="card">
        {yes ? (
          <>
            <h1>Yayyyyy! ❤️🥹</h1>
            <h2>I Love You So Much! 💖</h2>
            <div className="heart">💗</div>
          </>
        ) : (
          <>
            <div className="heart">🥰</div>

            <h1>Hey Beautiful! ❤️</h1>

            <p>I have a question for you...</p>

            <h2>Will You Be Mine Forever? 💍</h2>

            <button
              className="yes"
              onClick={() => setYes(true)}
            >
              YES ❤️
            </button>

            <button
              className="no"
              style={{
                top: noPosition.top,
                left: noPosition.left,
              }}
              onMouseEnter={moveNo}
              onTouchStart={moveNo}
              onClick={moveNo}
            >
              NO 🙈
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
