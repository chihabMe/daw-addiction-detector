import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import DoctorsPage from "../pages/doctors";
import HomePage from "../pages/home";
import PatientsPage from "../pages/patients";
import QuizPage from "../pages/quiz";
import ServicesPage from "../pages/services";
import ErrorPage from "./error-page";
import { Root } from "./root";

export const router = createBrowserRouter([
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
      {
        path: "quiz",
        element: <QuizPage />,
      },
    ],
  },
]);
