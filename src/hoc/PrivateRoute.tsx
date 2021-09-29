import { Route, Redirect } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";

interface IProps {
  component: React.ComponentType;
  path: string;
  isAuthenticated: boolean;
}
const PrivateRoute = (props: IProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <>
        {props.isAuthenticated ? (
          <>
            <Route path={props.path} component={props.component} />
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </>
    );
  }
  return <>{null}</>;
};

export default PrivateRoute;
