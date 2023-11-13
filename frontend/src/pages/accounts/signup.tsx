import { FormEvent, useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <main className="w-full min-h-screen ">
      <section className="w-full flex-col gap-4 min-h-[65vh]   flex justify-center items-center  ">
        <div className="w-full max-w-[500px] mx-auto p-4 rounded-xl  bg-gray-100 dark:bg-gray-700 ">
          <form onClick={handleFormSubmit} className="flex flex-col gap-2">
            <Input
              name="username"
              type="text"
            placeholder="Enter your username" 
            />

            <Input
              name="email"
              type="email"
            placeholder="Enter your email" 
              Icon={<EnvelopeIcon className=" text-primary   w-5 h-5" />}
            />
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              iconOnClick={toggleShowPassword}
              Icon={showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
            />
            <Input
              name="password2"
              placeholder="Confirm your password"
            />
            <Button className="mt-4">sign up</Button>
          </form>
        </div>
      </section>
    </main>
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

export default SignupPage;
