import ReactDOM from "react-dom";
// import App from "./app/layout/App";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
const rootEl = document.getElementById("root");

function render() {
  ReactDOM.render(<App />, rootEl);
}

if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();
