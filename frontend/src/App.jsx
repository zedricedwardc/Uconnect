import { Routes, Route } from "react-router-dom";


import HomePage from "./pages/auth/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import Sidebar from "./pages/auth/components/common/Sidebar";
import RightPanel from "./pages/auth/components/common/RighPanel";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  return (
    <div className='flex max-w-6xl mx-auto'>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path='/notifications' element={<NotificationPage />} />
      <Route path='/profile/:username' element={<ProfilePage />} />
    </Routes>
    <RightPanel/>
    </div>
  );
}

export default App;
