import { useNavigate } from "react-router-dom"
import "./App.css"

function App() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="menu">
        <button onClick={() => navigate("/state")}>State</button>
        <button onClick={() => navigate("/effect")}>Effect</button>
        <button onClick={() => navigate("/layoutEffect")}>Layout Effect</button>
        <button onClick={() => navigate("/ref")}>Ref</button>
        <button onClick={() => navigate("/reducer")}>Reducer</button>
        <button onClick={() => navigate("/context")}>Context</button>
        <button onClick={() => navigate("/callback")}>Callback</button>
        <button onClick={() => navigate("/imperativeHandle")}>Imperative Handle</button>
        <button onClick={() => navigate("/memo")}>Memo</button>
      </section>
    </div>
  )
}

export default App
