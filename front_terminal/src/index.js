import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {HashRouter,BrowserRouter, Switch,Route,Redirect} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux';
import store from '@reduxHome/store/Store'

import Home from './components/Home'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import TestSocketIo from './components/TestSocketIo'
import UserList from './components/UserList';
import CpuMonitor from '@componentsHome/CpuMonitor'
import ControlPanel from '@componentsHome/redux_test/ControlPanel'
import TestPage from '@componentsHome/TestPage'

// ReactDOM.render(
//     (<BrowserRouter>
//         <div className="container">
//             <Route path="/" exact component={UserList}/>
//         </div>
//     </BrowserRouter>),
//     document.getElementById('root'));
// ReactDOM.render(<Home/>,document.getElementById('root'));
ReactDOM.render(
    (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Home>
                        <Switch>
                            <Route exact path={'/'} component={Page1}/>
                            <Route path={'/Page1'} component={Page1}/>
                            <Route path={'/Page2'} component={Page2}/>
                            <Route path={'/Page3'} component={Page3}/>
                            <Route path={'/UserList'} component={UserList}/>
                            <Route path={'/TestSocketIo'} component={TestSocketIo}/>
                            <Route path={'/CpuMonitor'} component={CpuMonitor}/>
                            <Route path={'/ControlPanel'} component={ControlPanel}/>
                            <Route path={'/TestPage'} component={TestPage}/>
                        </Switch>
                    </Home>
                </BrowserRouter>
            </Provider>
        </div>

    ),
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
