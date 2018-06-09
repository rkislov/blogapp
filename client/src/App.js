import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/layouts/Home'
import About from './components/layouts/About'
import Layout from './components/layouts/Layout'
//import NewsItemDetail from './components/presentation/NewsItemDetail'
import { Provider } from 'react-redux'
import store from './store/store'
import NewsArticle from './components/containers/NewsArticle'
import NewsSubmit from "./components/containers/NewsSubmit";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/fontawesome/index'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
              <Layout>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/blog/:id" component={NewsArticle}/>
                  <Route path="/submit" component={NewsSubmit}/>
              </Layout>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
