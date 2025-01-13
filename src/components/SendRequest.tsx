import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

// component to send JWT to backend and validate user.

const SendRequest = () => {
  const { getAccessTokenSilently } = useAuth0();

  const fetchProtectedData = async () => {
    const token = await getAccessTokenSilently();
    console.log("JWT from Auth0:", token);
    const response = await fetch("http://127.0.0.1:5000/users/login", {
      //this endpoint will be different, im just using the localhost as a placeholder
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', 
        //new
      },
      body: JSON.stringify({ //new
        auth0_token: token
        //new
      }) //new
    });
    const data = await response.json();
    console.log(data);
  };
  return <button onClick={() => fetchProtectedData()}>SendRequest</button>;
};

export default SendRequest;


// import { useAuth0 } from "@auth0/auth0-react";

// const { isAuthenticated, getAccessTokenSilently } = useAuth0(); //loginWithRedirect, user,

// const login = async () => {
//     if (isAuthenticated) {
//         try{
//             const token = await getAccessTokenSilently();
//             const response = await fetch ('http://127.0.0.1:5000/users/login', {
//                 method: 'POST',
//                 headers: { 
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ auth0_token: token }),
//             });
//             const data = await response.json();
//             console.log(data);

//         }  catch (error){
//             console.error('Error during authentication:', error);
//         }
//     }
// };

// const LoginButton = () => {
//     return (
//         <button onClick = {login}>
          
//           Login with Auth0

//         </button>
//     );
// };

// export default LoginButton
