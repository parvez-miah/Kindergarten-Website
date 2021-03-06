import logo from './logo.svg';
import './App.css';



import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound'
import Jobs from './Components/Jobs/Jobs';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/jobs">
            <Jobs></Jobs>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>

    </div>
  );
}

export default App;
