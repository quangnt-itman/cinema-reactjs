// import logo from './logo.svg';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
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
    <div className="App">
      <BrowserRouter>
        <Switch>
          { showHome( routesHome ) }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
