import {useState} from "react";
import RegisterForm from "./components/RegisterForm";
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>Regjistrimi i Studenteve</h1>
    <RegisterForm />
    </>
  )
}

export default App;
//d.sh 1) te validohet forma me te gjithe inputs perfundri qdo inputi me shfaq erroirin
//2) te krijohet nje tabel saher krijohet nje student i ri