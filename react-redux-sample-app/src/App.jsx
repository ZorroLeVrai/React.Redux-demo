import { store } from "./store";
import { Provider } from "react-redux";
import InputItem from "./components/InputItem";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <h1>Test Hello!</h1>
      <InputItem />
      <List />
    </Provider>
  );
}

export default App;
