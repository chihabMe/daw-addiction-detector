import  {  ReactNode } from "react";
interface Props { children: ReactNode };
const ErrorPageContainer = ({ children }: Props) => {
  return <main className="w-full max-w-[600px] mx-auto ">{children}</main>;
};

export default ErrorPageContainer;
