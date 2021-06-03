// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import AuthAdmin  from './pages/Auth/AuthAdmin';
import PageNotFound from './pages/PageNotFound';
import { routesAdmin, routesHome } from './routes';
import AdminTemplate from './templates/AdminTemplate';
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

  const showAdmin = routes => (
    routes.map( ( item, index ) => (
      <AdminTemplate
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
          { showAdmin( routesAdmin ) }

          <Route path="/auth" component={ Auth } />
          <Route path="/auth-admin" component={ AuthAdmin } />

          <Route path="" component={ PageNotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
