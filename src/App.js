// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import PageNotFound from './pages/PageNotFound';
import { routesHome } from './routes';
import HomeTemplate from './templates/HomeTemplate';



function App () {

  const showHome = routes => (
    routes.map( ( item, index ) => (
      <HomeTemplate
        key={ index }
        exact={ item.exact }
        path={ item.path }
        Component={ item.component }
      />
    ) )
  );
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          { showHome( routesHome ) }

          <Route path="/auth" component={ Auth } />
          <Route path="" component={ PageNotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
