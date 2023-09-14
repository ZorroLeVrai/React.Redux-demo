import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <h1>API call demo</h1>
      <List />
    </Provider>
  );
}

export default App;
