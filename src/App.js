import "./App.css";
import Home from "./pages/Home";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Home />
      </UserContextProvider>
    </div>
  );
}

export default App;
