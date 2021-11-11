import './App.css'
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>

        {/* Switch는 순서대로 알맞는 딱 한개의 결과만 반환하고 쉰다. 
        이 효율적인 녀석을 감독하기 위한 도구가 exact. */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          {/* 여기도 마찬가지로, js의 이름이 아닌, articles 이다. */}
          <Route path='/articles/:id'>
            <Article />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App
