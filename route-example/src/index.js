import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import promise from 'redux-promise';

import PostIndex from './components/posts-index.component';
import PostShow from './components/post-show.component';
import PostCreate from './components/post-create.component';
import PostView from './components/post-show.component';


const store = createStore(reducers, applyMiddleware(promise));

// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <div>
//             <Switch>
//                 <Route path='/' exact >
//                     <PostIndex/>
//                 </Route>
//                 <Route path='/post/new' exact >
//                     <PostCreate/>
//                 </Route>
//                 <Route path='/post/:id' exact component={PostView} />                   
                
//             </Switch>
//             </div>
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById('root')
// );




ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
            <Route path="/" exact  component={PostIndex} />
            <Route path="/post/new" exact  component={PostCreate} />
            <Route path="/post/info/:id" exact  component={PostView} />            
            
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);