import React, { useState, useEffect } from "react";

const App = () => {
  const text =
    "The Gate of Heaven will be opened soon, All sins will be washed";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div style={styles.body}>
      <div style={styles.content}>
        <div style={styles.terminal}>
          <p style={styles.text}>{displayText}</p>
        </div>
      </div>
      <footer style={styles.footer}>
        <a
          href="https://t.me/heaven_on_near"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Gate of Heaven
        </a>
      </footer>
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    fontFamily: "'Courier New', Courier, monospace",
    backgroundColor: "black",
    color: "red",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  terminal: {
    fontSize: "1.5rem",
    whiteSpace: "pre-wrap", // Preserve line breaks
    textAlign: "center",
  },
  text: {
    margin: 0,
  },
  footer: {
    textAlign: "center",
    padding: "0.5rem 0",
  },
  link: {
    color: "green",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;
