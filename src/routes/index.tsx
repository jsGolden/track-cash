import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../pages/Login';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
