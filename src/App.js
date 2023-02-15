import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Menu from "./routes/Menu";

export default function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Menu/>
      <Contact/>
    </div>
  );
}

