import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {configureStore} from './store'
import App from './components/app.component';


const store=configureStore();

const ReduxApp=()=>(    
        <Provider store={store}>
            <App/>
        </Provider>
);




ReactDOM.render(

            <ReduxApp/>
            
            ,document.getElementById('root'));