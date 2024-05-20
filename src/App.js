import Card from "./components/Card";
import "./styles/style.css";
// import Bubble from "./components/Bubble";

function App() {
  return (
    <div>
      <div className=" top-section  ">
        <Card />
        <Card />
        <Card />

        {/* <h1>Top Section</h1> */}

        {/* <div className="card">
          <h2>Inner Border Animation</h2>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <h2>Double Border Animation</h2>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <h2>Outer Border Animation</h2>
          </div>
        </div> */}

        {/* <Bubble color="red" speed={0.5} opacity={0.4} shape="circle" /> */}
      </div>
      {/* <div className="position-relative bottom-section">
        <h1>Bottom Section</h1>

        <Bubble
          color="lightseagreen"
          speed={1.5}
          opacity={0.6}
          shape="triangle"
        />
      </div> */}
    </div>
  );
}

export default App;
