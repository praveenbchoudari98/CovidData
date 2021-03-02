import './App.css';
import { BrowserRouter,Route,Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducer'
import StateContainer from './container/states_container'
import Home from './Home'
import DistContainer from './container/Dist_Container';


function App() {
  const middleware = [ reduxPromise ];
   const store = createStore(reducers, applyMiddleware(...middleware));
  return (
    <BrowserRouter>
    <Switch>
    <Provider store={store}>
    <Route path="/" exact component={Home}/>
    <Route path="/states" exact component={StateContainer}/>
    <Route path="/states/:id" exact component={DistContainer}/>
    </Provider>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
