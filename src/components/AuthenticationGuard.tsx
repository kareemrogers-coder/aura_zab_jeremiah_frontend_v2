import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ComponentType } from "react";

interface AuthenticationProps {
  childComponent: ComponentType<object>;
}

const AuthenticationGuard = ({ childComponent }: AuthenticationProps) => {
  // ProtectedComponent - makes use of withAuthenticationRequired (auth0's route protection)
  // if we are logged in/successfully authenticated then redirect them to the childComponent (first argument we pass in)
  // if we are not logged in/successfully authenticated redirect them to login page
  // ensures we can only access the page if we are logged in/successfully authenticated
  const ProtectedComponent = withAuthenticationRequired(childComponent, {
    onRedirecting: () => <>Loading...</>,
  });

  return <ProtectedComponent />;
};

export default AuthenticationGuard;
