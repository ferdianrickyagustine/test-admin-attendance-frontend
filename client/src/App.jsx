import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./views/HomePage";
import BaseLayout from "./views/BaseLayout";
import LoginPage from "./views/LoginPage";
import { Bounce, ToastContainer } from "react-toastify";
import AttendancePage from "./views/AttendancePage";
import ManageUserPage from "./views/ManageUserPage";
import CreateUserPage from "./views/CreateUserPage";

import UserDetailPage from "./views/UserDetailPage";
import EditUserPage from "./views/EditUserPage";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<BaseLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/view-attendance" element={<AttendancePage />} />
            <Route path="/manage-user" element={<ManageUserPage />} />
            <Route path="/create-user" element={<CreateUserPage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
            <Route path="/edit-user/:id" element={<EditUserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Bounce}
      />
    </>
  )
}
