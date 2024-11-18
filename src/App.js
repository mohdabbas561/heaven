import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [roadmapText, setRoadmapText] = useState("Roadmap");

  return (
    <div className="app">
      {/* Matrix Background */}
      <MatrixBackground />

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">$HEAVEN</h1>
        <ul className="nav-links">
          <li>
            <a href="https://t.me/heaven_on_near">Twitter</a>
          </li>
          <li>
            <a href="https://x.com/heavenonnear">Telegram</a>
          </li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="main">
        <div className="content">
          {/* Buttons */}
          <div className="buttons">
            <button
              className="btn buy-btn"
              onClick={() =>
                window.open("https://dexscreener.com/near/refv1-5682", "_blank")
              }
            >
              Buy
            </button>
            <button
              className="btn roadmap-btn"
              onMouseEnter={() => setRoadmapText("Coming Soon")}
              onMouseLeave={() => setRoadmapText("Roadmap")}
            >
              {roadmapText}
            </button>
          </div>

          {/* Image */}
          <div className="image">
            <img
              src="https://pbs.twimg.com/profile_images/1857800986871410688/45IcAYUl_400x400.jpg"
              alt="$HEAVEN"
              className="random-image"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">Made with love on NEAR ❤️</footer>
    </div>
  );
};

// Matrix Background Component
const MatrixBackground = () => {
  React.useEffect(() => {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "$HEAVEN"; // Updated letters to only "$HEAVEN"
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 50);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrixCanvas" className="matrix-canvas"></canvas>;
};

export default App;
