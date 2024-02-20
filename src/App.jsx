import "./App.css";
import minuteMarks from "./assets/minuteMarks.svg";
import fiveMinuteMarks from "./assets/fiveMinuteMarks.svg";
import secondHand from "./assets/secondHand.svg";
// import minuteHand from "./assets/minuteHand.svg";
// import hourHand from "./assets/hourHand.svg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        outline: "solid",
        border: "1px solid red"
      }}
    >
      <img
        style={{
          height: "30%",
          position: "absolute",
          outline: "solid",
          border: "1px solid red"
        }}
        src={minuteMarks}
      />

      <img
        style={{
          height: "30%",
          position: "absolute",
          outline: "solid",
          border: "1px solid red"
        }}
        src={fiveMinuteMarks}
      />

      <img
        className="second"
        src={secondHand}
      />
    </div>
  );
}

export default App;
