import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BottomNav from './components/bottomNav/BottomNav';

import Home from './pages/home/Home'
import Note from './pages/note/Note';
import Article from './pages/article/Article';

import Admin from './pages/admin/Admin';
import Code from './pages/code/Code';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <div className={'page-body'}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/note" component={Note} />
            <Route exact path="/article" component={Article} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/admin" component={Admin} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
        <BottomNav />
      </div>
    </HashRouter>
  );
}

export default App;
