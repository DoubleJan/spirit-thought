import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BottomNav from './components/bottomNav/BottomNav';

import Home from './pages/home/Home'
import Note from './pages/note/Note';
import Article from './pages/article/Article';
import Code from './pages/code/Code';

import Admin from './pages/admin/Admin';
import Create from './pages/create/Create';
import Health from './pages/health/Health';
import Login from './pages/login/Login';
import Editor from './pages/editor/Editor';

import ReadPage from './pages/readPage/readPage';


function App() {

  const href = window.location.href;

  return (
    <HashRouter>
      <div className="App">
        <Header />
        <div className={`${href.includes('/health') ? '' : 'page-body'}`}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/note" component={Note} />
            <Route exact path="/article" component={Article} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/health" component={Health} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/editor" component={Editor} />
            <Route exact path="/login" component={Login} />
            <Route path={['/note/reader', '/article/reader']} component={ReadPage} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
        {!href.includes('health') && <BottomNav />}
      </div>
    </HashRouter>
  );
}

export default App;
