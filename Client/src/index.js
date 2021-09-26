
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import Context from './context'
import App from './App';
//import reactDom from 'react-dom';
//const store = createStore(reducers,compose(applyMiddleware(thunk)));
ReactDOM.render(
   
       <BrowserRouter>
       <Context>
          <App />
       </Context>   
       </BrowserRouter>
   
    , document.getElementById('root'));