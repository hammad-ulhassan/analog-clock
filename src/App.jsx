import './App.css'
import secondHand from './assets/secondHand.svg'
import minuteHand from './assets/minuteHand.svg'
import hourHand from './assets/hourHand.svg'

function App() {

  return (
      <div style={ {
        display: "flex",
      } }>
          <img className="second" src={secondHand} style={{ width: "100%" }}/>
          <img className="minute" src={minuteHand} style={{ width: "100%" }}/>
          <img className="minute" src={hourHand} style={{ width: "100%" }}/>
      </div>
  )
}

export default App
