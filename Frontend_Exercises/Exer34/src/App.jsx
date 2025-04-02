import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./Redux/Slices/CounterSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state.counter.value)

  return (
    <>
      <div className="container">
        <h1 className="heading">Counter App with Redux</h1>

        <div className="main">
          <h2 className="counter-display">{counter}</h2>
          <div className="button-container">
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decreament</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
