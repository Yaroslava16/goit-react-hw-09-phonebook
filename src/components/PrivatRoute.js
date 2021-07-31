import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAuthenticated } from '../redux/auth';

export default function PrivateRoute({ redirectTo, children, ...routeProps }) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
