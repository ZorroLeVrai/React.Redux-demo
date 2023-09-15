import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import InputItem from "./components/InputItem";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <h1>The Task App</h1>
        <InputItem />
        <List />
      </PersistGate>
    </Provider>
  );
}

export default App;
