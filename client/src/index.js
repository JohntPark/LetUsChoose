import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import App from './App';
import Feedback from './components/feedback'
import About from './components/about'
import Navbar from './components/navbar'
import Footer from './components/footer'
import InputForm from './components/randomize-food/inputs'
import Search from './components/randomize-food/search'
import './App.css';

ReactDOM.render(
<BrowserRouter>
    <div>
        <Navbar />
            <Switch>

                <Route exct path='/' component={App} />
                <Route path='/feedback' component={Feedback} />
                <Route path='/about' component={About} />
                <Route path='/food' component={InputForm} />
                <Route path='/search' component={Search} />
                
            </Switch>
        <Footer />
    </div>
</BrowserRouter>, document.getElementById('root'));



