import { Provider } from "react-redux";
import Route from "./routes/Route"
import store from "./redux";

const App = () => {  
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  )
}

export default App