import BackgroundImage from "./components/backgroundImage/BackgroundImage";
import Header from "./components/header/Header";
import Input from "./components/input/Input";

import "./App.css";

function App() {
  return (
    <div>
      <BackgroundImage />
      <div className="container">
        <Header />
        <Input />
      </div>
    </div>
  );
}

export default App;
