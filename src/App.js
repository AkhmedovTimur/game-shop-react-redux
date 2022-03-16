import {
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import HomePage from "./components/home-page/HomePage";
import { store } from "./redux";




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />

        </Routes>
      </div>
    </Provider>
  );
}

export default App;
