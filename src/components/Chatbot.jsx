import React, { useState } from "react";

export default function Chatbot() {
  const [step, setStep] = useState("choose");
  const [words, setWords] = useState("");

  const handleOrder = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="chatbot">
      {step === "choose" && (
        <div>
          <h2>Would you like a Coloring Page 🎨 or a Word Puzzle ✏️?</h2>
          <button onClick={() => setStep("coloring")}>Coloring Page</button>
          <button onClick={() => setStep("puzzle")}>Word Puzzle</button>
        </div>
      )}

      {step === "puzzle" && (
        <div>
          <h3>Choose Puzzle Type:</h3>
          <button onClick={() => setStep("wordsearch")}>Word Search 🧩</button>
          <button onClick={() => setStep("crossword")}>Crossword 📝</button>
        </div>
      )}

      {step === "wordsearch" && (
        <div>
          <h3>Enter words (comma-separated):</h3>
          <input type="text" value={words} onChange={(e) => setWords(e.target.value)} />
          <button onClick={() => handleOrder("https://payhip.com/your-wordsearch-product")}>
            Generate Word Search
          </button>
        </div>
      )}

      {step === "crossword" && (
        <div>
          <h3>Enter words (comma-separated):</h3>
          <input type="text" value={words} onChange={(e) => setWords(e.target.value)} />
          <button onClick={() => handleOrder("https://payhip.com/your-crossword-product")}>
            Generate Crossword
          </button>
        </div>
      )}

      {step === "coloring" && (
        <div>
          <h3>Choose a theme:</h3>
          <button onClick={() => handleOrder("https://payhip.com/your-single-page-product")}>
            Order This Page ($0.05)
          </button>
          <button onClick={() => handleOrder("https://payhip.com/your-bundle-product")}>
            Buy Full Bundle ($7.99)
          </button>
        </div>
      )}
    </div>
  );
}