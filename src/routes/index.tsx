import { BrowserRouter, Switch, Route } from 'react-router-dom';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <h1>Main</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
