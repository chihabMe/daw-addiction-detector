import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Root } from "./routes/root.tsx";
import ErrorPage from "./routes/error-page.tsx";
import DoctorsPage from "./pages/doctors.tsx";
import PatientsPage from "./pages/patients.tsx";
import ContactPage from "./pages/contact.tsx";
import AboutPage from "./pages/about.tsx";
import HomePage from "./pages/home.tsx";
import ServicesPage from "./pages/services.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "doctors",
        element: <DoctorsPage />,
      },

      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "patients",
        element: <PatientsPage />,
      },

      {
        path: "contact",
        element: <ContactPage />,
      },

      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
