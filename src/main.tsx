import { initializeApp } from "firebase/app";

import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import "./index.css";

import LoginPage from "./screens/LoginPage";
import LandingPage from "./screens/LandingPage";

import Footer from "./Components/Footer";
import MyUrl from "./screens/MyUrl";
import RootLayout from "./layout";
import SignIn from "./screens/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/my-url",
    element: <MyUrl />,
  },
]);

const firebaseConfig  = {
  apiKey: "AIzaSyDuX2p-RHtkCsgDkJqZwzzeyle1rUcXWx0",
  authDomain: "capstone-url-shortener.firebaseapp.com",
  projectId: "capstone-url-shortener",
  storageBucket: "capstone-url-shortener.appspot.com",
  messagingSenderId: "906891688862",
  appId: "1:906891688862:web:1581b7d772dc2267e5f48f",
  measurementId: "G-EVJMG1T7F5"
};

function App() {
  return (
    <div
      style={{
        position: "fixed",
        overflow: "scroll",
        inset: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: "1 1 0%" }}>
        <RootLayout>
          <RouterProvider router={router} />
        </RootLayout>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
