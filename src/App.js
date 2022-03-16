import {
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import HomePage from "./components/home-page/HomePage";
import { store } from "./redux";
import GamePage from "./components/GamePage/GamePage";




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='app/:title' element={<GamePage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
