import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Overview from "./components/Overview/Overview";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Overview />
      <Table/>
    </div>
  );
}

export default App;
