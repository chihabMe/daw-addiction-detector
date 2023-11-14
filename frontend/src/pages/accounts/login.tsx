import { FormEvent, useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <main className="w-full min-h-screen flex justify-center items-center  ">
      <section className="w-full h-[800px]   mx-auto max-w-[1500px]   gap-4   my-auto  rounded-xl p-8   flex justify-between   ">
        <div className="w-2/3 hidden  lg:flex    ">
          <div className="w-full max-w-[500px] flex  pt-10  flex-col gap-4">
            <h1 className="font-bold text-text-darker dark:text-text-ligther text-5xl ">Sign in to</h1>
            <h1 className="font-bold text-text-darker dark:text-text-ligther text-5xl ">start your test</h1>
            <p className="w-full max-w-[300px] font-medium text-text-dark dark:text-text-light py-2">
              if you don't have an account you can 
              <Link to="/accounts/signup" className="text-primary  font-bold">
                 {" "} Register here!
              </Link>
            </p>
          </div>
        </div>
        <div className=" w-full mx-auto lg:w-1/3 max-w-[450px]   gap-4  flex flex-col justify-center   ">
          <form onClick={handleFormSubmit} className="flex flex-col ">
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              Icon={<EnvelopeIcon className=" text-primary   w-5 h-5" />}
              className="bg-blue-50 my-2"
            />
            <Input
              name="password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              iconOnClick={toggleShowPassword}
              Icon={showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
              className="bg-blue-50 my-4"
            />
            <div className="flex justify-end py-4">
              <Link
                to="/accounts/password/restore"
                className="text-text-dark dark:text-text-dark font-medium hover:!text-primary "
              >
                Recover Password ?
              </Link>
            </div>
            <Button className="mt-4 font-bold shadow-sm shadow-blue-300 hover:shadow-blue-300 hover:shadow-lg">
              Sign in
            </Button>
          </form>
          <div className="flex items-center justify-between gap-4 py-4  text-gray-400 font-medium">
            <hr className=" grow my-6 border-t-2 border-gray-300 dark:border-gray-600" />
            <p>or continure with</p>
            <hr className=" grow my-6 border-t-2 border-gray-300 dark:border-gray-600" />
          </div>
          <div className="flex justify-around flex-col gap-4 lg:gap-0 lg:flex-row ">
        <LoginSocialMediaItem text="google" link="/accounts/login" src="/images/social_media/google.png"  />
        <LoginSocialMediaItem text="apple" link="/accounts/login" src="/images/social_media/apple.png"  />
        <LoginSocialMediaItem text="facebook" link="/accounts/login" src="/images/social_media/facebook.png"  />
          </div>
        </div>
      </section>
    </main>
  );
};

const LoginSocialMediaItem = ({src,link,text}:{src:string,text:string,link:string}) => {
  return (
    <div className="bg-ligth dark:bg-dark relative  py-[15px] px-10 hover:shadow-lg   transition-all duration-200  rounded-lg  shadow-sm cursor-pointer ">
      <Link to={link} className="flex justify-center w-full  items-center w-6 h-6">
        <img src={src} className="w-7 h-7  mx-auto absolute left-4 top-1/2 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2   " />
        <span className=" lg:hidden text-text-darker capitalize font-bold dark:text-text-ligther">
          {text}
        </span>
      </Link>
    </div>
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
