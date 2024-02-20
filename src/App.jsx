import "./App.css";
import minuteMarks from "./assets/minuteMarks.svg";
import fiveMinuteMarks from "./assets/fiveMinuteMarks.svg";
import secondHand from "./assets/secondHand.svg";
import minuteHand from "./assets/minuteHand.svg";
import hourHand from "./assets/hourHand.svg";
import { useEffect, useRef, useState } from "react";

function App() {

  const secondHandRef = useRef( null )
  const minuteHandRef = useRef( null )
  const hourHandRef = useRef( null )
  const [ ticker, setTicker ] = useState( 0 )

  useEffect(() => {
    const date = new Date();
    const time = {
      second: date.getSeconds(),
      minute: date.getMinutes(),
      hour: date.getHours()
    };
    function calculateMinuteHandAngle(minutes) {
      let hoursFraction = minutes / 60;
      let angle = Math.abs(6 * minutes - 0.5 * (hoursFraction * 60 + minutes));
      return angle;
  }
    console.log({ min: time.minute, angle: calculateMinuteHandAngle(time.minute) })
    secondHandRef.current.style.transform="rotate("+ 240+( time.second * 6 ) +"deg)"; //240 since svg of second hand os at 240 degree from 12:00
    minuteHandRef.current.style.transform="rotate("+ calculateMinuteHandAngle(time.minute) +"deg)"
    hourHandRef.current.style.transform="rotate("+ ( time.minute/2 + ( time.hour * 30 ) ) +"deg)"
  }, [ ticker ])

  useEffect(() => {
    const tickInterval = setInterval(() => {
      setTicker(old => old + 1 )
    }, 1000)
    
    return () => clearInterval( tickInterval )
  }, [ ])

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

      <img ref={secondHandRef} className="second" src={secondHand} />

      <img ref={minuteHandRef} className="minute" src={minuteHand} />

      <img ref={hourHandRef} className="hour" src={hourHand} />
    </div>
  );
}

export default App;
