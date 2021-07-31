import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAuthenticated } from '../redux/auth';

export default function PublicRoute({ redirectTo, children, ...routeProps }) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
