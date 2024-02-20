import "./App.css";
import minuteMarks from "./assets/minuteMarks.svg";
import fiveMinuteMarks from "./assets/fiveMinuteMarks.svg";
import secondHand from "./assets/secondHand.svg";
import minuteHand from "./assets/minuteHand.svg";
import hourHand from "./assets/hourHand.svg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          height: "30%",
          position: "absolute",
        }}
        src={minuteMarks}
      />

      <img
        style={{
          height: "30%",
          position: "absolute",
        }}
        src={fiveMinuteMarks}
      />

      <img
        style={{
          position: "absolute",
          transformOrigin: "0% 0%",
        }}
        src={secondHand}
      />

      <img
        style={{
          position: "absolute",
          transformOrigin: "0% 0%",
        }}
        src={minuteHand}
      />

      <img
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transformOrigin: "0% 0%",
        }}
        src={hourHand}
      ></img>
    </div>
  );
}

export default App;
