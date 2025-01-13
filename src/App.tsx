import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";
import AuthenticationGuard from "./components/AuthenticationGuard";
import Signup from "./components/Signup";
import ImageGeneration from "./components/ImageGeneration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/profile"
            element={<AuthenticationGuard childComponent={ProfilePage} />}
          />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/generate" element={<ImageGeneration />} />
        </Routes>
      </BrowserRouter>
      {/* <Profile />
    <Hero /> */}
    </>
  );
}

export default App;
