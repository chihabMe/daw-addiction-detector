import { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { loginSchema } from "../../schemas/login.schema";
import { useAuth } from "../../hooks/useAuth";
const initialState = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuth();
  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  return (
    <main className="w-full min-h-[90vh] flex   justify-center items-center   ">
      <motion.section
        initial={{
          opacity: 0,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
        className="w-full mt-10 h-[750px] relative        mx-auto max-w-[1500px]        rounded-xl shadow      flex justify-between     "
      >
        <div className="w-1/2 relative flex justify-center items-center bg-primary p-2 rounded-l-xl  hidden  backdrop-blur  lg:flex    ">
          <div className="   flex    flex-col gap-2">
            <h1 className="font-bold text-gray-100  text-5xl ">Advanture</h1>
            <h1 className="font-bold text-gray-100  text-5xl ">start here</h1>
            <p className="w-full max-w-[300px] font-medium  text-gray-100 py-2">
              create an account to join our community
              <Link to="/accounts/signup" className="   font-bold">
                {" "}
                here!
              </Link>
            </p>
          </div>
        </div>
        <div className=" w-full mx-auto lg:w-1/2 bg-light rounded-r-xl dark:bg-text-darker py-4 px-2 rounded-r-xl     gap-4  flex flex-col  justify-center   bg-blue-100 ">
          <div className="w-full max-w-[500px]  mx-auto">
            <h1 className="font-medium text-2xl my-2 text-text-darker dark:text-text-ligther text-center py-2">
              Hello! Welcome back
            </h1>
            <Formik
              initialValues={initialState}
              validationSchema={loginSchema}
              onSubmit={async (values, actions) => {
                console.log(values);
                await login(values.email, values.password);
                actions.setSubmitting(false);
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit} className="flex flex-col ">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    Icon={<EnvelopeIcon className=" text-primary   w-5 h-5" />}
                    className="bg-blue-50 my-2"
                  />
                  <Input
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    iconOnClick={toggleShowPassword}
                    Icon={
                      showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />
                    }
                    className="bg-blue-50 my-4"
                  />
                  <div className="flex justify-end py-4">
                    <Link
                      to="/accounts/password/restore"
                      className="text-text-darker text-primary dark:text-text-dark  transition-all duration-200 hover:!text-primary "
                    >
                      Recover Password ?
                    </Link>
                  </div>
                  <Button
                    disabled={props.isSubmitting}
                    isLoading={isLoading}
                    type="submit"
                    className="mt-4 font-bold shadow-sm shadow-blue-300 hover:shadow-blue-300 hover:shadow-lg"
                  >
                    Sign in
                  </Button>
                </form>
              )}
            </Formik>
            <div className="flex items-center justify-between gap-4 py-2  text-gray-400 font-medium">
              <motion.hr className=" grow my-6 border-t-2 border-gray-400 dark:border-gray-600" />
              <p>or </p>
              <motion.hr className=" grow my-6 border-t-2 border-gray-400 dark:border-gray-600" />
            </div>
            <div className="flex justify-around lg:justify-center  flex-col     lg:gap-4 lg:flex-row ">
              <LoginSocialMediaItem
                text="google"
                link="/accounts/login"
                src="/images/social_media/google.png"
              />
              <LoginSocialMediaItem
                text="apple"
                link="/accounts/login"
                src="/images/social_media/apple.png"
              />
              <LoginSocialMediaItem
                text="facebook"
                link="/accounts/login"
                src="/images/social_media/facebook.png"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

const LoginSocialMediaItem = ({
  src,
  link,
  text,
}: {
  src: string;
  text: string;
  link: string;
}) => {
  return (
    <motion.div className="bg-ligth dark:bg-dark relative  py-[15px] px-10 hover:shadow-lg   transition-all     duration-200  rounded-lg  shadow-sm cursor-pointer ">
      <Link
        to={link}
        className="flex justify-center w-full  items-center w-6 h-6"
      >
        <img
          src={src}
          className="w-7 h-7  mx-auto absolute left-4  lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 top-1/2   "
        />
        <span className=" lg:hidden text-text-darker capitalize font-bold dark:text-text-ligther">
          {text}
        </span>
      </Link>
    </motion.div>
  );
};

const HidePasswordIcon = () => {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <EyeSlashIcon className=" text-primary   w-5 h-5" />
    </motion.div>
  );
};

const ShowPasswordIcon = () => {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <EyeIcon className=" text-primary   w-5 h-5" />
    </motion.div>
  );
};

export default LoginPage;
