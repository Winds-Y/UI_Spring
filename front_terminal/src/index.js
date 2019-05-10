import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserList from './components/UserList';
import {BrowserRouter, Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'

// ReactDOM.render(
//     (<BrowserRouter>
//         <div className="container">
//             <Route path="/" exact component={UserList}/>
//         </div>
//     </BrowserRouter>),
//     document.getElementById('root'));
ReactDOM.render(<UserList/>,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
