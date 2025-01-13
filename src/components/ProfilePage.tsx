import Profile from "./Profile";
import example from "../assets/example.png";
import Board from "./Board";

const ProfilePage = () => {
  return (
    <>
      <Profile />
      <>
        {/* Image upload section */}
        <div className="md:container md:mx-auto dark:bg-gray-900 pb-5">
          <h1 className="text-3xl text-[#38c292] text-center">Logos</h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 pl-9">
            Welcome to Aura here are your images!
          </p>
          {/* Image card example 1 */}
          <div className="md:container md:mx-auto dark:bg-gray-900 flex flex-row justify-center pb-5 space-x-5">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={example}
                  alt="example image"
                />
              </a>
            </div>
            {/* Image card example 2 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={example}
                  alt="example image"
                />
              </a>
            </div>
            {/* Image card example 3 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={example}
                  alt="example image"
                />
              </a>
            </div>
          </div>
        </div>
      </>
      {/* Rankings Page */}
      <>
      <div className="md:container md:mx-auto pt-5 pb-5">
        <Board/>
      </div>
      </>
    </>
  );
};

export default ProfilePage;
