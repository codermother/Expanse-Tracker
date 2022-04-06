import { Navigate, Route, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: React.FC<any>;
}

function PrivateRoute({ component: Component, ...theRest }: PrivateRouteProps) {
  return (
    <Route
    /*    {...theRest}
      render={(props) => {
        const token = localStorage.getItem("token");

        if (token) {
          return <Component {...props} />;
        }
        return <Navigate to="/login" />;
      }} */
    />
  );
}

export default PrivateRoute;
