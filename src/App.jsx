import BackgroundImage from "./components/backgroundImage/BackgroundImage";
import Header from "./components/header/Header";

import "./App.css";

function App() {
  return (
    <div>
      <BackgroundImage />
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default App;
