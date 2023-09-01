import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import userContext from "./userContext";


/**
 * Routes to different components
 * If no matching route, then redirect to homepage
 *
 * props: none
 * state: none
 *
 * App -> RoutesList -> {Homepage, CompanyList, CompanyDetail, JobList}
 */
function RoutesList({ handleSignup, handleLogin, userData }) {

  const { isLoggedIn } = useContext(userContext);

  return (
    <Routes>
      {isLoggedIn ?
        <>
          <Route path="/" element={<Homepage firstName={userData.firstName} />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/signup" element={<SignupForm handleSignup={handleSignup} />} />
          <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
          <Route path="/profile" element={<ProfileForm userData={userData} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
        :
        <>
          <Route path="/" element={<Homepage firstName={userData.firstName} />} />
          <Route path="/signup" element={<SignupForm handleSignup={handleSignup} />} />
          <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      }
    </Routes>
  );
}

export default RoutesList;