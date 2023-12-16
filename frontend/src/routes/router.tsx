import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import DoctorsPage from "../pages/doctors";
import HomePage from "../pages/home";
import PatientsPage from "../pages/patients";
import QuizPage from "../pages/quiz";
import ErrorPage from "./error-page";
import { Root } from "./root";
import LoginPage from "../pages/accounts/login";
import SignupPage from "../pages/accounts/signup";
import ProtectedRoute from "../components/wrappers/ProtectedRoute";
import ProfilePage from "../pages/accounts/profile";
import ProfileLayout from "../components/layout/ProfileLayout";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import ProfileSettings from "../components/pages/home/profile/ProfileSettings";
import ProfileNotifications from "../components/pages/home/profile/ProfileNotifications";
import ProfileDeleteAccount from "../components/pages/home/profile/ProfileDeleteAccount";
import ProfileSecurity from "../components/pages/home/profile/ProfileSecurity";

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
        path: "contact",
        element: <ContactPage />,
      },

      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "",
        element: <ProtectedRoute />,
        children: [
          {
            path: "quiz",
            element: <QuizPage />,
          },
          {
            path: "patients",
            element: <PatientsPage />,
          },
          {
            path: "doctors",
            element: <DoctorsPage />,
          },
        ],
      },
      {
        path: "accounts",
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },

          {
            path: "signup",
            element: <SignupPage />,
          },
        ],
      },

      {
        path: "accounts",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <DashBoardLayout />,
            children: [
              {
                path: "profile",
                element: <ProfileLayout />,
                children: [
                  {
                    path: "",
                    element: <ProfilePage />,
                  },
                  {
                    path: "settings",
                    element: <ProfileSettings />,
                  },

                  {
                    path: "notifications",
                    element: <ProfileNotifications />,
                  },
                  {
                    path: "security",
                    element: <ProfileSecurity />,
                  },

                  {
                    path: "delete-account",
                    element: <ProfileDeleteAccount />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
