import "./App.css";
import Home from "./components/Home";
import {Route, Routes , Navigate} from "react-router-dom";

function App() {
  return (
    <Routes >
    <Route exact path="/" component={Home}/>
    <Navigate to ="/"/>
   </Routes >
  );
}

export default App;
