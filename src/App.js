import "./App.css";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Redux Example</h1>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
