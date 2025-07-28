import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./views/HomePage";
import BaseLayout from "./views/BaseLayout";
import LoginPage from "./views/LoginPage";
import { Bounce, ToastContainer } from "react-toastify";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<BaseLayout />} >
            <Route path="/" element={<HomePage />} />
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
