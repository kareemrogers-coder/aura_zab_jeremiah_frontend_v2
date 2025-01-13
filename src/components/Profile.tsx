import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // Gives us back our valid Token in console proof we logged in
  getAccessTokenSilently().then((token) => console.log(token));

  return (
    isAuthenticated && (
      <div className="pl-4 pb-5">
        <img className="rounded-3xl" src={user?.picture} alt={user?.name} />
        <h2 className=" ">{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    )
  );
};

export default Profile;
