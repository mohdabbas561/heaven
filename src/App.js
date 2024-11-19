import React, { useState } from "react";

const App = () => {
  const [roadmapText, setRoadmapText] = useState("Roadmap");

  const styles = {
    app: {
      fontFamily: "'Courier New', Courier, monospace",
      color: "#fff",
      backgroundColor: "#000",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
      position: "relative",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: "1",
      gap: "2rem",
      textAlign: "center",
      position: "relative",
      zIndex: 2,
    },
    synthium: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "red",
      textShadow: "0 0 10px red",
      marginBottom: "10rem",
    },
    image: {
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      border: "2px solid red",
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      alignItems: "center",
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      gap: "1.5rem",
    },
    btn: {
      padding: "0.8rem 2rem",
      fontSize: "1rem",
      borderRadius: "8px",
      border: "1px solid red",
      backgroundColor: "transparent",
      color: "red",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    btnHover: {
      backgroundColor: "red",
      color: "#000",
    },
    matrix: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      opacity: 0.3,
    },
    aiText: {
      padding: "1rem",
      textAlign: "center",
      backgroundColor: "#111",
      color: "red",
      fontSize: "1rem",
    },
  };

  const MatrixBackground = () => {
    React.useEffect(() => {
      const canvas = document.getElementById("matrixCanvas");
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const letters = "$SYNTHIUM";
      const fontSize = 16;
      const rows = canvas.height / fontSize;
      const drops = Array(Math.floor(rows)).fill(1);

      const draw = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "red";
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((x, i) => {
          const text = letters.charAt(Math.floor(Math.random() * letters.length));
          ctx.fillText(text, x * fontSize, i * fontSize);

          if (x * fontSize > canvas.width && Math.random() > 0.975) {
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

    return <canvas id="matrixCanvas" style={styles.matrix}></canvas>;
  };

  return (
    <div style={styles.app}>
      {/* Matrix Background */}
      <MatrixBackground />

      {/* Main Section */}
      <main style={styles.main}>
        <h1 style={styles.synthium}>$SYNTHIUM</h1>
        <div style={styles.buttonsContainer}>
          <img
            src="https://pbs.twimg.com/profile_images/1858851468909936640/penOn2j5_400x400.jpg"
            alt="Profile"
            style={styles.image}
          />
          <div style={styles.buttons}>
            <button
              style={styles.btn}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = styles.btnHover.backgroundColor;
                e.target.style.color = styles.btnHover.color;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "red";
              }}
              onClick={() => window.location.href = "#"}
            >
              Buy Now
            </button>
            <button
              style={styles.btn}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = styles.btnHover.backgroundColor;
                e.target.style.color = styles.btnHover.color;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "red";
              }}
              onClick={() => {
                setRoadmapText("Coming Soon");
              }}
            >
              {roadmapText}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.aiText}>
        Empowering decentralized AI for the future of innovation.
      </footer>
    </div>
  );
};

export default App;
