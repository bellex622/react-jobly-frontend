import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/**
 * Routes to different components
 * If no matching route, then redirect to homepage
 *
 * props: none
 * state: none
 *
 * App -> RoutesList -> {Homepage, CompanyList, CompanyDetail, JobList}
 */
function RoutesList({handleSignup, handleLogin, userData}) {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/signup" element={<SignupForm handleSignup={handleSignup} />} />
      <Route path="/login" element={<LoginForm handleLogin={handleLogin}/>} />
      <Route path="/profile" element={<ProfileForm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;