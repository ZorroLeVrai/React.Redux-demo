import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}

export default App;
